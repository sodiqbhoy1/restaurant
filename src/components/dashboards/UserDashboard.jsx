import { useState } from 'react';
import { ChartBarIcon, ShoppingBagIcon, UserIcon, StarIcon } from '@heroicons/react/24/outline';

const UserDashboard = () => {
  const [activeOrders] = useState([
    { id: 1, restaurant: 'Burger Palace', status: 'Preparing', eta: '25-35 min' },
    { id: 2, restaurant: 'Sushi Master', status: 'In Transit', eta: '15-20 min' }
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quick Stats */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span>Total Orders</span>
              <span className="font-bold text-red-600">23</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span>Favorites</span>
              <span className="font-bold text-red-600">5</span>
            </div>
          </div>
        </div>

        {/* Active Orders */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Active Orders</h2>
          <div className="space-y-4">
            {activeOrders.map(order => (
              <div key={order.id} className="p-4 border rounded-lg hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{order.restaurant}</h3>
                    <p className="text-sm text-gray-500">{order.status}</p>
                  </div>
                  <span className="text-red-600">{order.eta}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Order History</h2>
          {/* Add order history table here */}
        </div>
      </div>
    </div>
  );
};
export default UserDashboard;