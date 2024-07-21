import React from 'react';
import { Bot } from 'lucide-react';

const AIRecommendationSection = () => (
  <div className="bg-gray-100 py-12 px-4">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">Not Sure Where to Go?</h2>
      <div className="flex justify-center items-center mb-6">
        <Bot size={48} className="text-orange-500 mr-4" />
        <p className="text-xl">Let our AI help you plan your perfect trip!</p>
      </div>
      <p className="mb-8">Our AI-powered recommendation system can suggest destinations, activities, and guides based on your preferences and interests.</p>
      <button className="bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
        Get AI Recommendations
      </button>
    </div>
  </div>
);

export default AIRecommendationSection;