import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Book, Coffee, Library, Building, User, QrCode } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_LOCATIONS } from '../constants';
import LocationCard from '../components/LocationCard';
import QRScannerModal from '../components/QRScannerModal';

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  const categories = [
    { id: 'classroom', icon: Book, label: 'Classrooms', color: 'bg-blue-500' },
    { id: 'lab', icon: MapPin, label: 'Labs', color: 'bg-purple-500' },
    { id: 'library', icon: Library, label: 'Library', color: 'bg-orange-500' },
    { id: 'cafeteria', icon: Coffee, label: 'Cafeteria', color: 'bg-pink-500' },
    { id: 'office', icon: Building, label: 'Admin', color: 'bg-teal-500' },
  ];

  const handleScanSuccess = (decodedText: string) => {
    console.log("Scanned QR Code:", decodedText);
    // In a real app, we would look up the location ID from the QR code
    // For now, let's just navigate to a random location or show an alert
    const randomLoc = MOCK_LOCATIONS[Math.floor(Math.random() * MOCK_LOCATIONS.length)];
    navigate(`/location/${randomLoc.id}`);
  };

  return (
    <div className="px-6 pt-12 pb-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Discover</h1>
          <p className="text-gray-400 font-medium">Find your way around campus</p>
        </div>
        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-gray-100 flex items-center justify-center overflow-hidden">
          <User className="w-6 h-6 text-gray-400" />
        </div>
      </div>

      {/* Search Bar & QR Scanner */}
      <div className="flex gap-3 mb-10">
        <div className="relative flex-1 group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Search classroom, lab, office..."
            className="w-full bg-white border border-gray-100 rounded-3xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button 
          onClick={() => setIsScannerOpen(true)}
          className="w-14 h-14 bg-blue-600 rounded-3xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 active:scale-90 transition-transform"
          title="Scan QR Code"
        >
          <QrCode className="w-6 h-6" />
        </button>
      </div>

      {/* QR Scanner Modal */}
      <QRScannerModal 
        isOpen={isScannerOpen} 
        onClose={() => setIsScannerOpen(false)} 
        onScanSuccess={handleScanSuccess}
      />

      {/* Categories */}
      <div className="mb-10 overflow-x-auto no-scrollbar -mx-6 px-6">
        <div className="flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(`/category/${cat.id}`)}
              className="flex flex-col items-center gap-2 shrink-0 group"
            >
              <div className={`w-16 h-16 rounded-3xl ${cat.color} flex items-center justify-center text-white shadow-lg shadow-${cat.color.split('-')[1]}-500/20 group-active:scale-90 transition-transform`}>
                <cat.icon className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold text-gray-600">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Popular Near You */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Popular Near You</h2>
          <button className="text-blue-600 text-sm font-bold">See All</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {MOCK_LOCATIONS.slice(0, 4).map((loc) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <LocationCard 
                location={loc} 
                onClick={() => navigate(`/location/${loc.id}`)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
