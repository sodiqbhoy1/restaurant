import { useState } from 'react';
import { 
  UserCircleIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
  UserIcon,
  ShieldCheckIcon,
  TruckIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Restaurants', href: '/restaurants' },
    { name: 'Offers', href: '/offers' },
    { name: 'Contact', href: '/contact' }
  ];

  const userRoles = [
    {
      name: 'User',
      icon: UserIcon,
      href: '/login/user',
      description: 'Customer Dashboard'
    },
    {
      name: 'Rider',
      icon: TruckIcon,
      href: '/login/rider',
      description: 'Delivery Portal'
    },
    {
      name: 'Admin',
      icon: ShieldCheckIcon,
      href: '/login/admin',
      description: 'Management Console'
    }
  ];

  return (
    <>
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-red-600">
              Food<span className="text-orange-500">Express</span>
            </Link>
            <div className="hidden md:flex items-center ml-10 space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-700 hover:text-red-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-red-600 relative">
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                3
              </span>
            </button>

            {/* User Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center gap-1 text-gray-600 hover:text-red-600"
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              >
                <UserCircleIcon className="h-7 w-7" />
                <ChevronDownIcon className="h-4 w-4" />
              </button>

              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-xl py-2 border">
                  {userRoles.map((role) => (
                    <Link
                      key={role.name}
                      to={role.href}
                      className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors"
                    >
                      <role.icon className="h-5 w-5 mr-3 text-gray-700" />
                      <div>
                        <p className="font-medium text-gray-900">{role.name}</p>
                        <p className="text-sm text-gray-500">{role.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-700 hover:text-red-600"
                >
                  {link.name}
                </a>
              ))}
              
              {/* Mobile User Roles */}
              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium text-gray-500 mb-2">Access Portals</h4>
                {userRoles.map((role) => (
                  <Link
                    key={role.name}
                    to={role.href}
                    className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    <role.icon className="h-5 w-5 mr-3" />
                    {role.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
    </>
  );
};
export default Navbar
