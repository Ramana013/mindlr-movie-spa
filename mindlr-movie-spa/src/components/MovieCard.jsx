import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL } from '../services/api';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Format release year
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : '';
  
  // Calculate rating percentage
  const ratingPercentage = movie.vote_average ? Math.round(movie.vote_average * 10) : 0;
  
  // Get rating color based on percentage
  const getRatingColor = (rating) => {
    if (rating >= 70) return 'bg-green-500';
    if (rating >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div 
      className="relative w-28 bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movie/${movie.id}`} className="flex flex-col">
        {/* Movie Poster */}
        <div className="relative w-28 h-28 rounded-t-2xl overflow-hidden">
          <img 
            src={movie.poster_path ? `${IMG_URL}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=No+Poster'}
            alt={movie.title}
            className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-80"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/500x750?text=No+Poster';
            }}
          />
          {/* Rating Badge */}
          <div className={`absolute top-1 right-1 ${getRatingColor(ratingPercentage)} text-white text-[8px] font-bold w-6 h-6 rounded-full flex items-center justify-center shadow`}>
            {ratingPercentage}%
          </div>
        </div>
        
        {/* Movie Info */}
        <div className="p-1.5 rounded-b-2xl">
          <h3 className="font-semibold text-white text-xs leading-tight line-clamp-2 h-7 overflow-hidden">
            {movie.title}
          </h3>
          <div className="mt-0.5">
            <span className="text-gray-400 text-[10px]">{releaseYear}</span>
          </div>
        </div>
      </Link>

      
    </div>
  );
};

export default MovieCard;