import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Map, Navigation, Heart, Bell, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BottomNav() {
  const navItems = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/map', icon: Map, label: 'Map' },
    { to: '/ar', icon: Navigation, label: 'AR' },
    { to: '/favorites', icon: Heart, label: 'Saved' },
    { to: '/notifications', icon: Bell, label: 'Alerts' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-100 px-6 py-3 flex justify-between items-center z-50">
      {navItems.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center gap-1 transition-all duration-300",
              isActive ? "text-blue-600 scale-110" : "text-gray-400 hover:text-gray-600"
            )
          }
        >
          <Icon className="w-6 h-6" />
          <span className="text-[10px] font-medium">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
