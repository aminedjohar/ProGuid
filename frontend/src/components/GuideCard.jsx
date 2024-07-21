import React from 'react';
import { MapPin, Star } from 'lucide-react';

const GuideCard = ({ guide, onClick }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300 flex-shrink-0 w-64" onClick={onClick}>
    <img src={guide.image} alt={guide.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{guide.name}</h3>
      <p className="text-gray-600 flex items-center mb-2"><MapPin size={16} className="mr-2" />{guide.city}</p>
      <p className="text-orange-500 flex items-center"><Star size={16} className="mr-2" />{guide.rating}</p>
    </div>
  </div>
);

export default GuideCard;
