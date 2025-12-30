import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-5xl font-bold mb-4 text-blue-500">Welcome to MovieMind</h1>
      <p className="text-xl text-gray-400 mb-8 max-w-md">
        Discover the latest trending movies and explore detailed insights using real-time data from TMDB.
      </p>
      <Link 
        to="/movies" 
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all"
      >
        Browse Popular Movies
      </Link>
    </div>
  );
};

export default Home;