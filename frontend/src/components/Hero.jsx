import React from 'react';
import { Search } from 'lucide-react';

const Hero = ({ onSearch }) => (
  <div className="bg-orange-500 text-white py-20 px-4">
    <div className="container mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Guide</h1>
      <p className="text-xl mb-8">Discover local experts to enhance your travel experience</p>
      <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
        <div className="flex items-center border-2 border-white rounded-lg overflow-hidden">
          <input
            type="text"
            name="search"
            placeholder="Enter city or country"
            className="flex-grow p-3 outline-none text-black"
            onChange={(e) => onSearch(e.target.value)}
          />
          <button type="submit" className="bg-white p-3 text-orange-500">
            <Search size={24} />
          </button>
        </div>
      </form>
    </div>
  </div>
);

export default Hero;
