import React from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactUs = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">Get In Touch</h1>
      <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
        We would love to hear from you. Whether you have a question about our initiatives, wish to volunteer your time, explore collaboration opportunities, or simply want to share your feedback, please do not hesitate to reach out to us. Your engagement is invaluable to our mission.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
              <MapPin className="h-6 w-6 text-accent" /> Our Office Address
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            <p className="mb-2">You can find us at our operational base, where much of our planning and coordination takes place:</p>
            <p>Prahladpur Rd, Manigram Park Extension,</p>
            <p>Rohini Extension, Rohini, Delhi, 110086</p>
            <p className="text-sm text-muted-foreground mt-2">Please note that visits are by appointment only to ensure we can give you our full attention.</p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
              <Phone className="h-6 w-6 text-accent" /> Phone & WhatsApp
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            <p className="mb-2">For immediate inquiries, volunteering interests, or donation confirmations, please reach us via phone or WhatsApp:</p>
            <p><a href="tel:+919118898507" className="text-blue-500 hover:underline font-semibold text-lg">+919118898507</a></p>
            <p className="text-sm text-muted-foreground">(Our team is available to assist you during working hours and on WhatsApp for quick communication.)</p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
              <Mail className="h-6 w-6 text-accent" /> Email Us
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            <p className="mb-2">For detailed inquiries, partnership proposals, or general correspondence, please send us an email:</p>
            <p>For General Inquiries: <a href="mailto:info@navkalyansansthadelhi.org" className="text-blue-500 hover:underline">info@navkalyansansthadelhi.org</a></p>
            <p>For Donations & 80G Certificates: <a href="mailto:donations@navkalyansansthadelhi.org" className="text-blue-500 hover:underline">donations@navkalyansansthadelhi.org</a></p>
            <p className="text-sm text-muted-foreground mt-2">We strive to respond to all emails within 24-48 business hours.</p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary flex items-center gap-2">
              <Instagram className="h-6 w-6 text-accent" /> Connect With Us Online
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            <p className="mb-2">Stay updated with our latest activities, events, and impact stories by connecting with us on social media:</p>
            <p>Instagram: <a href="https://www.instagram.com/nav.kalyan.sanstha/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">@nav.kalyan.sanstha</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/company/nav-kalyan-sanstha-delhi" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/company/nav-kalyan-sanstha-delhi</a></p>
            <p className="text-sm text-muted-foreground mt-2">Follow us to see the real-time impact of your support!</p>
          </CardContent>
        </Card>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground text-center">Our Location on Map</h2>
        <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
          Find us easily on the map. Our central location in Rohini, Delhi, allows us to efficiently coordinate our food distribution drives and reach various communities in need.
        </p>
        <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg border border-border">
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

      <section className="text-center text-gray-700">
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground">Hours of Operation</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          We are committed to serving the community and are available during the following hours for inquiries and operations. Our food distribution schedule is fixed to ensure consistent support.
        </p>
        <ul className="list-disc list-inside inline-block text-left space-y-2">
          <li><strong>Donations:</strong> Accepted 24/7 online through our various payment methods, ensuring you can contribute at your convenience.</li>
          <li><strong>Phone Inquiries:</strong> Our team is available to answer your calls and WhatsApp messages Monday - Saturday, from 10:00 AM to 6:00 PM.</li>
          <li><strong>Food Distribution:</strong> Our dedicated food drives take place every Tuesday & Saturday, rain or shine, reaching those in need without fail.</li>
        </ul>
      </section>
    </div>
  );
};

export default ContactUs;