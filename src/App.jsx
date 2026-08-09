import { useState, useMemo } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Benefits from './components/Benefits.jsx';
import FeatureBanner from './components/FeatureBanner.jsx';
import Partners from './components/Partners.jsx';
import RecommendedResidences from './components/RecommendedResidences.jsx';
import Testimonials from './components/Testimonials.jsx';
import Footer from './components/Footer.jsx';
import PropertyModal from './components/PropertyModal.jsx';
import AuthModal from './components/AuthModal.jsx';
import { PROPERTIES } from './data/properties.js';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedListingType, setSelectedListingType] = useState('all'); // 'all' | 'rent' | 'buy' | 'sell'
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [authModalMode, setAuthModalMode] = useState(null); // 'login' | 'join' | null

  // Filter properties based on search selection
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      // Listing type filter (Rent, Buy, Sell)
      if (selectedListingType && selectedListingType !== 'all' && prop.listingType !== selectedListingType) {
        return false;
      }
      // Category filter
      if (activeCategory && prop.category !== activeCategory) {
        return false;
      }
      // City filter
      if (selectedCity && prop.city !== selectedCity) {
        return false;
      }
      // Type filter
      if (selectedType && prop.type !== selectedType) {
        return false;
      }
      return true;
    });
  }, [activeCategory, selectedCity, selectedType, selectedListingType]);

  const handleSearch = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResetFilters = () => {
    setActiveCategory('');
    setSelectedCity('');
    setSelectedType('');
    setSelectedListingType('all');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-[#22C55E]/20 selection:text-[#15803D]">
      
      {/* Top Header Navigation */}
      <Navbar 
        onOpenAuth={(mode) => setAuthModalMode(mode)} 
      />

      {/* Hero Section with Filter Bar & Buildings */}
      <main className="grow">
        <Hero 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          onSearch={handleSearch}
        />

        {/* Stats Section */}
        <Stats 
          onExploreProjects={() => {
            const el = document.getElementById('properties');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Benefits Section */}
        <Benefits />

        {/* High-rise Architecture Feature Showcase Banner */}
        <FeatureBanner />

        {/* Real Estate Partner Logos */}
        <Partners />

        {/* Recommended Residence Collection */}
        <RecommendedResidences 
          properties={filteredProperties}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          activeCategory={activeCategory}
          selectedCity={selectedCity}
          selectedType={selectedType}
          selectedListingType={selectedListingType}
          setSelectedListingType={setSelectedListingType}
          onResetFilters={handleResetFilters}
        />

        {/* Client Testimonials */}
        <Testimonials />
      </main>

      {/* Ocean Blue Footer */}
      <Footer />

      {/* Property Details Modal */}
      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}

      {/* Auth Modal (Login / Join) */}
      {authModalMode && (
        <AuthModal 
          initialMode={authModalMode}
          onClose={() => setAuthModalMode(null)}
        />
      )}

    </div>
  );
}
