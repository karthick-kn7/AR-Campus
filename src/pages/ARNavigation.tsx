import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Navigation, Map as MapIcon, Info, CameraOff } from 'lucide-react';
import { motion } from 'motion/react';

export default function ARNavigation() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [distance, setDistance] = useState(45);

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' },
          audio: false 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setHasPermission(true);
      } catch (err) {
        console.error("Camera error:", err);
        setHasPermission(false);
      }
    }

    setupCamera();

    const interval = setInterval(() => {
      setDistance(prev => Math.max(0, prev - 0.5));
    }, 1000);

    return () => {
      clearInterval(interval);
      if (videoRef.current?.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Camera Feed */}
      {hasPermission === true ? (
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
      ) : hasPermission === false ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center bg-gray-900">
          <CameraOff className="w-16 h-16 text-gray-500 mb-4" />
          <h2 className="text-xl font-bold mb-2">Camera Access Required</h2>
          <p className="text-gray-400 text-sm mb-6">We need camera access to show you AR navigation overlays.</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-600 px-6 py-3 rounded-2xl font-bold"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* AR Overlays (Simulated) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="w-24 h-24 bg-blue-500/40 backdrop-blur-md rounded-full border-4 border-blue-400 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.5)]">
            <Navigation className="w-12 h-12 text-white fill-white rotate-45" />
          </div>
          <div className="mt-4 bg-black/60 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
            <span className="text-white font-black text-xl">{distance.toFixed(0)}m</span>
          </div>
        </motion.div>
      </div>

      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20">
        <button 
          onClick={() => navigate(-1)}
          className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/10"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 border border-white/10 max-w-[200px]">
          <h3 className="text-white font-bold text-sm truncate">Navigating to Lab A-101</h3>
          <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mt-1">2 mins remaining</p>
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-24 left-0 right-0 px-6 flex justify-between items-end z-20">
        <div className="flex flex-col gap-3">
          <button className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/10">
            <Info className="w-6 h-6" />
          </button>
          <button 
            onClick={() => navigate('/map')}
            className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/10"
          >
            <MapIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="bg-blue-600 p-6 rounded-[40px] shadow-2xl shadow-blue-900/40 flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
            <Navigation className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">Next Step</p>
            <p className="text-white font-black">Turn Left in 10m</p>
          </div>
        </div>
      </div>
    </div>
  );
}
