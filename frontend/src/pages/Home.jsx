import React from 'react';
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import GuideCard from '../components/GuideCard';
import GuideDetails from '../components/GuideDetails';
import AIRecommendationSection from '../components/AIRecommendationSection';
import Footer from '../components/Footer';

const guides = [
  { id: 1, name: 'John Doe', city: 'New York', rating: 4.8, phone: '+1 234 567 8901', availableTime: '9 AM - 5 PM', image: '/images/JohnDoe.jpg' },
  { id: 2, name: 'Jane Smith', city: 'New York', rating: 4.5, phone: '+1 234 567 8902', availableTime: '10 AM - 6 PM', image: '/images/jane.jpg' },
  { id: 3, name: 'Hassan Alaoui', city: 'Casablanca', rating: 4.9, phone: '+212 522 123 456', availableTime: '8 AM - 4 PM', image: '/images/hassan.jpg' },
  { id: 4, name: 'Fatima Zahra', city: 'Casablanca', rating: 4.7, phone: '+212 522 123 457', availableTime: '11 AM - 7 PM', image: '/images/katy.jpg' },
  { id: 5, name: 'Carlos Rodriguez', city: 'Madrid', rating: 4.6, phone: '+34 912 345 678', availableTime: '10 AM - 6 PM', image: '/images/3azi.jpg' },
  { id: 6, name: 'Maria Garcia', city: 'Madrid', rating: 4.8, phone: '+34 912 345 679', availableTime: '9 AM - 5 PM', image: '/images/maria.jpg' },

];

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(guides);
  const [selectedGuide, setSelectedGuide] = useState(null);

  useEffect(() => {
    const filteredResults = guides.filter(guide => 
      guide.city.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredResults);
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleGuideClick = (guide) => {
    setSelectedGuide(guide);
  };

  const handleBackToResults = () => {
    setSelectedGuide(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-black">
      <header className="bg-orange-500 p-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Tourist Guide Finder</h1>
        </div>
      </header>

      <Hero onSearch={handleSearch} />

      <main className="flex-grow container mx-auto mt-8 p-4">
        {selectedGuide ? (
          <GuideDetails guide={selectedGuide} onBack={handleBackToResults} />
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6">
              {searchQuery ? `Search Results for "${searchQuery}"` : "Featured Guides"}
            </h2>
            <div className="overflow-x-auto">
              <div className="flex space-x-4 pb-4">
                {searchResults.map((guide) => (
                  <GuideCard key={guide.id} guide={guide} onClick={() => handleGuideClick(guide)} />
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      <AIRecommendationSection />

      <Footer />
    </div>
  );
};

export default Home;