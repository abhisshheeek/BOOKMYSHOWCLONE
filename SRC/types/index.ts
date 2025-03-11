export interface Movie {
  id: string;
  title: string;
  posterUrl: string;
  rating: number;
  releaseDate: string;
  genre: string[];
}

export interface Theater {
  id: string;
  name: string;
  location: string;
  showTimes: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  bookings: Booking[];
}

export interface Booking {
  id: string;
  movieId: string;
  theaterId: string;
  showTime: string;
  seats: string[];
  totalAmount: number;
  bookingDate: string;
}