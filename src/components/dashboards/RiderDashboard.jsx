import { useState } from "react";

const RiderDashboard = () => {
    const [currentDeliveries] = useState([
      { id: 1, orderId: '#1234', location: '123 Main St', eta: '15 min' },
      { id: 2, orderId: '#1235', location: '456 Oak Ave', eta: '25 min' }
    ]);
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Delivery Queue */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Current Deliveries</h2>
            <div className="space-y-4">
              {currentDeliveries.map(delivery => (
                <div key={delivery.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{delivery.orderId}</h3>
                      <p className="text-sm text-gray-500">{delivery.location}</p>
                    </div>
                    <span className="text-red-600">{delivery.eta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Earnings Summary */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold mb-6">Earnings</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span>Today's Earnings</span>
                <span className="font-bold text-green-600">$85.50</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span>Weekly Earnings</span>
                <span className="font-bold text-green-600">$450.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default RiderDashboard;