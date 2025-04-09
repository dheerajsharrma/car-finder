import { useState, useEffect } from 'react';
import axios from 'axios';
import CarCard from '../components/Car/CarCard';
import DarkModeToggle from '../components/ui/DarkModeToggle';
import useWishlist from '../hooks/useWishlist';
import { CARS_PER_PAGE } from '../config/constants';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({
    brand: '',
    fuel: '',
    minPrice: '',
    maxPrice: '',
    seating: '',
    sort: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { wishlist, toggleWishlist } = useWishlist();

  const fetchCars = async () => {
    setLoading(true);
    try {
      const params = {};
      if (filters.brand) params.brand = filters.brand;
      if (filters.fuel) params.fuel = filters.fuel;
      if (filters.minPrice) params.minPrice = filters.minPrice;
      if (filters.maxPrice) params.maxPrice = filters.maxPrice;
      if (filters.seating) params.seating = filters.seating;

      const { data } = await axios.get('/api/cars', { params });
      if (filters.sort === 'price_low_high') {
        data.sort((a, b) => a.price - b.price);
      } else if (filters.sort === 'price_high_low') {
        data.sort((a, b) => b.price - a.price);
      }
      setCars(data);
      setCurrentPage(1);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, [filters]);

  // Pagination
  const indexOfLast = currentPage * CARS_PER_PAGE;
  const indexOfFirst = indexOfLast - CARS_PER_PAGE;
  const currentCars = cars.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(cars.length / CARS_PER_PAGE);

  return (
    <div className="container mx-auto p-4">
      
      {/* Simple Filters (could be extracted to a separate component) */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow my-4">
        <input
          type="text"
          placeholder="Brand"
          value={filters.brand}
          onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <select
          value={filters.fuel}
          onChange={(e) => setFilters({ ...filters, fuel: e.target.value })}
          className="border p-2 rounded mr-2"
        >
          <option value="">All Fuel Types</option>
          <option value="Petrol">Petrol</option>
          <option value="Petrol-Hybrid">Petrol-Hybrid</option>
          <option value="Electric">Electric</option>
          <option value="Diesel">Diesel</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          className="border p-2 rounded mr-2"
        />
        <select
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          className="border p-2 rounded"
        >
          <option value="">Sort by Price</option>
          <option value="price_low_high">Low to High</option>
          <option value="price_high_low">High to Low</option>
        </select>
        <button
          onClick={fetchCars}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        >
          Apply
        </button>
      </div>

      {loading ? (
        <p className="text-center">Loading cars...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cars.map(car => (
            <CarCard key={car.id} car={car} toggleWishlist={toggleWishlist} isWishlisted={wishlist.some(item => item.id === car.id)} />
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx + 1)}
            className={`mx-1 px-3 py-1 border rounded ${currentPage === idx + 1 ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
