
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-wikichobi-light-gray py-8 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div>
            <h3 className="text-lg font-medium mb-2">WikiChobi</h3>
            <p className="text-sm text-wikichobi-dark-gray">
              Providing freely-licensed photos for Wikimedia projects
            </p>
          </div>
          
          <div className="flex flex-col space-y-2 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About Us</Link>
            <Link to="/team" className="hover:underline">Our Team</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
          
          <div className="text-sm">
            <p>© {new Date().getFullYear()} WikiChobi</p>
            <p className="mt-2">
              <a 
                href="https://creativecommons.org/licenses/by-sa/4.0/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Content licensed under CC BY-SA 4.0
              </a>
            </p>
            <p className="mt-2">
              <Link to="/login" className="text-xs hover:underline">Admin Login</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
