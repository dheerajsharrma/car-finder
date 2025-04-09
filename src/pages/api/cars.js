// This API route returns static sample data and supports filtering via query parameters.

export default function handler(req, res) {
    const cars = [
      // {
      //   id: 1,
      //   name: 'Toyota Camry',
      //   brand: 'Toyota',
      //   price: 24000,
      //   fuel: 'Gasoline', 
      //   seatingCapacity: 5,
      //   image: '/assets/images/camry.jpg',
      //   specs: 'Sedan with advanced safety features',
      // },
      // {
      //   id: 2,
      //   name: 'Honda Accord',
      //   brand: 'Honda',
      //   price: 26000,
      //   fuel: 'Gasoline',
      //   seatingCapacity: 5,
      //   image: '/assets/images/accord.jpg',
      //   specs: 'Reliable midsize sedan',
      // },
      // {
      //   id: 3,
      //   name: 'Tesla Model 3',
      //   brand: 'Tesla',
      //   price: 35000,
      //   fuel: 'Electric',
      //   seatingCapacity: 5,
      //   image: '/assets/images/model3.jpg',
      //   specs: 'Electric vehicle with autopilot',
      // },
      // {
      //   id: 4,
      //   name: 'Ford Explorer',
      //   brand: 'Ford',
      //   price: 32000,
      //   fuel: 'Gasoline',
      //   seatingCapacity: 7,
      //   image: '/assets/images/explorer.jpg',
      //   specs: 'Spacious SUV with off-road capability',
      // },
      // {
      //   id: 5,
      //   name: 'BMW 3 Series',
      //   brand: 'BMW',
      //   price: 42000,
      //   fuel: 'Gasoline',
      //   seatingCapacity: 5,
      //   image: '/assets/images/bmw3.jpg',
      //   specs: 'Luxury sedan with dynamic performance',
      // },

      {
        "id": 1,
        "name": "Land Rover Defender",
        "brand": "Land Rover",
        "price": 10400000,
        "fuel": "Diesel",
        "seatingCapacity": 5,
        "image": "/assets/images/defender.jpg",
        "specs": "Rugged off-roader with luxury features"
      },
      {
        "id": 2,
        "name": "Land Rover Range Rover",
        "brand": "Land Rover",
        "price": 24000000,
        "fuel": "Petrol",
        "seatingCapacity": 5,
        "image": "/assets/images/range_rover.jpg",
        "specs": "Flagship SUV with opulent interiors"
      },
      {
        "id": 3,
        "name": "Toyota Vellfire",
        "brand": "Toyota",
        "price": 12200000,
        "fuel": "Petrol-Hybrid",
        "seatingCapacity": 7,
        "image": "/assets/images/vellfire.jpg",
        "specs": "Luxury MPV with hybrid efficiency"
      },
      {
        "id": 4,
        "name": "BMW X5",
        "brand": "BMW",
        "price": 9700000,
        "fuel": "Diesel",
        "seatingCapacity": 5,
        "image": "/assets/images/x5.jpg",
        "specs": "Premium SUV with dynamic performance"
      },
      {
        "id": 5,
        "name": "BMW Z4",
        "brand": "BMW",
        "price": 9090000,
        "fuel": "Petrol",
        "seatingCapacity": 2,
        "image": "/assets/images/z4.avif",
        "specs": "Sporty convertible with sleek design"
      },
      {
        "id": 6,
        "name": "BMW X7",
        "brand": "BMW",
        "price": 13000000,
        "fuel": "Petrol",
        "seatingCapacity": 7,
        "image": "/assets/images/x7.webp",
        "specs": "Full-size luxury SUV with advanced tech"
      },
      {
        "id": 7,
        "name": "Rolls-Royce Cullinan",
        "brand": "Rolls-Royce",
        "price": 105000000,
        "fuel": "Petrol",
        "seatingCapacity": 5,
        "image": "/assets/images/cullinan.webp",
        "specs": "Ultra-luxury SUV with bespoke features"
      },
      {
        "id": 8,
        "name": "Land Rover Range Rover Sport",
        "brand": "Land Rover",
        "price": 14000000,
        "fuel": "Petrol",
        "seatingCapacity": 5,
        "image": "/assets/images/range_rover_sport.avif",
        "specs": "Sporty SUV with dynamic capabilities"
      },
      {
        "id": 9,
        "name": "Mercedes-Benz GLS",
        "brand": "Mercedes-Benz",
        "price": 13200000,
        "fuel": "Diesel",
        "seatingCapacity": 7,
        "image": "/assets/images/gls.png",
        "specs": "Luxury SUV with spacious interiors"
      },
      {
        "id": 10,
        "name": "Mercedes-Benz G-Class",
        "brand": "Mercedes-Benz",
        "price": 25500000,
        "fuel": "Petrol",
        "seatingCapacity": 5,
        "image": "/assets/images/g_class.avif",
        "specs": "Iconic SUV with robust performance"
      },
      // {
      //   "id": 11,
      //   "name": "Audi Q8",
      //   "brand": "Audi",
      //   "price": 11700000,
      //   "fuel": "Petrol",
      //   "seatingCapacity": 5,
      //   "image": "/assets/images/q8.jpg",
      //   "specs": "Coupe-style SUV with advanced features"
      // },
      // {
      //   "id": 12,
      //   "name": "Porsche Cayenne",
      //   "brand": "Porsche",
      //   "price": 14200000,
      //   "fuel": "Petrol",
      //   "seatingCapacity": 5,
      //   "image": "/assets/images/cayenne.jpg",
      //   "specs": "Performance SUV with luxury amenities"
      // },
      // {
      //   "id": 13,
      //   "name": "Jaguar F-Type",
      //   "brand": "Jaguar",
      //   "price": 9800000,
      //   "fuel": "Petrol",
      //   "seatingCapacity": 2,
      //   "image": "/assets/images/f_type.jpg",
      //   "specs": "Sports car with exhilarating performance"
      // },
      // {
      //   "id": 14,
      //   "name": "Lexus RX",
      //   "brand": "Lexus",
      //   "price": 11000000,
      //   "fuel": "Petrol-Hybrid",
      //   "seatingCapacity": 5,
      //   "image": "/assets/images/rx.jpg",
      //   "specs": "Luxury crossover with hybrid efficiency"
      // },
      // {
      //   "id": 15,
      //   "name": "Volvo XC90",
      //   "brand": "Volvo",
      //   "price": 9600000,
      //   "fuel": "Petrol-Hybrid",
      //   "seatingCapacity": 7,
      //   "image": "/assets/images/xc90.jpg",
      //   "specs": "Scandinavian luxury SUV with safety focus"
      // },
      // {
      //   "id": 16,
      //   "name": "Bentley Bentayga",
      //   "brand": "Bentley",
      //   "price": 40000000,
      //   "fuel": "Petrol",
      //   "seatingCapacity": 5,
      //   "image": "/assets/images/bentayga.jpg",
      //   "specs": "Opulent SUV with handcrafted interiors"
      // },
      // {
      //   "id": 17,
      //   "name": "Maserati Levante",
      //   "brand": "Maserati",
      //   "price": 15000000,
      //   "fuel": "Petrol",
      //   "seatingCapacity": 5,
      //   "image": "/assets/images/levante.jpg",
      //   "specs": "Italian luxury SUV with sporty dynamics"
      // },
      // {
      //   "id": 18,
      //   "name": "Aston Martin DBX",
      //   "brand": "Aston Martin",
      //   "price": 35000000,
      //   "fuel": "Petrol",
      //   "seatingCapacity": 5,
      //   "image": "/assets/images/dbx.jpg",
      //   "specs": "Luxury SUV with signature Aston Martin design"
      // },
      // {
      //   "id": 19,
      //   "name": "Tesla Model S",
      //   "brand": "Tesla",
      //   "price": 8000000,
      //   "fuel": "Electric",
      //   "seatingCapacity": 5,
      //   "image": "/assets/images/model_s.jpg",
      //   "specs": "Electric sedan with autopilot and long range"
      // },
      // {
      //   "id": 20,
      //   "name": "Hyundai Ioniq 5",
      //   "brand": "Hyundai",
      //   "price": 4600000,
      //   "fuel": "Electric",
      //   "seatingCapacity": 5,
      //   "image": "/assets/images/ioniq_5.jpg",
      //   "specs": "Futuristic EV with ultra-fast charging"
      // },
      // {
      //   "id": 21,
      //   "name": "Kia EV6",
      //   "brand": "Kia",
      //   "price": 6100000,
      //   "fuel": "Electric",
      //   "seatingCapacity": 5,
      //   "image": "/assets/images/ev6.jpg",
      //   "specs": "Crossover EV with long range and bold design"
      // },
      // {
      //   "id": 22,
      //   "name": "BMW iX",
      //   "brand": "BMW",
      //   "price": 13200000,
      //   "fuel": "Electric",
      //   "seatingCapacity": 5,
      //   "image": "/assets/images/bmw_ix.jpg",
      //   "specs": "Luxury electric SUV with high-tech features"
      // },
      // {
      //   "id": 23,
      //   "name": "Tata Nexon EV",
      //   "brand": "Tata",
      //   "price": 1600000,
      //   "fuel": "Electric",
      //   "seatingCapacity": 5,
      //   "image": "/assets/images/nexon_ev.jpg",
      //   "specs": "Affordable electric SUV with practical range"
      // }
      // Additional car objects can be added here.
    ];
  
    const { brand, minPrice, maxPrice, fuel, seating } = req.query;
    let filtered = cars;
  
    if (brand) {
      filtered = filtered.filter(car =>
        car.brand.toLowerCase().includes(brand.toLowerCase())
      );
    }
    if (fuel) {
      filtered = filtered.filter(car =>
        car.fuel.toLowerCase() === fuel.toLowerCase()
      );
    }
    if (seating) {
      filtered = filtered.filter(car => car.seatingCapacity === Number(seating));
    }
    if (minPrice) {
      filtered = filtered.filter(car => car.price >= Number(minPrice));
    }
    if (maxPrice) {
      filtered = filtered.filter(car => car.price <= Number(maxPrice));
    }
  
    res.status(200).json(filtered);
  }
  