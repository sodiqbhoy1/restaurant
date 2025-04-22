import { StarIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/solid';
import Navbar from '../Navbar';

const Restaurants = () => {
  const restaurants = [
    {
      id: 1,
      name: "Burger Palace",
      cuisine: "American",
      rating: 4.5,
      deliveryTime: "25-35 min",
      image: "https://source.unsplash.com/random/800x600/?burger"
    },
    {
      id: 2,
      name: "Sushi Master",
      cuisine: "Japanese",
      rating: 4.8,
      deliveryTime: "30-40 min",
      image: "https://source.unsplash.com/random/800x600/?sushi"
    },
    // Add more restaurants...
  ];

  return (
      <>
      <Navbar/>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Popular Restaurants</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img 
              src={restaurant.image} 
              alt={restaurant.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">{restaurant.name}</h2>
                <span className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                  <StarIcon className="h-4 w-4 mr-1" />
                  {restaurant.rating}
                </span>
              </div>
              <p className="text-gray-600 mb-2">{restaurant.cuisine}</p>
              <div className="flex items-center text-gray-500">
                <ClockIcon className="h-5 w-5 mr-1" />
                <span>{restaurant.deliveryTime}</span>
              </div>
              <button className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">
                View Menu
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Restaurants;