import Navbar from "../Navbar";

const Offers = () => {
    const offers = [
      {
        id: 1,
        title: "50% Off First Order",
        code: "WELCOME50",
        restaurant: "Burger Palace",
        validUntil: "2023-12-31"
      },
      {
          id: 2,
          title: "Free Delivery",
          code: "FREESHIP",
          restaurant: "All Restaurants",
          validUntil: "2023-12-31"
      },
      // Add more offers...
    ];
  
    return (
        <>
        <Navbar/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Special Offers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-gradient-to-r from-red-600 to-orange-500 rounded-xl p-6 text-white">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{offer.title}</h2>
                  <p className="text-lg mb-2">At {offer.restaurant}</p>
                  <p className="text-sm">Valid until: {offer.validUntil}</p>
                </div>
                <span className="bg-white text-red-600 px-4 py-2 rounded-full font-bold">
                  {offer.code}
                </span>
              </div>
              <button className="mt-4 bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Apply Offer
              </button>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  };
  export default Offers;