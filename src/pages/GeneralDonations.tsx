import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Gift, Smile, Heart, Handshake, Award, PiggyBank } from 'lucide-react'; // Added PiggyBank icon
import BackgroundPattern from '@/components/BackgroundPattern'; // Import BackgroundPattern

const GeneralDonations = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">Support Our Mission: General Contributions</h1>

      <section className="relative mb-12 max-w-3xl mx-auto text-center">
        <BackgroundPattern Icon={PiggyBank} size={250} opacity="opacity-[0.03]" position="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
        <p className="text-lg text-gray-700 leading-relaxed mb-6 relative z-10">
          While our Nav Seva (food distribution) program is our primary and most visible focus, general contributions are absolutely vital for the overall sustainability and operational efficiency of Nav Kalyan Sanstha Delhi. These flexible funds provide us with the necessary resources to cover essential administrative costs, manage logistics, and respond promptly to urgent and unforeseen needs within the community that fall outside our regular meal programs.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 relative z-10">
          Your general donation is a powerful way to support the backbone of our organization and helps with a wide array of critical operational aspects, ensuring our mission continues to thrive:
        </p>
        <ul className="list-disc list-inside text-left text-lg text-gray-700 space-y-2 mb-8 relative z-10">
          <li><strong>Procurement of High-Quality Cooking Ingredients:</strong> Ensuring we can consistently purchase fresh, nutritious, and high-quality ingredients for all our home-cooked meals.</li>
          <li><strong>Transportation and Logistics:</strong> Covering the costs associated with transporting cooked meals to various distribution points across Delhi, including fuel, vehicle maintenance, and volunteer travel.</li>
          <li><strong>Purchase of Hygiene Supplies:</strong> Investing in essential hygiene supplies such as gloves, masks, sanitizers, and packaging materials to maintain the highest standards of food safety and cleanliness during preparation and distribution.</li>
          <li><strong>Supporting Special Initiatives:</strong> Providing flexibility to fund and expand our special programs like birthday celebrations for underprivileged children, Gau Seva (cow feeding), and other community welfare activities.</li>
          <li><strong>Administrative Overheads:</strong> Covering necessary operational costs like utility bills, communication expenses, and maintenance of our cooking and storage facilities.</li>
        </ul>
        <p className="text-xl font-semibold text-primary mb-8 relative z-10">
          Every rupee you contribute through a general donation strengthens our overall capacity and ability to serve more effectively and efficiently. Your trust and unwavering support are deeply cherished and make a profound difference in the lives of countless individuals. Thank you for being a pillar of our mission.
        </p>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative z-10">
          <Link to="/donate-food">Make a General Donation Now</Link>
        </Button>
      </section>

      <section className="relative mt-12 max-w-3xl mx-auto">
        <BackgroundPattern Icon={Smile} size={250} opacity="opacity-[0.03]" position="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 -rotate-12" />
        <BackgroundPattern Icon={Gift} size={200} opacity="opacity-[0.03]" position="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 rotate-12" />
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground text-center relative z-10">Our Impact: Moments of Joy and Service</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center relative z-10">
          Beyond the numbers, our journey is filled with heartwarming moments and profound connections. Here are some glimpses into the impact we've made, fueled by your generosity and our volunteers' dedication:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <Card className="bg-card shadow-md border border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <Smile className="h-6 w-6 text-accent" /> Birthday Celebrations
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="mb-2">We've had the immense joy of celebrating numerous birthdays with underprivileged children. Seeing their faces light up as they cut cakes and share meals with us is a truly unforgettable experience. These moments of pure happiness are a testament to the power of collective kindness.</p>
              <img src="/images/birthday-girl-cake.jpg" alt="Children celebrating birthday" className="w-full h-48 object-cover rounded-md mt-4" />
            </CardContent>
          </Card>

          <Card className="bg-card shadow-md border border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <Handshake className="h-6 w-6 text-accent" /> Awaiting Our Arrival
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="mb-2">Every Tuesday and Saturday, the children eagerly await our arrival. Their warm hugs and bright smiles are our greatest reward. It's more than just food; it's a bond of trust and affection that we cherish deeply, making our efforts incredibly meaningful.</p>
              <img src="/images/donation-receive-3.jpg" alt="Children waiting for food" className="w-full h-48 object-cover rounded-md mt-4" />
            </CardContent>
          </Card>

          <Card className="bg-card shadow-md border border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <Heart className="h-6 w-6 text-accent" /> Donations in Temples
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="mb-2">Our commitment to service extends to sacred spaces. We've organized food donations in various temples, ensuring that devotees and those in need receive blessed meals, especially during auspicious occasions. This allows us to spread kindness in diverse community settings.</p>
              <img src="/images/man-praying-money.jpg" alt="Donation in temple" className="w-full h-48 object-cover rounded-md mt-4" />
            </CardContent>
          </Card>

          <Card className="bg-card shadow-md border border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center gap-2">
                <Award className="h-6 w-6 text-accent" /> Milestones & Self-Donations
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              <p className="mb-2">Crossing the milestone of 1000 food packages was a moment of immense pride. To celebrate, our team personally donated 100 packages, reinforcing our dedication. These self-donations and milestones reflect our deep personal commitment to the cause.</p>
              <img src="/images/cake-feeding-children.jpg" alt="Volunteers celebrating milestone" className="w-full h-48 object-cover rounded-md mt-4" />
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="mt-8 p-6 bg-blue-50/50 border-l-4 border-blue-500 rounded-md text-gray-800">
        <h3 className="text-lg font-semibold mb-2">Important Information Regarding Tax Exemption:</h3>
        <p className="mb-2">Nav Kalyan Sanstha Delhi is registered under Section 80G of the Indian Income Tax Act, which means your donations are eligible for tax exemption. Please contact us for details on how to receive your tax exemption certificate.</p>
      </div>

      <div className="mt-8 text-center text-gray-700">
        <h3 className="text-lg font-semibold mb-2">For Donation Queries:</h3>
        <p>Should you have any questions or require assistance with your donation, please do not hesitate to contact us. You can call us directly at <a href="tel:+919958349220" className="text-blue-500 hover:underline">+919958349220</a> or send an email to <a href="mailto:navkalyansansthadelhi@gmail.com" className="text-blue-500 hover:underline">navkalyansansthadelhi@gmail.com</a>. Our team is ready to assist you.</p>
      </div>
    </div>
  );
};

export default GeneralDonations;