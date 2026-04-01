import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin, CheckCircle2, ChevronRight, Navigation } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_LOCATIONS } from '../constants';

export default function Booking() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('2026-04-05');
  const [selectedTime, setSelectedTime] = useState('');

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const handleConfirm = () => {
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 pt-12 pb-8">
      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={() => navigate(-1)}
                className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-gray-600"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-black text-gray-900 tracking-tight">Book Slot</h1>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={MOCK_LOCATIONS[0].imageUrl} 
                  className="w-16 h-16 rounded-2xl object-cover"
                  alt="Location"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{MOCK_LOCATIONS[0].name}</h3>
                  <p className="text-xs text-gray-400">{MOCK_LOCATIONS[0].department}</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 block">Select Date</label>
                  <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-2 px-2">
                    {[5, 6, 7, 8, 9].map(day => (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(`2026-04-0${day}`)}
                        className={`shrink-0 w-16 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all ${
                          selectedDate === `2026-04-0${day}` 
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                            : 'bg-gray-50 text-gray-500'
                        }`}
                      >
                        <span className="text-[10px] font-bold uppercase">Apr</span>
                        <span className="text-xl font-black">{day}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 block">Select Time</label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map(time => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 rounded-xl text-xs font-bold transition-all border ${
                          selectedTime === time 
                            ? 'bg-blue-50 border-blue-200 text-blue-600' 
                            : 'bg-white border-gray-100 text-gray-500'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button 
              disabled={!selectedTime}
              onClick={handleConfirm}
              className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 active:scale-95 transition-transform disabled:opacity-50 disabled:active:scale-100"
            >
              Confirm Booking
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="step2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center pt-20 text-center"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Booking Confirmed!</h1>
            <p className="text-gray-400 font-medium mb-10">Your slot has been successfully booked. We've added it to your calendar.</p>

            <div className="w-full bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mb-10 text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Location</p>
                    <p className="text-sm font-bold text-gray-900">{MOCK_LOCATIONS[0].name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Date & Time</p>
                    <p className="text-sm font-bold text-gray-900">{selectedDate} • {selectedTime}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full space-y-4">
              <button 
                onClick={() => navigate('/ar')}
                className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20 active:scale-95 transition-transform"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </button>
              <button 
                onClick={() => navigate('/')}
                className="w-full bg-white text-gray-600 font-black py-4 rounded-2xl border border-gray-100 active:scale-95 transition-transform"
              >
                Back to Home
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
