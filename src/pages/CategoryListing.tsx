import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter, Search } from 'lucide-react';
import { MOCK_LOCATIONS } from '../constants';
import LocationCard from '../components/LocationCard';

export default function CategoryListing() {
  const { id } = useParams();
  const navigate = useNavigate();
  const filteredLocations = MOCK_LOCATIONS.filter(l => l.category === id);

  const categoryName = id ? id.charAt(0).toUpperCase() + id.slice(1) + 's' : 'Locations';

  return (
    <div className="px-6 pt-12 pb-8">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-gray-600"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">{categoryName}</h1>
      </div>

      <div className="flex gap-3 mb-8 overflow-x-auto no-scrollbar">
        {['Nearest', 'Most Visited', 'A-Z', 'Rating'].map(filter => (
          <button 
            key={filter}
            className="px-4 py-2 bg-white border border-gray-100 rounded-full text-xs font-bold text-gray-500 whitespace-nowrap hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-colors"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        {filteredLocations.length > 0 ? (
          filteredLocations.map(loc => (
            <div key={loc.id}>
              <LocationCard 
                location={loc} 
                onClick={() => navigate(`/location/${loc.id}`)}
              />
            </div>
          ))
        ) : (
          <div className="col-span-2 py-20 text-center">
            <p className="text-gray-400 font-medium">No locations found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
