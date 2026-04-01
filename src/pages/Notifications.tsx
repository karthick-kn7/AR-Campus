import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Calendar, Info, MapPin } from 'lucide-react';

export default function Notifications() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: '1',
      type: 'update',
      title: 'Room Change Alert',
      message: 'Classroom B-204 has been moved to B-301 for today.',
      time: '10 mins ago',
      icon: Info,
      color: 'bg-blue-500'
    },
    {
      id: '2',
      type: 'event',
      title: 'Tech Fest 2026',
      message: 'Registration is now open for the annual campus tech fest.',
      time: '2 hours ago',
      icon: Calendar,
      color: 'bg-purple-500'
    },
    {
      id: '3',
      type: 'location',
      title: 'New Lab Opened',
      message: 'The new AI Research Lab is now open in Block C.',
      time: 'Yesterday',
      icon: MapPin,
      color: 'bg-teal-500'
    }
  ];

  return (
    <div className="px-6 pt-12 pb-8">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-xl flex items-center justify-center text-gray-600"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Alerts</h1>
      </div>

      <div className="space-y-4">
        {notifications.map(notif => (
          <div key={notif.id} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex gap-4">
            <div className={`w-12 h-12 rounded-2xl ${notif.color} flex items-center justify-center text-white shrink-0`}>
              <notif.icon className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-gray-900 text-sm">{notif.title}</h3>
                <span className="text-[10px] text-gray-400 font-medium">{notif.time}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{notif.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
