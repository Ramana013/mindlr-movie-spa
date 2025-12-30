MindlrMovies - Cinematic Discovery SPA
MindlrMovies is a modern, high-performance Single Page Application (SPA) built with React and Tailwind CSS v4. It leverages the TMDB API to provide users with a seamless browsing experience for trending movies and detailed cinematic information.

Features
Real-time Data: Fetches live movie data, ratings, and synopses from the TMDB API.

Responsive Grid: A fluid layout that adjusts from mobile views to a professional 4-column desktop grid.

Dynamic Routing: Individual detail pages for every movie using React Router DOM.

Glassmorphism UI: Modern dark-themed design with sticky navigation and interactive movie cards.

Tech Stack
Frontend: React (Vite)

Styling: Tailwind CSS v4

Icons: Lucide React

Routing: React Router DOM

HTTP Client: Axios

API: The Movie Database (TMDB)

Installation and Setup
Clone the repository: git clone https://github.com/Ramana013/mindlr-movie-spa.git

Install dependencies: npm install

Set up Environment Variables: Create a .env file in the root directory and add your TMDB API key: VITE_TMDB_KEY=your_api_key_here

Run the development server: npm run dev

Project Structure
src/components: Reusable UI elements like MovieCard and Navbar.

src/pages: Main views including Home, MovieList, and MovieDetail.

src/services: API configuration and Axios instance setup.

src/assets: Static images and global styles.

Developed by Ramana
