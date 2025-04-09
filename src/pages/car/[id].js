import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import CarDetailCard from '../../components/Car/CarDetailCard';

const CarDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCar = async () => {
    try {
      const { data } = await axios.get('/api/cars');
      const found = data.find(item => item.id === parseInt(id));
      setCar(found);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchCar();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!car) return <p className="text-center mt-10">Car not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <Link href="/" className="text-blue-500 mb-4 inline-block">
        &larr; Back
      </Link>
      <CarDetailCard car={car} />
    </div>
  );
};

export default CarDetail;
