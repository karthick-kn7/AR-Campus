import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Shield, ArrowRight, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';

export default function Login() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 flex flex-col px-8 pt-20 pb-10 text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10"
      >
        <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-10 shadow-2xl border border-white/30">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-black mb-2 tracking-tight">CampusAR</h1>
        <p className="text-blue-100/80 font-medium mb-12">Smart navigation for the modern student.</p>

        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input 
              type="email" 
              placeholder="College Email"
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all placeholder:text-white/40"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
            <input 
              type="password" 
              placeholder="Password"
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all placeholder:text-white/40"
            />
          </div>
          {isSignup && (
            <div className="relative">
              <UserPlus className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
              <input 
                type="text" 
                placeholder="College ID"
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all placeholder:text-white/40"
              />
            </div>
          )}
        </div>

        <button 
          onClick={() => navigate('/')}
          className="w-full bg-white text-blue-600 font-black py-4 rounded-2xl mt-8 flex items-center justify-center gap-2 shadow-xl shadow-blue-900/20 active:scale-95 transition-transform"
        >
          {isSignup ? 'Create Account' : 'Sign In'}
          <ArrowRight className="w-5 h-5" />
        </button>

        <div className="mt-8 flex flex-col gap-4 items-center">
          <button 
            onClick={() => setIsSignup(!isSignup)}
            className="text-sm font-bold text-blue-100 hover:text-white transition-colors"
          >
            {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
          </button>
          <div className="h-px w-20 bg-white/20" />
          <button 
            onClick={() => navigate('/')}
            className="text-sm font-bold text-white/60 hover:text-white transition-colors"
          >
            Continue as Guest
          </button>
        </div>
      </motion.div>
    </div>
  );
}
