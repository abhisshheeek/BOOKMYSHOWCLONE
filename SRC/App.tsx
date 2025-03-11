
import { Navbar } from './components/Navbar';
import { MovieCard } from './components/MovieCard';


// Mock data - In a real app, this would come from an API
const TRENDING_MOVIES = [
  {
    id: '1',
    title: 'Dune: Part Two',
    posterUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=800',
    rating: 8.5,
    releaseDate: '2024-03-01',
    genre: ['Sci-Fi', 'Adventure']
  },
  {
    id: '2',
    title: 'Poor Things',
    posterUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800',
    rating: 8.2,
    releaseDate: '2024-02-15',
    genre: ['Drama', 'Romance']
  },
  {
    id: '3',
    title: 'Civil War',
    posterUrl: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=800',
    rating: 7.9,
    releaseDate: '2024-04-12',
    genre: ['Action', 'Drama']
  },
  {
    id: '4',
    title: 'Godzilla x Kong',
    posterUrl: 'https://images.unsplash.com/photo-1571847140471-1d7766e825ea?auto=format&fit=crop&w=800',
    rating: 8.0,
    releaseDate: '2024-03-29',
    genre: ['Action', 'Sci-Fi']
  },
  {
    id: '5',
    title: 'Ghostbusters: Frozen Empire',
    posterUrl: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800',
    rating: 7.5,
    releaseDate: '2024-03-22',
    genre: ['Comedy', 'Fantasy']
  },
  {
    id: '6',
    title: 'Mickey 17',
    posterUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800',
    rating: 7.8,
    releaseDate: '2024-03-29',
    genre: ['Sci-Fi', 'Thriller']
  },
  {
    id: '7',
    title: 'Kung Fu Panda 4',
    posterUrl: 'https://images.unsplash.com/photo-1535007729190-daf0f1cecc3f?auto=format&fit=crop&w=800',
    rating: 7.6,
    releaseDate: '2024-03-08',
    genre: ['Animation', 'Comedy']
  },
  {
    id: '8',
    title: 'Madame Web',
    posterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800',
    rating: 7.2,
    releaseDate: '2024-02-14',
    genre: ['Action', 'Superhero']
  },
  {
    id: '9',
    title: 'Inside Out 2',
    posterUrl: 'https://images.unsplash.com/photo-1512686096451-a15c19314d59?auto=format&fit=crop&w=800',
    rating: 8.3,
    releaseDate: '2024-06-14',
    genre: ['Animation', 'Family']
  },
  {
    id: '10',
    title: 'Furiosa',
    posterUrl: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?auto=format&fit=crop&w=800',
    rating: 8.1,
    releaseDate: '2024-05-24',
    genre: ['Action', 'Adventure']
  },
  {
    id: '11',
    title: 'Kingdom of the Planet of the Apes',
    posterUrl: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=800',
    rating: 7.9,
    releaseDate: '2024-05-10',
    genre: ['Sci-Fi', 'Action']
  },
  {
    id: '12',
    title: 'Deadpool 3',
    posterUrl: 'https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&w=800',
    rating: 8.7,
    releaseDate: '2024-07-26',
    genre: ['Action', 'Comedy']
  },
  {
    id: '13',
    title: 'Joker: Folie à Deux',
    posterUrl: 'https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=800',
    rating: 8.6,
    releaseDate: '2024-10-04',
    genre: ['Drama', 'Thriller']
  },
  {
    id: '14',
    title: 'Alien: Romulus',
    posterUrl: 'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?auto=format&fit=crop&w=800',
    rating: 7.8,
    releaseDate: '2024-08-16',
    genre: ['Horror', 'Sci-Fi']
  },
  {
    id: '15',
    title: 'Venom 3',
    posterUrl: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800',
    rating: 7.4,
    releaseDate: '2024-11-08',
    genre: ['Action', 'Sci-Fi']
  },
  {
    id: '16',
    title: 'Wicked: Part One',
    posterUrl: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=800',
    rating: 8.0,
    releaseDate: '2024-11-27',
    genre: ['Musical', 'Fantasy']
  },
  {
    id: '17',
    title: 'Mufasa: The Lion King',
    posterUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800',
    rating: 7.7,
    releaseDate: '2024-12-20',
    genre: ['Animation', 'Drama']
  },
  {
    id: '18',
    title: 'Gladiator 2',
    posterUrl: 'https://images.unsplash.com/photo-1551796880-ddd03f861ae4?auto=format&fit=crop&w=800',
    rating: 8.4,
    releaseDate: '2024-11-22',
    genre: ['Action', 'Drama']
  },
  {
    id: '19',
    title: 'Kraven the Hunter',
    posterUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800',
    rating: 7.3,
    releaseDate: '2024-08-30',
    genre: ['Action', 'Adventure']
  },
  {
    id: '20',
    title: 'Lord of the Rings: The War of the Rohirrim',
    posterUrl: 'https://images.unsplash.com/photo-1515796162227-ef6cbb4b3f7f?auto=format&fit=crop&w=800',
    rating: 8.5,
    releaseDate: '2024-12-13',
    genre: ['Animation', 'Fantasy']
  },
  {
    id: '21',
    title: 'Despicable Me 4',
    posterUrl: 'https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?auto=format&fit=crop&w=800',
    rating: 7.5,
    releaseDate: '2024-07-03',
    genre: ['Animation', 'Comedy']
  },
  {
    id: '22',
    title: 'Captain America: Brave New World',
    posterUrl: 'https://images.unsplash.com/photo-1569587112025-0d460e81a126?auto=format&fit=crop&w=800',
    rating: 8.2,
    releaseDate: '2024-07-26',
    genre: ['Action', 'Adventure']
  },
  {
    id: '23',
    title: 'Thunderbolts',
    posterUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800',
    rating: 7.8,
    releaseDate: '2024-12-20',
    genre: ['Action', 'Superhero']
  }
];




function App() {
  const handleMovieClick = (movieId: string) => {
    console.log("Movie clicked:", movieId);
    // TODO: Implement navigation to movie details page
  };

  const handleBookClick = (movieId: string) => {
    console.log("Booking movie:", movieId);
    // TODO: Implement booking logic
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Trending Movies Section */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Premium Movies</h2>
              <button className="text-red-500 text-sm hover:text-red-400">
                See All &gt;
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {TRENDING_MOVIES.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={handleMovieClick}
                  onBook={handleBookClick} // ✅ Now properly defined
                />
              ))}
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="mt-8">
            <h2 className="text-xl font-bold mb-4">Coming Soon</h2>
            <div className="bg-gray-900/50 rounded-lg p-8 text-center">
              <p className="text-gray-400">More movies coming soon!</p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <img
              src="book.png"
              alt="Company Logo"
              className="mx-auto mb-4 w-32"
            />

            {/* Social Icons */}
            <div className="flex justify-center space-x-6 mb-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fa-brands fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fa-brands fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fa-brands fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fa-brands fa-youtube text-2xl"></i>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400">
              <p>© 2024 BOOKYOURSHOW All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;