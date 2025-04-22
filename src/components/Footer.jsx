import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const footerLinks = {
    about: ["Our Story", "Careers", "Blog", "Press"],
    company: ["Cities", "Restaurants", "Couriers", "Help Center"],
    legal: ["Terms", "Privacy", "Security", "Accessibility"],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-red-500 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex space-x-4 mt-4">
                <FaFacebook className="h-6 w-6 hover:text-red-500 cursor-pointer" />
                <FaTwitter className="h-6 w-6 hover:text-red-500 cursor-pointer" />
                <FaInstagram className="h-6 w-6 hover:text-red-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <GlobeAltIcon className="h-5 w-5" />
              <select className="bg-transparent text-gray-300">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
              </select>
            </div>
            <p className="text-gray-500">
              © {new Date().getFullYear()} FoodExpress. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
