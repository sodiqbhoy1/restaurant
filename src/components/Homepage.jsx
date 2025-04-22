import { MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, SparklesIcon, TruckIcon, ClockIcon, ShieldCheckIcon, StarIcon } from '@heroicons/react/24/solid';
import Navbar from './Navbar';
import Footer from './Footer';
const Homepage = () => {
  // Enhanced color palette
  const colors = {
    primary: '#ef4444',       // Vibrant red (appetite stimulation)
    secondary: '#f59e0b',     // Warm orange (friendly energy)
    accent: '#22c55e',        // Fresh green (natural/organic)
    dark: '#1f2937',          // Dark gray (contrast)
    light: '#f8fafc'          // Off-white (background)
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen" style={{ backgroundColor: colors.light }}>
      {/* Hero Section with Food Image */}
      <div className="relative h-[600px]">
        <div className="absolute inset-0 bg-gray-900/60">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Delicious food spread"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Crave It? Get It Delivered in 
              <span className="text-orange-400"> 30 Minutes</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover 1000+ restaurants serving your favorite cuisines. 
              From sizzling burgers to authentic sushi - we bring the feast to you!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <input
                type="text"
                placeholder="Enter your delivery address..."
                className="flex-1 rounded-lg px-6 py-4 shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300"
              />
              <button 
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-xl"
                style={{ minWidth: '200px' }}
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
                Find Food Now
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start">
              {['Pizza', 'Sushi', 'Burgers', 'Tacos', 'Pasta'].map((cuisine) => (
                <span key={cuisine} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors">
                  #{cuisine}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Value Proposition Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-gray-600 text-lg">
              We're not just delivery, we're your food happiness partners
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: ClockIcon, 
                title: "Lightning Fast",
                text: "Average delivery time 30 mins",
                color: colors.primary
              },
              { 
                icon: ShieldCheckIcon, 
                title: "Safe Delivery",
                text: "100% contactless delivery",
                color: colors.secondary
              },
              { 
                icon: SparklesIcon, 
                title: "Premium Quality",
                text: "Best-rated restaurants only",
                color: colors.accent
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon 
                  className="w-12 h-12 mb-6" 
                  style={{ color: feature.color }}
                  />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Restaurants Preview */}
      <div className="py-16" style={{ backgroundColor: colors.dark }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Trending Near You
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img 
                  src={`https://source.unsplash.com/random/800x600/?restaurant-${i}`}
                  alt="Restaurant"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">Restaurant Name</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <StarIcon className="w-4 h-4 text-yellow-400" />
                    <span>4.5 (1k+ ratings)</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-sm">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full">
                      $$ • American
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
                  </>
  );
};

export default Homepage;