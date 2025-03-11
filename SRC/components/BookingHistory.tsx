import React, { useEffect, useContext } from 'react';
import BookingContext from '../context/BookingContext';
import AuthContext from '../context/AuthContext';

const BookingHistory: React.FC = () => {
  const { bookings, loading, error, getBookings } = useContext(BookingContext);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      getBookings();
    }
  }, [isAuthenticated, getBookings]);

  if (!isAuthenticated) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-center">Please log in to view your booking history.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-center">Loading bookings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-center">You have no bookings yet.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Your Booking History</h2>
      
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{booking.movieTitle}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(booking.showtime).toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold">${booking.totalPrice.toFixed(2)}</p>
                <p className="text-xs text-gray-500">
                  Booked on {new Date(booking.bookingDate).toLocaleDateString()}
                </p>
              </div>
            </div>
            
            <div className="mt-2">
              <p className="text-sm">
                <span className="font-semibold">Seats:</span> {booking.seats.join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingHistory;