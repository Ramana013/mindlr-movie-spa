import { NavLink } from 'react-router-dom';
import { Home, Film, Clapperboard } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50 py-4">
      <div className="container mx-auto px-7 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-blue-600">
          <Clapperboard size={50} />
          <span className="text-2xl font-black tracking-tighter uppercase">Mindlr</span>
        </div>

        {/* Links */}
        <div className="flex gap-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex items-center gap-2 font-medium transition-colors ${isActive ? "text-blue-500" : "text-gray-400 hover:text-white"}`
            }
          >
            <Home size={18} /> Home
          </NavLink>
          <NavLink 
            to="/movies" 
            className={({ isActive }) => 
              `flex items-center gap-2 font-medium transition-colors ${isActive ? "text-blue-500" : "text-gray-400 hover:text-white"}`
            }
          >
            <Film size={18} /> Browse Movies
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;