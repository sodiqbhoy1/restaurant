import { Link, useLocation } from 'react-router';

const menuItems = {
  user: [
    { label: 'Dashboard', to: '/dashboard/user' },
    { label: 'Orders', to: '/dashboard/user/orders' },
    { label: 'Profile', to: '/dashboard/user/profile' },
  ],
  rider: [
    { label: 'Dashboard', to: '/dashboard/rider' },
    { label: 'Earnings', to: '/dashboard/rider/earnings' },
    { label: 'Schedule', to: '/dashboard/rider/schedule' },
  ],
  admin: [
    { label: 'Dashboard', to: '/dashboard/admin' },
    { label: 'User Management', to: '/dashboard/admin/users' },
    { label: 'Restaurant Management', to: '/dashboard/admin/restaurants' },
  ]
};

const SideNav = ({ userType }) => {
  const location = useLocation();

  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-6 capitalize">{userType} Panel</h2>
      <ul className="space-y-3">
        {menuItems[userType].map(item => (
          <li key={item.to}>
            <Link
              to={item.to}
              className={`block px-3 py-2 rounded ${
                location.pathname === item.to ? 'bg-gray-700' : 'hover:bg-gray-800'
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
