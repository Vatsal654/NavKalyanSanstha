import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HandHeart, UtensilsCrossed, GalleryHorizontal, MessageSquareText } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center text-white overflow-hidden py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/images/hero-background.webp)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 p-4 md:p-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">A Meal of Hope. A Gesture of Love.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow">
            Welcome to Nav Kalyan Sanstha Delhi. We are a non-profit, women-led initiative dedicated to serving fresh, home-cooked meals to those in need. For just ₹21, you can provide a nutritious meal and be a part of our mission to ensure no one in our community goes hungry.
          </p>
          <p className="text-2xl md:text-3xl font-semibold mb-10 text-yellow-300 drop-shadow">Our Slogan: Donate. Impact. Change.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-4xl font-bold text-yellow-300 mb-2">3000+</h3>
              <p className="text-lg">Meals Served and Counting</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-4xl font-bold text-yellow-300 mb-2">100%</h3>
              <p className="text-lg">Volunteer Driven</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-4xl font-bold text-yellow-300 mb-2">₹21</h3>
              <p className="text-lg">Provides One Hygienic, Home-Cooked Meal</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to="/donate-food">Donate a Meal Now (₹21)</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-7 text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to="/about-us">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 bg-gradient-to-b from-background to-muted dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary dark:text-primary-foreground">Who We Are</h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Nav Kalyan Sanstha Delhi is a non-profit, women-led organization dedicated to serving fresh, home-cooked meals to those in need. We believe in the power of community and compassion to create a hunger-free Delhi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-secondary-foreground dark:text-secondary">Our Vision & Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our vision is a hunger-free Delhi where every individual has access to nutritious food and is treated with dignity. Our mission is to consistently prepare and distribute healthy, hygienic, and tasty home-cooked meals to underprivileged children and individuals.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md transition-colors duration-300">
                <Link to="/about-us">Read More About Us</Link>
              </Button>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1593113630400-f711629579a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Volunteers serving food"
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Snippet */}
      <section className="py-16 bg-background dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary dark:text-primary-foreground">What We Offer</h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Beyond our weekly food drives, we engage in special initiatives to spread joy and support the community in various ways.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border dark:border-gray-700">
              <CardHeader className="flex flex-col items-center text-center">
                <HandHeart className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground">Weekly Food Distribution</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>Every Tuesday and Saturday, we distribute healthy, home-cooked meals to those in need across Delhi.</p>
                <Button asChild variant="link" className="mt-4 text-primary dark:text-primary-foreground">
                  <Link to="/what-we-do">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border dark:border-gray-700">
              <CardHeader className="flex flex-col items-center text-center">
                <UtensilsCrossed className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground">Celebrate with Us</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>Make your special occasions memorable by celebrating with the children we serve. Share a cake and smiles!</p>
                <Button asChild variant="link" className="mt-4 text-primary dark:text-primary-foreground">
                  <Link to="/what-we-do">Discover More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border dark:border-gray-700">
              <CardHeader className="flex flex-col items-center text-center">
                <HandHeart className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground">Gau Seva & Custom Donations</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>Support our cow feeding program or discuss custom ways to contribute to our mission.</p>
                <Button asChild variant="link" className="mt-4 text-primary dark:text-primary-foreground">
                  <Link to="/what-we-do">Explore Options</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Snippet */}
      <section className="py-16 bg-muted dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary dark:text-primary-foreground">Moments of Impact</h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            See the smiles your generosity creates. Our gallery captures the heartwarming moments from our distribution drives.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img src="/images/gallery-1.jpg" alt="Child receiving food" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img src="/images/gallery-2.jpg" alt="Child reaching for food" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img src="/images/gallery-3.jpg" alt="Food package being handed over" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg group">
              <img src="/images/gallery-4.jpg" alt="Another food package being handed over" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
          </div>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </section>

      {/* Contact Us Snippet */}
      <section className="py-16 bg-background dark:bg-gray-950">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary dark:text-primary-foreground">Get In Touch</h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Have questions, want to volunteer, or collaborate? We'd love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border dark:border-gray-700">
              <CardHeader className="flex flex-col items-center text-center">
                <MessageSquareText className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground">Quick FAQs</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>Find answers to common questions about our mission, donations, and operations.</p>
                <Button asChild variant="link" className="mt-4 text-primary dark:text-primary-foreground">
                  <Link to="/faqs">View FAQs</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border dark:border-gray-700">
              <CardHeader className="flex flex-col items-center text-center">
                <HandHeart className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground">Donate Now</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>Your contribution makes a direct impact. Support our cause with a meal or a general donation.</p>
                <Button asChild variant="link" className="mt-4 text-primary dark:text-primary-foreground">
                  <Link to="/donate-food">Donate Today</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border dark:border-gray-700">
              <CardHeader className="flex flex-col items-center text-center">
                <MessageSquareText className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 dark:text-gray-300">
                <p>Reach out to us via phone, email, or visit our office. We're here to help!</p>
                <Button asChild variant="link" className="mt-4 text-primary dark:text-primary-foreground">
                  <Link to="/contact-us">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;