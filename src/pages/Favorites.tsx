import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Trash2, Navigation } from 'lucide-react';
import { MOCK_LOCATIONS } from '../constants';

export default function Favorites() {
  const navigate = useNavigate();
  const favorites = MOCK_LOCATIONS.slice(0, 2); // Mock favorites

  return (
    <div className="px-6 pt-12 pb-8">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-gray-600"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Saved Places</h1>
      </div>

      <div className="space-y-4">
        {favorites.length > 0 ? (
          favorites.map(loc => (
            <div key={loc.id} className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex gap-4 items-center">
              <img 
                src={loc.imageUrl} 
                className="w-20 h-20 rounded-2xl object-cover"
                alt={loc.name}
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-gray-900 truncate">{loc.name}</h3>
                <p className="text-xs text-gray-400 truncate">{loc.category} • {loc.floor} Floor</p>
                <div className="flex gap-2 mt-2">
                  <button 
                    onClick={() => navigate('/ar')}
                    className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest flex items-center gap-1"
                  >
                    <Navigation className="w-3 h-3" />
                    Navigate
                  </button>
                  <button className="bg-red-50 text-red-600 p-1.5 rounded-lg">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="py-20 text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-gray-300" />
            </div>
            <p className="text-gray-400 font-medium">No saved places yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
