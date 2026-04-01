import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, MapPin, Navigation, Heart, Share2, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_LOCATIONS } from '../constants';

export default function LocationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = MOCK_LOCATIONS.find(l => l.id === id);

  if (!location) {
    return <div className="p-8 text-center">Location not found</div>;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[45vh] w-full">
        <img 
          src={location.imageUrl} 
          alt={location.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Top Controls */}
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md">
              {location.category}
            </span>
            <div className="flex items-center gap-1 bg-white/20 backdrop-blur-md px-2 py-1 rounded-md border border-white/20">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span className="text-white text-[10px] font-bold">{location.rating}</span>
            </div>
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">{location.name}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 -mt-6 bg-white rounded-t-[40px] relative z-10">
        <div className="flex gap-6 mb-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Floor</p>
              <p className="text-sm font-bold text-gray-900">{location.floor === 0 ? 'Ground' : `${location.floor}${location.floor === 1 ? 'st' : 'nd'} Floor`}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Timings</p>
              <p className="text-sm font-bold text-gray-900">{location.timings}</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">About</h2>
          <p className="text-gray-500 leading-relaxed">
            {location.description} Located in the {location.department || 'Main'} department, this facility is equipped with modern amenities to support student learning and research.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <button 
            onClick={() => navigate('/ar')}
            className="bg-blue-600 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 active:scale-95 transition-transform"
          >
            <Navigation className="w-5 h-5" />
            AR Navigate
          </button>
          <button 
            onClick={() => navigate('/booking')}
            className="bg-gray-900 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <Calendar className="w-5 h-5" />
            Book Slot
          </button>
        </div>

        {/* Photos Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Photos</h2>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3].map(i => (
              <img 
                key={i}
                src={`https://picsum.photos/seed/loc${id}${i}/200/200`}
                className="w-full aspect-square object-cover rounded-2xl"
                alt="Location"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
