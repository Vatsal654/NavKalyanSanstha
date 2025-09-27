import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Heart, PiggyBank } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary dark:text-primary-foreground">What We Do</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground dark:text-secondary">Core Initiative: Weekly Food Distribution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground flex items-center gap-2">
                <Utensils className="h-6 w-6" /> Our Program
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>Our primary focus is our food distribution program. Every week, our volunteers prepare and package hundreds of meals to be distributed across various locations in Delhi.</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Meal Cost:</strong> ₹21 per package.</li>
                <li><strong>Meal Quality:</strong> Healthy, hygienic, home-cooked, and delicious, served with love.</li>
                <li><strong>Distribution Days:</strong> Every Tuesday and Saturday.</li>
              </ul>
            </CardContent>
          </Card>
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/gallery-4.jpg" // Using one of the provided images
              alt="Food distribution"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-white text-xl font-semibold">Serving with Love</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground dark:text-secondary">Special Initiatives: Spreading Joy Beyond Meals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground flex items-center gap-2">
                <Heart className="h-6 w-6" /> Celebrate Your Special Day
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>Make your birthday or anniversary unforgettable. For a contribution of ₹500-₹600, you can celebrate by cutting a cake and sharing it with the children we serve, creating smiles and cherished memories.</p>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground flex items-center gap-2">
                <PiggyBank className="h-6 w-6" /> Gau Seva (Cow Feeding)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>Extend your kindness to all living beings. We facilitate donations for our cow feeding program, providing fodder and care for these gentle animals.</p>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground flex items-center gap-2">
                <Utensils className="h-6 w-6" /> Custom Donation Requests
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>If you have a specific way you'd like to contribute or a special occasion you want to mark through service, please contact us. We are open to facilitating your unique act of kindness.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;