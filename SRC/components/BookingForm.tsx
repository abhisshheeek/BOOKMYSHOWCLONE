import React, { useState, useContext } from 'react';
import BookingContext from '../context/BookingContext';
import AuthContext from '../context/AuthContext';

interface BookingFormProps {
  movieId: string;
  movieTitle: string;
  onClose: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ movieId, movieTitle, onClose }) => {
  const [showtime, setShowtime] = useState<string>('');
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [seatError, setSeatError] = useState<string>('');
  
  const { createBooking, error } = useContext(BookingContext);
  const { isAuthenticated } = useContext(AuthContext);
  
  // Generate available showtimes for the next 7 days
  const generateShowtimes = () => {
    const showtimes: { value: string; label: string; }[] = [];
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Add three showtimes per day
      ['10:00', '14:30', '19:00'].forEach(time => {
        const [hours, minutes] = time.split(':');
        date.setHours(parseInt(hours), parseInt(minutes), 0, 0);
        
        showtimes.push({
          value: date.toISOString(),
          label: `${date.toLocaleDateString()} - ${time}`
        });
      });
    }
    
    return showtimes;
  };
  
  // Available seats (A1-A10, B1-B10, etc.)
  const availableSeats = () => {
    const seats = [];
    for (const row of ['A', 'B', 'C', 'D', 'E']) {
      for (let i = 1; i <= 10; i++) {
        seats.push(`${row}${i}`);
      }
    }
    return seats;
  };
  
  const handleSeatToggle = (seat: string) => {
    setSeatError('');
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      if (selectedSeats.length >= 10) {
        setSeatError('You can select a maximum of 10 seats');
        return;
      }
      setSelectedSeats([...selectedSeats, seat]);
    }
  };
  
  const calculateTotalPrice = () => {
    // Base price per seat
    const basePrice = 12;
    return selectedSeats.length * basePrice;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      alert('Please log in to book tickets');
      return;
    }
    
    if (!showtime) {
      alert('Please select a showtime');
      return;
    }
    
    if (selectedSeats.length === 0) {
      setSeatError('Please select at least one seat');
      return;
    }
    
    await createBooking({
      movieId,
      movieTitle,
      showtime,
      seats: selectedSeats,
      totalPrice: calculateTotalPrice()
    });
    
    if (!error) {
      onClose();
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Book Tickets for {movieTitle}</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Showtime
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={showtime}
              onChange={(e) => setShowtime(e.target.value)}
              required
            >
              <option value="">Select a showtime</option>
              {generateShowtimes().map((time, index) => (
                <option key={index} value={time.value}>
                  {time.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Seats (Max 10)
            </label>
            {seatError && (
              <p className="text-red-500 text-xs italic mb-2">{seatError}</p>
            )}
            <div className="grid grid-cols-10 gap-2 mb-4">
              {availableSeats().map(seat => (
                <button
                  key={seat}
                  type="button"
                  className={`p-2 text-xs font-bold rounded ${
                    selectedSeats.includes(seat)
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  onClick={() => handleSeatToggle(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>
            <div className="text-center mb-4">
              <div className="w-1/2 h-2 bg-gray-400 mx-auto mb-4 rounded">
                <p className="text-xs text-center mt-3">Screen</p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="bg-gray-100 p-4 rounded">
              <h3 className="font-bold mb-2">Booking Summary</h3>
              <p>Movie: {movieTitle}</p>
              <p>Showtime: {showtime ? new Date(showtime).toLocaleString() : 'Not selected'}</p>
              <p>Seats: {selectedSeats.join(', ') || 'None selected'}</p>
              <p className="font-bold mt-2">Total: ${calculateTotalPrice().toFixed(2)}</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Confirm Booking
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;