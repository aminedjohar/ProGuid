import React from 'react';
import { ArrowLeft, MapPin, Phone, Clock, Star } from 'lucide-react';

const GuideDetails = ({ guide, onBack }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-6">
      <button onClick={onBack} className="mb-4 flex items-center text-orange-500 hover:underline">
        <ArrowLeft size={20} className="mr-2" /> Back to results
      </button>
      <img src={guide.image} alt={guide.name} className="w-full h-64 object-cover rounded-lg mb-6" />
      <h2 className="text-3xl font-semibold mb-4">{guide.name}</h2>
      <p className="text-gray-600 flex items-center mb-3"><MapPin size={20} className="mr-3" />City: {guide.city}</p>
      <p className="text-orange-500 flex items-center mb-3"><Star size={20} className="mr-3" />Rating: {guide.rating}</p>
      <p className="flex items-center mb-3"><Phone size={20} className="mr-3" />Phone: {guide.phone}</p>
      <p className="flex items-center"><Clock size={20} className="mr-3" />Available: {guide.availableTime}</p>
    </div>
  </div>
);

export default GuideDetails;