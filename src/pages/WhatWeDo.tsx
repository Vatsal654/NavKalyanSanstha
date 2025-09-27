import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Heart, PiggyBank } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">What We Do</h1>

      <section className="mb-12 bg-secondary p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-primary text-center">Core Initiative: Weekly Food Distribution</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          Our flagship program is dedicated to alleviating hunger by providing freshly prepared, nutritious meals to those who need them most. We believe in serving with dignity and consistency, ensuring that every individual receives a wholesome meal and a moment of comfort. This initiative is the cornerstone of our mission, driven by compassion and a commitment to community well-being.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <Utensils className="h-6 w-6 text-accent" /> Our Program Details
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>Our primary focus is our robust food distribution program, which operates with unwavering dedication every week. Our team of passionate volunteers meticulously prepares and carefully packages hundreds of meals. These wholesome food packages are then distributed across various identified locations in Delhi, specifically targeting underprivileged children, hardworking daily wage earners, and vulnerable families who are struggling with food insecurity.</p>
              <p>We are committed to not just providing food, but providing nourishment with dignity. Our program ensures a consistent and reliable source of healthy meals for those who often go without, fostering a sense of hope and community support.</p>
              <ul className="list-disc list-inside space-y-1 pl-4">
                <li><strong>Meal Cost:</strong> Each nutritious, freshly prepared meal package costs just ₹21, making it an incredibly affordable and impactful way for anyone to contribute to our cause.</li>
                <li><strong>Meal Quality:</strong> We take immense pride in providing healthy, hygienic, home-cooked, and delicious meals. Every dish is prepared with the utmost care, love, and profound respect for the recipients. We strictly focus on distributing fresh, ready-to-eat food, rather than dry rations, to ensure immediate nourishment.</li>
                <li><strong>Distribution Days:</strong> Our food distribution drives are consistently held every Tuesday and Saturday. This regular schedule ensures reliable and predictable support to the community's most vulnerable members, allowing them to anticipate and depend on our assistance.</li>
                <li><strong>Impact:</strong> Each meal we distribute provides essential physical nourishment, offers a much-needed moment of comfort, and delivers a powerful message of hope. This support helps individuals gain the strength and resilience required to face another day with renewed spirit.</li>
              </ul>
            </CardContent>
          </Card>
          <div className="relative overflow-hidden rounded-lg shadow-lg min-h-[300px] bg-gray-200">
            <img
              src="/images/gallery-4.jpg"
              alt="Food distribution"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <p className="absolute bottom-4 left-4 text-white text-xl font-semibold">Serving with Love and Dignity</p>
          </div>
        </div>
      </section>

      <section className="bg-background p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-primary text-center">Special Initiatives: Spreading Joy Beyond Meals</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
          Beyond our regular food distribution, Nav Kalyan Sanstha Delhi is proud to organize a variety of special programs. These initiatives allow our community to engage in unique acts of kindness, celebrate life's precious moments with those less fortunate, and extend compassion to all living beings. Each program fosters a holistic approach to well-being and strengthens community bonds.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <Heart className="h-6 w-6 text-accent" /> Celebrate Your Special Day
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>Make your birthday, anniversary, or any significant milestone truly unforgettable by sharing your joy with those who need it most. For a modest contribution of ₹500-₹600, we can arrange for a heartwarming cake cutting ceremony and meal sharing event with the underprivileged children we serve. This unique initiative not only creates smiles and cherished memories that last a lifetime for you and the children, but also allows you to give back in a deeply personal and impactful way on your special day.</p>
              <p className="text-sm text-muted-foreground">Please contact us well in advance to coordinate your celebration and ensure all arrangements are made perfectly!</p>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <PiggyBank className="h-6 w-6 text-accent" /> Gau Seva (Cow Feeding)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>Extend your profound kindness and compassion to all living beings through our revered Gau Seva (cow feeding) program. We actively facilitate donations specifically dedicated to providing nutritious fodder, clean water, and essential veterinary care for these gentle and sacred animals. This initiative is a reflection of our broader commitment to compassion and welfare for all creatures, promoting a holistic approach to charity that extends beyond human beneficiaries. Your contribution to Gau Seva helps us ensure the well-being and respectful treatment of these animals.</p>
              <p className="text-sm text-muted-foreground">Your generous contribution directly helps us care for these animals and uphold this important tradition of service.</p>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                <Utensils className="h-6 w-6 text-accent" /> Custom Donation Requests
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-3">
              <p>We understand that generosity can manifest in many unique forms. If you have a specific way you'd like to contribute, a particular item you wish to donate (beyond monetary contributions), or a special occasion you want to mark through a unique act of service, please do not hesitate to contact us. We are always open to discussing and facilitating your unique acts of kindness and integrating them into our broader mission, ensuring your generosity makes the desired and most impactful difference in the community.</p>
              <p className="text-sm text-muted-foreground">Reach out to us via phone or email to discuss your innovative ideas and how we can collaborate!</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;