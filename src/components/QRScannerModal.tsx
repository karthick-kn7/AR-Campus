import React, { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { X, Camera, CameraOff, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface QRScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onScanSuccess: (decodedText: string) => void;
}

export default function QRScannerModal({ isOpen, onClose, onScanSuccess }: QRScannerModalProps) {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Small delay to ensure the container is rendered
      const timer = setTimeout(() => {
        try {
          scannerRef.current = new Html5QrcodeScanner(
            "qr-reader",
            { fps: 10, qrbox: { width: 250, height: 250 } },
            /* verbose= */ false
          );
          
          scannerRef.current.render(
            (decodedText) => {
              onScanSuccess(decodedText);
              onClose();
            },
            (errorMessage) => {
              // Silently handle scan errors (they happen constantly during scanning)
            }
          );
        } catch (err) {
          console.error("QR Scanner initialization error:", err);
          setError("Could not initialize camera. Please check permissions.");
        }
      }, 300);

      return () => {
        clearTimeout(timer);
        if (scannerRef.current) {
          scannerRef.current.clear().catch(err => console.error("Failed to clear scanner", err));
        }
      };
    }
  }, [isOpen, onClose, onScanSuccess]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white w-full max-w-md rounded-[40px] overflow-hidden relative z-10 shadow-2xl"
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-black text-gray-900 tracking-tight">QR Scanner</h3>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Scan for Positioning</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 bg-white shadow-sm border border-gray-200 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8">
              {error ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CameraOff className="w-16 h-16 text-gray-300 mb-4" />
                  <p className="text-gray-500 font-medium">{error}</p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold text-sm"
                  >
                    Grant Permission
                  </button>
                </div>
              ) : (
                <>
                  <div id="qr-reader" className="overflow-hidden rounded-3xl border-4 border-gray-100 bg-gray-50" />
                  <div className="mt-8 flex items-start gap-4 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                    <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-700 leading-relaxed">
                      Scan QR codes located at building entrances or inside rooms to instantly update your position on the campus map.
                    </p>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
