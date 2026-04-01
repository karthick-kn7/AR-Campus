import React from 'react';
import { Star } from 'lucide-react';
import { Location } from '../types';
import { cn } from '../lib/utils';

interface LocationCardProps {
  location: Location;
  onClick?: () => void;
  className?: string;
}

export default function LocationCard({ location, onClick, className }: LocationCardProps) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 active:scale-95 transition-transform cursor-pointer group",
        className
      )}
    >
      <div className="relative h-40 overflow-hidden">
        <img 
          src={location.imageUrl} 
          alt={location.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <span className="text-[10px] font-bold text-gray-800">{location.rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 truncate">{location.name}</h3>
        <p className="text-xs text-gray-500 mt-1">{location.category.charAt(0).toUpperCase() + location.category.slice(1)} • {location.floor === 0 ? 'Ground' : `${location.floor}${location.floor === 1 ? 'st' : location.floor === 2 ? 'nd' : 'th'}`} Floor</p>
      </div>
    </div>
  );
}
