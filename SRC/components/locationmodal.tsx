import { useState } from "react";
import { X, MapPin, Search } from "lucide-react";


const popularCities = [
  "Mumbai", "Delhi-NCR", "Bengaluru", "Hyderabad", "Ahmedabad",
  "Chandigarh", "Pune", "Chennai", "Kolkata", "Kochi"
];

export function LocationModal({ isOpen, onClose, onSelectCity }: any) {
  const [search, setSearch] = useState("");

  // Function to detect user location
  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude:", position.coords.latitude, "Longitude:", position.coords.longitude);
          alert("Location detected! Implement reverse geocoding to get city name.");
        },
        (_error) => alert("Failed to detect location.")
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return isOpen ? (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-black w-96 p-5 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold">Select Your City</h2>
          <X className="cursor-pointer" onClick={onClose} />
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-2 text-gray-400" />
          <input
  type="text"
  className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none text-black"
  placeholder="Search for your city"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
        </div>

        {/* Detect My Location */}
        <button
          onClick={detectLocation}
          className="w-full flex items-center justify-center py-2 bg-red-500 text-black rounded-md mb-4"
        >
          <MapPin className="mr-2" /> Detect My Location
        </button>

        {/* Popular Cities */}
        <h3 className="text-md font-semibold mb-2">Popular Cities</h3>
        <div className="grid grid-cols-3 gap-3">
          {popularCities
            .filter((city) => city.toLowerCase().includes(search.toLowerCase()))
            .map((city) => (
              <button
                key={city}
                className="border p-2 rounded-md hover:bg-gray-100"
                onClick={() => {
                  onSelectCity(city);
                  onClose();
                }}
              >
                {city}
              </button>
            ))}
        </div>

        {/* View All Cities */}
        <p className="text-center text-red-500 mt-4 cursor-pointer">View All Cities</p>
      </div>
    </div>
  ) : null;
}
