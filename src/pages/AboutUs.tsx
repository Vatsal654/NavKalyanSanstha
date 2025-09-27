import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary dark:text-primary-foreground">About Us</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground dark:text-secondary">Our Story: The Spark of Service</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Nav Kalyan Sanstha began with a simple yet profound realization: food is not a privilege, it is a fundamental human right. In a bustling city like Delhi, we saw the silent struggle of countless children, daily wage earners, and families who were deprived of this basic necessity. We felt a deep calling to bridge the gap between those who wished to help and those who desperately needed it.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          We started as a small chapter of our parent organization in Haryana, driven by a team of dedicated women who wanted to transform their compassion into action. We are not just an NGO; we are a platform, a conduit for kindness. We cook with love, serve with respect, and believe that every meal we provide is a step towards a more equitable and caring society.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            To create a hunger-free Delhi where every individual has access to nutritious food and is treated with dignity and respect. We envision a community that stands together, ensuring the well-being of its most vulnerable members.
          </CardContent>
        </Card>
        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            To consistently prepare and distribute healthy, hygienic, and tasty home-cooked meals to underprivileged children and individuals in Delhi. We are committed to maintaining a transparent, heartfelt, and accessible platform for donors to contribute and witness the direct impact of their generosity.
          </CardContent>
        </Card>
        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground">Our Values</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Compassion:</strong> Every action is driven by empathy and a genuine desire to help.</li>
              <li><strong>Respect:</strong> We serve every individual with the utmost dignity and care.</li>
              <li><strong>Transparency:</strong> We ensure our donors know exactly how their contributions are making a difference.</li>
              <li><strong>Community:</strong> We believe in the collective power of people coming together for a greater good.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground dark:text-secondary">Our Leadership</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Nav Kalyan Sanstha Delhi is proudly guided by:
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2">
          <li><strong>General Secretary:</strong> Ms. Seema Arya</li>
          <li><strong>Deputy General Secretaries:</strong> Ms. Shreyshi Arya & Ms. Srishti Arya</li>
          <li>And a powerful team of countless helping hands who are the true heart of our organization.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;