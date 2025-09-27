import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-background.webp)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 p-4 md:p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">A Meal of Hope. A Gesture of Love.</h1>
        <p className="text-lg md:text-xl mb-8">
          Welcome to Nav Kalyan Sanstha Delhi. We are a non-profit, women-led initiative dedicated to serving fresh, home-cooked meals to those in need. For just ₹21, you can provide a nutritious meal and be a part of our mission to ensure no one in our community goes hungry.
        </p>
        <p className="text-2xl md:text-3xl font-semibold mb-10">Our Slogan: Donate. Impact. Change.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-yellow-300">3000+</h3>
            <p className="text-lg">Meals Served and Counting</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-yellow-300">100%</h3>
            <p className="text-lg">Volunteer Driven</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-yellow-300">₹21</h3>
            <p className="text-lg">Provides One Hygienic, Home-Cooked Meal</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link to="/donate-food">Donate a Meal Now (₹21)</Link>
          </Button>
          <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link to="/about-us">Learn Our Story</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;