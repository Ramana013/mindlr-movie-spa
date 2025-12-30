import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "8bc92c4e1f58c8cca0fe20792894ad9d"; 

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };

    if (id) fetchMovie();
  }, [id]);

  if (error) return <div className="text-white p-10">Error: {error}</div>;
  if (!movie) return <div className="text-white p-10 text-center">Loading movie details...</div>;

  return (
    <div className="p-10 text-white bg-[#0f172a] min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        
      {/* 1. MOVIE POSTER IMAGE */}
      <div className="flex-shrink-0 flex items-center justify-center">
        {movie.poster_path ? (
          <img 
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
            alt={movie.title} 
            className="rounded-xl shadow-2xl w-full max-w-[350px] border border-gray-700"
          />
        ) : (
          <div className="w-[350px] h-[375px] bg-gray-800 rounded-xl flex items-center justify-center">
            No Image Available
          </div>
        )}
      </div>

        {/* 2. MOVIE DETAILS */}
        <div className="flex flex-col">
          <h1 className="text-5xl font-extrabold mb-2 text-blue-400">
            {movie.title}
          </h1>
          
          {movie.tagline && (
            <p className="mb-6 italic text-gray-400 text-xl">"{movie.tagline}"</p>
          )}

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b border-gray-700 pb-2">
              Synopsis
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {movie.overview || "No synopsis available for this movie."}
            </p>
          </div>

          {/* Additional Info Row */}
          <div className="flex gap-8 text-sm text-gray-400">
            <div>
              <span className="block font-bold text-gray-200 uppercase">Release Date</span>
              {movie.release_date}
            </div>
            <div>
              <span className="block font-bold text-gray-200 uppercase">Rating</span>
              ⭐ {movie.vote_average?.toFixed(1)} / 10
            </div>
            <div>
              <span className="block font-bold text-gray-200 uppercase">Runtime</span>
              {movie.runtime} mins
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MovieDetail;