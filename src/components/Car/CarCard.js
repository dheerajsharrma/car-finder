import Link from 'next/link';

const CarCard = ({ car, toggleWishlist, isWishlisted }) => {

  console.log('Car Card rewndering with car: ', car)
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
      <img src={car.image} alt={car.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-bold text-gray-800 dark:text-gray-100">{car.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">Rs.{car.price}</p>
      <div className="mt-2 flex justify-between items-center">
        <Link href={`/car/${car.id}`} className="text-blue-500">
          View Details
        </Link>
        <button onClick={() => toggleWishlist(car)} className="focus:outline-none">
          {isWishlisted ? (
            <span className="text-red-500">♥</span>
          ) : (
            <span className="text-gray-400">♡</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
