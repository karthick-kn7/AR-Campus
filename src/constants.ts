import { Location } from './types';

export const MOCK_LOCATIONS: Location[] = [
  {
    id: '1',
    name: 'Lab A-101',
    category: 'lab',
    floor: 1,
    department: 'Computer Science',
    description: 'Advanced computing lab with high-end workstations.',
    imageUrl: 'https://picsum.photos/seed/lab1/400/300',
    coordinates: { lat: 12.9716, lng: 77.5946 },
    rating: 4.8,
    timings: '09:00 AM - 05:00 PM'
  },
  {
    id: '2',
    name: 'Central Library',
    category: 'library',
    floor: 2,
    description: 'Main campus library with over 50,000 books.',
    imageUrl: 'https://picsum.photos/seed/library/400/300',
    coordinates: { lat: 12.9718, lng: 77.5948 },
    rating: 4.9,
    timings: '08:00 AM - 09:00 PM'
  },
  {
    id: '3',
    name: 'Main Cafeteria',
    category: 'cafeteria',
    floor: 0,
    description: 'Multi-cuisine cafeteria with indoor and outdoor seating.',
    imageUrl: 'https://picsum.photos/seed/cafe/400/300',
    coordinates: { lat: 12.9714, lng: 77.5944 },
    rating: 4.5,
    timings: '08:00 AM - 08:00 PM'
  },
  {
    id: '4',
    name: 'Admin Block',
    category: 'office',
    floor: 0,
    description: 'Administrative offices for admissions and student services.',
    imageUrl: 'https://picsum.photos/seed/admin/400/300',
    coordinates: { lat: 12.9712, lng: 77.5942 },
    rating: 4.2,
    timings: '10:00 AM - 04:00 PM'
  },
  {
    id: '5',
    name: 'Classroom B-204',
    category: 'classroom',
    floor: 2,
    department: 'Electronics',
    description: 'Smart classroom equipped with digital projectors.',
    imageUrl: 'https://picsum.photos/seed/class/400/300',
    coordinates: { lat: 12.9720, lng: 77.5950 },
    rating: 4.6,
    timings: '08:30 AM - 04:30 PM'
  }
];
