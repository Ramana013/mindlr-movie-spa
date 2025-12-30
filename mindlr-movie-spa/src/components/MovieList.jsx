import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';
import MovieCard from './MovieCard';
import Loader from './Loader';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const response = await fetchMovies();
        const moviesData = response.data.results;
        setMovies(moviesData);
        setFilteredMovies(moviesData); // Initialize filteredMovies with the full list
      } catch (err) {
        setError("Failed to fetch movies.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery, movies]);

  if (loading) return <Loader />;
  if (error) return <div className="text-red-500 text-center py-20">{error}</div>;

  return (
    <div className="min-h-screen bg-[#0f172a] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar - Increased width */}
        <div className="mb-8 max-w-6xl mx-auto w-full px-4">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for movies..."
              className="w-full px-6 py-3 rounded-full bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 shadow-lg"
              style={{ color: 'white' }}
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Movies Grid - Increased spacing between cards and rounded corners */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 sm:gap-6">
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="flex justify-center px-1">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredMovies.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No movies found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieList;