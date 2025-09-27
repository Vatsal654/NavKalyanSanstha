import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Heart, PiggyBank } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary dark:text-primary-foreground">What We Do</h1>

      <section className="mb-12 bg-secondary dark:bg-gray-900 p-8 rounded-lg shadow-lg"> {/* Changed to secondary blue */}
        <h2 className="text-3xl font-semibold mb-6 text-primary dark:text-primary-foreground text-center">Core Initiative: Weekly Food Distribution</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          Our flagship program is dedicated to alleviating hunger by providing freshly prepared, nutritious meals to those who need them most. We believe in serving with dignity and consistency, ensuring that every individual receives a wholesome meal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground flex items-center gap-2">
                <Utensils className="h-6 w-6 text-accent" /> Our Program
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>Our primary focus is our food distribution program. Every week, our dedicated volunteers prepare and package hundreds of meals to be distributed across various locations in Delhi, reaching underprivileged children, daily wage earners, and families struggling with food insecurity.</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><strong>Meal Cost:</strong> Each nutritious meal package costs just ₹21, making it an affordable way for anyone to make a significant impact.</li>
                <li><strong>Meal Quality:</strong> We pride ourselves on providing healthy, hygienic, home-cooked, and delicious meals, prepared with the utmost care, love, and respect for the recipients. We do not distribute dry rations, focusing on fresh, ready-to-eat food.</li>
                <li><strong>Distribution Days:</strong> Our food drives are consistently held every Tuesday and Saturday, ensuring regular and reliable support to the community's most vulnerable members.</li>
                <li><strong>Impact:</strong> Each meal provides essential nourishment, a moment of comfort, and a message of hope, helping individuals gain the strength to face another day.</li>
              </ul>
            </CardContent>
          </Card>
          <div className="relative overflow-hidden rounded-lg shadow-lg min-h-[300px] bg-gray-200 dark:bg-gray-700"> {/* Added fallback bg and min-h */}
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

      <section className="bg-background dark:bg-gray-950 p-8 rounded-lg shadow-lg"> {/* Changed to background color */}
        <h2 className="text-3xl font-semibold mb-6 text-primary dark:text-primary-foreground text-center">Special Initiatives: Spreading Joy Beyond Meals</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          Beyond our regular food distribution, we organize special programs that allow our community to engage in unique acts of kindness and celebrate life's moments with those less fortunate. These initiatives foster a holistic approach to well-being and community engagement.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground flex items-center gap-2">
                <Heart className="h-6 w-6 text-accent" /> Celebrate Your Special Day
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>Make your birthday, anniversary, or any milestone truly unforgettable. For a modest contribution of ₹500-₹600, you can celebrate by cutting a cake and sharing it with the children we serve, creating smiles and cherished memories that last a lifetime. It's a unique and heartwarming way to give back and experience profound joy on your special day.</p>
              <p className="text-sm text-muted-foreground">Contact us to coordinate your celebration!</p>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground flex items-center gap-2">
                <PiggyBank className="h-6 w-6 text-accent" /> Gau Seva (Cow Feeding)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>Extend your kindness to all living beings. We facilitate donations for our cow feeding program, providing fodder and essential care for these gentle animals. This initiative reflects our broader commitment to compassion and welfare for all creatures, promoting a holistic approach to charity.</p>
              <p className="text-sm text-muted-foreground">Your contribution helps us care for these animals.</p>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground flex items-center gap-2">
                <Utensils className="h-6 w-6 text-accent" /> Custom Donation Requests
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300 space-y-3">
              <p>If you have a specific way you'd like to contribute, a particular item you wish to donate, or a special occasion you want to mark through service, please contact us. We are always open to facilitating your unique acts of kindness and integrating them into our mission, ensuring your generosity makes the desired impact.</p>
              <p className="text-sm text-muted-foreground">Reach out to discuss your ideas!</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;