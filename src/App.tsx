import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import ARNavigation from './pages/ARNavigation';
import MapView from './pages/MapView';
import LocationDetails from './pages/LocationDetails';
import CategoryListing from './pages/CategoryListing';
import Booking from './pages/Booking';
import Favorites from './pages/Favorites';
import Notifications from './pages/Notifications';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/location/:id" element={<LocationDetails />} />
          <Route path="/category/:id" element={<CategoryListing />} />
          <Route path="/booking" element={<Booking />} />
        </Route>
        <Route path="/ar" element={<ARNavigation />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
