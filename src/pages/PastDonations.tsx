import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const PastDonations = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary dark:text-primary-foreground">Support Our Mission</h1>

      <section className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          While our food program is our primary focus, general contributions are vital for the sustainability of our operations. These funds provide us with the flexibility to cover essential costs and respond to urgent needs within the community.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Your general donation helps with:
        </p>
        <ul className="list-disc list-inside text-left text-lg text-gray-700 dark:text-gray-300 space-y-2 mb-8">
          <li>Procurement of high-quality cooking ingredients.</li>
          <li>Transportation and logistics for food distribution.</li>
          <li>Purchase of hygiene supplies (e.g., gloves, masks) for our volunteers.</li>
          <li>Supporting our special initiatives like birthday celebrations and cow feeding.</li>
        </ul>
        <p className="text-xl font-semibold text-primary dark:text-primary-foreground mb-8">
          Every rupee you contribute strengthens our ability to serve. Thank you for your trust and support.
        </p>
        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <Link to="/donate-food">Make a General Donation Now</Link>
        </Button>
      </section>

      <section className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground dark:text-secondary">Payment Methods</h2>
        <div className="space-y-6">
          <Card className="bg-card shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-primary dark:text-primary-foreground">UPI (Paytm, Google Pay, PhonePe, etc.)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>UPI ID:</strong> nav.kalyan.sanstha@upi</p>
              <p>Scan this QR code to make a quick payment:</p>
              <div className="flex justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-md">
                {/* Mock QR Code - In a real app, this would be dynamically generated */}
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=nav.kalyan.sanstha@upi&pn=NavKalyanSanstha&cu=INR" alt="UPI QR Code" className="w-48 h-48" />
              </div>
              <p className="text-sm text-muted-foreground">
                <a href="https://wa.me/919118898507" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click here to DM us your details on WhatsApp</a> after scanning.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-md">
            <CardHeader>
              <CardTitle className="text-xl text-primary dark:text-primary-foreground">Bank Transfer (NEFT/RTGS/IMPS)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700 dark:text-gray-300">
              <p><strong>Bank Name:</strong> Jana Bank</p>
              <p><strong>Account Name:</strong> Nav Kalyan Sanstha</p>
              <p><strong>Account Number:</strong> 50100XXXXXXX</p>
              <p><strong>IFSC Code:</strong> JANA0000XXX</p>
              <p><strong>Account Type:</strong> Savings</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-yellow-50/50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded-md text-gray-800 dark:text-gray-200">
          <h3 className="text-lg font-semibold mb-2">Very Important:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>As per Indian Income Tax Department rules, please provide your PAN number and full address to receive the 80G tax-exemption certificate.</li>
            <li>After donating, please share a screenshot of your payment with us via WhatsApp at <a href="https://wa.me/919118898507" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">+919118898507</a>. This helps us track your generous contribution and send a confirmation.</li>
          </ul>
        </div>

        <div className="mt-8 text-center text-gray-700 dark:text-gray-300">
          <h3 className="text-lg font-semibold mb-2">For Donation Queries:</h3>
          <p>Please call us at <a href="tel:+919118898507" className="text-blue-500 hover:underline">+919118898507</a> or email us at <a href="mailto:donations@navkalyansansthadelhi.org" className="text-blue-500 hover:underline">donations@navkalyansansthadelhi.org</a> (mock email).</p>
        </div>
      </section>
    </div>
  );
};

export default PastDonations;