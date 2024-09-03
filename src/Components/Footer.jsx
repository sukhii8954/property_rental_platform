import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            <p className="mb-2">
              For inquiries or feedback, you can reach us at:
            </p>
            <p className="mb-2">
              Email:{" "}
              <a href="mailto:sukhpreet8954@gmail.com" className="text-black">
                sukhpreet8954@gmail.com
              </a>{" "}
            </p>
            <p className="mb-2">
              Phone:{" "}
              <a href="tel: +8954790900" className="text-black">
                +91-8954-790-900
              </a>{" "}
            </p>
          </div>
          <div>
            <h4>
              <ul>
                <li>
                  <Link to="/"></Link>
                </li>
                <li>
                  <Link
                    to="/property-list"
                    className="text-blue-400 hover:underline"
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-blue-400 hover:underline">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-blue-400 hover:underline">
                    About Us
                  </Link>
                </li>
              </ul>
            </h4>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2">Follow Us</h4>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100004821580908"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sukhii8954/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-600 pt-4 text-center">
            <p>&copy; {new Date().getFullYear()} SR Property Rental platform pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
