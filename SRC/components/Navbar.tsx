import { useState } from "react";
import { Search, User, ChevronDown } from "lucide-react";
import { Sidebar } from "./Sidebar";
import { AuthModal } from "./AuthModel";
import { LocationModal } from "./locationmodal";

export function Navbar() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [modalType, setModalType] = useState<"login" | "signup">("login");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Mumbai");

  return (
    <>
      <nav className="bg-gray-900 text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div className="flex items-center">
              <img src="src/book.png" alt="Company Logo" className="mx-auto mb-3 w-48" />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl mx-8 hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:border-red-500 transition duration-150 ease-in-out"
                  placeholder="Search movies, theaters..."
                />
              </div>
            </div>
            
 {/* Location Picker */}
 <div className="flex items-center cursor-pointer" onClick={() => setIsLocationOpen(true)}>
              <span className="mr-1">{selectedCity}</span>
              <ChevronDown className="w-4 h-4" />
            </div> 

            {/* Auth & Sidebar */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex space-x-2">
                <button 
                  onClick={() => { setIsAuthOpen(true); setModalType("login"); }}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => { setIsAuthOpen(true); setModalType("signup"); }}
                  className="px-4 py-2 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700"

                >
                  Sign Up
                </button>
              </div>
              {/* Mobile Sign In Icon */}
              <button 
                className="sm:hidden p-2 rounded-full hover:bg-gray-800"
                onClick={() => { setIsAuthOpen(true); setModalType("login"); }}
              >
                <User className="w-6 h-6" />
              </button>
              <Sidebar />
            </div>
          </div>
        </div>
      </nav>

      {/* Location Modal */}
      <LocationModal 
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
        onSelectCity={(city: string) => setSelectedCity(city)}
      />

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        type={modalType}
        setModalType={setModalType}
      />
    </>
  );
}
