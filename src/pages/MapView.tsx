import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, MapPin, Navigation } from 'lucide-react';

export default function MapView() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-gray-100 relative overflow-hidden">
      {/* Simulated Map Background */}
      <div className="absolute inset-0 bg-[#E5E3DF]">
        <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 20 L100 20 M0 40 L100 40 M0 60 L100 60 M0 80 L100 80" stroke="#000" strokeWidth="0.1" fill="none" />
          <path d="M20 0 L20 100 M40 0 L40 100 M60 0 L60 100 M80 0 L80 100" stroke="#000" strokeWidth="0.1" fill="none" />
        </svg>
        
        {/* Simulated Campus Buildings */}
        <div className="absolute top-[20%] left-[15%] w-32 h-40 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest rotate-90">Block A</span>
        </div>
        <div className="absolute top-[30%] right-[20%] w-40 h-24 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Library</span>
        </div>
        <div className="absolute bottom-[25%] left-[30%] w-24 h-24 bg-green-100 rounded-full border border-green-200 flex items-center justify-center">
          <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Park</span>
        </div>

        {/* Current Location Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg animate-pulse" />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-md border border-gray-100 whitespace-nowrap">
              <span className="text-[10px] font-black text-gray-800">You are here</span>
            </div>
          </div>
        </div>

        {/* Destination Pin */}
        <div className="absolute top-[25%] right-[25%]">
          <MapPin className="w-8 h-8 text-red-500 fill-red-500 drop-shadow-lg" />
        </div>

        {/* Route Path (Simulated) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <path 
            d="M 50 50 L 65 50 L 65 25 L 75 25" 
            stroke="#3B82F6" 
            strokeWidth="4" 
            strokeDasharray="8 4"
            fill="none" 
            className="animate-[dash_2s_linear_infinite]"
          />
        </svg>
      </div>

      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 p-6 z-10">
        <div className="flex gap-3">
          <button 
            onClick={() => navigate(-1)}
            className="w-12 h-12 bg-white shadow-xl rounded-2xl flex items-center justify-center text-gray-600"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search destination..."
              className="w-full bg-white shadow-xl rounded-2xl py-3 pl-12 pr-4 focus:outline-none font-medium text-sm"
            />
          </div>
        </div>
      </div>

      {/* Bottom Info Card */}
      <div className="absolute bottom-24 left-6 right-6 z-10">
        <div className="bg-white rounded-[32px] p-6 shadow-2xl border border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-black text-gray-900 tracking-tight">Lab A-101</h3>
              <p className="text-gray-400 text-xs font-medium">Block A • 1st Floor</p>
            </div>
            <div className="bg-blue-50 px-3 py-1 rounded-full">
              <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">250m away</span>
            </div>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => navigate('/ar')}
              className="flex-1 bg-blue-600 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 active:scale-95 transition-transform"
            >
              <Navigation className="w-5 h-5" />
              AR View
            </button>
            <button className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-600 active:scale-95 transition-transform">
              <MapPin className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -12;
          }
        }
      `}</style>
    </div>
  );
}
