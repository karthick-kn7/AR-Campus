export interface Location {
  id: string;
  name: string;
  category: 'classroom' | 'lab' | 'library' | 'cafeteria' | 'office' | 'other';
  floor: number;
  department?: string;
  description: string;
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  rating: number;
  timings: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  collegeId: string;
  photoURL?: string;
  favorites: string[]; // Array of location IDs
}

export interface Booking {
  id: string;
  userId: string;
  locationId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}
