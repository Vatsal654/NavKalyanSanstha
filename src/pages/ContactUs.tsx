import React from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactUs = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary dark:text-primary-foreground">Get In Touch</h1>
      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-8">
        We would love to hear from you. Whether you have a question, want to volunteer, or wish to collaborate, please reach out to us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground flex items-center gap-2">
              <MapPin className="h-6 w-6" /> Address
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            <p>Prahladpur Rd, Manigram Park Extension,</p>
            <p>Rohini Extension, Rohini, Delhi, 110086</p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground flex items-center gap-2">
              <Phone className="h-6 w-6" /> Phone & WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            <p><a href="tel:+919118898507" className="text-blue-500 hover:underline">+919118898507</a></p>
            <p>(Also available on WhatsApp)</p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground flex items-center gap-2">
              <Mail className="h-6 w-6" /> Email
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            <p>For General Inquiries: <a href="mailto:info@navkalyansansthadelhi.org" className="text-blue-500 hover:underline">info@navkalyansansthadelhi.org</a> (mock)</p>
            <p>For Donations: <a href="mailto:donations@navkalyansansthadelhi.org" className="text-blue-500 hover:underline">donations@navkalyansansthadelhi.org</a> (mock)</p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary dark:text-primary-foreground flex items-center gap-2">
              <Instagram className="h-6 w-6" /> Connect With Us
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 dark:text-gray-300">
            <p>Instagram: <a href="https://www.instagram.com/nav.kalyan.sanstha/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@nav.kalyan.sanstha</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/company/nav-kalyan-sanstha-delhi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/company/nav-kalyan-sanstha-delhi</a> (mock)</p>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground dark:text-secondary text-center">Our Location</h2>
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          {/* Embedded Google Map Placeholder */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.6540000000003!2d77.09500000000001!3d28.725000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0123456789ab%3A0x123456789abcdef0!2sPrahladpur%20Rd%2C%20Manigram%20Park%20Extension%2C%20Rohini%2C%20Delhi%2C%20110086!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Nav Kalyan Sanstha Location"
          ></iframe>
        </div>
      </section>

      <section className="text-center text-gray-700 dark:text-gray-300">
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground dark:text-secondary">Hours of Operation</h2>
        <ul className="list-disc list-inside inline-block text-left space-y-2">
          <li><strong>Donations:</strong> Accepted 24/7 online.</li>
          <li><strong>Phone Inquiries:</strong> Monday - Saturday, 10:00 AM - 6:00 PM.</li>
          <li><strong>Food Distribution:</strong> Every Tuesday & Saturday.</li>
        </ul>
      </section>
    </div>
  );
};

export default ContactUs;