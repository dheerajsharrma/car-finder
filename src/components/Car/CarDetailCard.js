const CarDetailCard = ({ car }) => {
    return (
      <div className="bg-white dark:bg-gray-800 rounded p-6 shadow">
        <img src={car.image} alt={car.name} className="w-full h-64 object-cover rounded mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{car.name}</h2>
        <p className="text-gray-600 dark:text-gray-300">{car.specs}</p>
        <p className="mt-2 text-gray-700 dark:text-gray-200">Price: Rs.{car.price}</p>
        <p className="text-gray-700 dark:text-gray-200">Fuel: {car.fuel}</p>
        <p className="text-gray-700 dark:text-gray-200">Seating Capacity: {car.seatingCapacity}</p>
      </div>
    );
  };
  
  export default CarDetailCard;
  