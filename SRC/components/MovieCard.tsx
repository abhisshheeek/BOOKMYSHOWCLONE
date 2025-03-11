import React from "react";
import { Star } from "lucide-react"; 
import type { Movie } from "../types"; 

interface MovieCardProps {
  movie: Movie;
  onClick: (id: string) => void;
  onBook: (id: string) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick, onBook }) => {
  return (
    <div className="flex flex-col bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      {/* Movie Image Section */}
      <div 
        className="relative group cursor-pointer overflow-hidden rounded-lg"
        onClick={() => onClick(movie.id)}
      >
        <img 
          src={movie.posterUrl} 
          alt={movie.title}
          className="w-full h-[280px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex flex-col justify-end opacity-100">
          <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{movie.title}</h3>
          <div className="flex items-center space-x-2 mb-1">
            <Star className="text-yellow-400 w-4 h-4" /> 
            <span className="text-yellow-400 text-sm">{movie.rating}/10</span>
            <span className="text-gray-400 text-sm">{Math.floor(Math.random() * 100)}K Votes</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {movie.genre.slice(0, 3).map((g) => (
              <span key={g} className="text-[10px] px-1.5 py-0.5 bg-red-600/80 rounded-sm text-white">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* "Book Now" Button */}
      <div className="p-2">
        <button 
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
          onClick={(e) => {
            e.stopPropagation(); // Prevents triggering the card click
            console.log("Booking movie with ID:", movie.id); // Debugging log
            onBook(movie.id);
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
