import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { IndianRupee, Banknote } from 'lucide-react'; // Added icons for payment methods

const DonateFood = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">Nav Seva - A Gift of Food, A Gift of Life.</h1>
      <p className="text-xl text-center text-gray-700 mb-8">Feed a Needy Person for Just ₹21.</p>

      <section className="mb-12 max-w-3xl mx-auto bg-secondary p-8 rounded-lg shadow-lg border border-border">
        <h2 className="text-3xl font-semibold mb-6 text-primary text-center">The Power of Nav Seva</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In a city of millions, many struggle silently for their next meal. For the families of patients in hospitals, for daily wage workers, and for countless children, a warm, nutritious meal is a distant dream. It's not just food; it's a message of hope, a moment of comfort, and the strength to face another day. At Nav Kalyan Sanstha Delhi, we believe that no one should go hungry.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Nav Kalyan Sanstha Delhi is on a mission to deliver this hope directly to those in need. Your contribution, no matter the size, directly translates into a freshly cooked, wholesome meal served with dignity and love. Join us in this sacred act of 'Nav Seva' and help us nourish bodies and spirits across Delhi. Every single rupee you donate goes directly towards preparing and distributing these vital meals, ensuring maximum impact.
        </p>
        <p className="text-2xl font-semibold text-primary text-center mb-8">
          Every <strong>₹21</strong> provides one hygienic, home-cooked meal.
        </p>
      </section>

      <Card className="max-w-3xl mx-auto shadow-lg border border-border bg-card">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary text-center">Complete Your Donation</CardTitle>
          <CardDescription className="text-gray-600 text-center mt-2">Thank you for your generosity! Please use one of the following secure methods to complete your donation.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed text-center">
            After making the payment, we kindly request you to share a screenshot of your payment confirmation via WhatsApp to <a href="https://wa.me/919958349220" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><strong>+919958349220</strong></a>. This helps us track your valuable contribution and issue a confirmation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-muted shadow-sm border border-border p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <IndianRupee className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="text-xl text-primary mb-4">UPI (Paytm, Google Pay, PhonePe, etc.)</CardTitle>
              <CardContent className="space-y-2 text-gray-700 p-0">
                <p><strong>UPI ID:</strong> 9958349220@ibl</p>
                <p className="mt-4">Scan this QR code to make a quick payment:</p>
                <div className="flex justify-center p-4 bg-white rounded-md mt-2">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=9958349220@ibl&pn=NavKalyanSanstha&cu=INR" alt="UPI QR Code" className="w-48 h-48" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted shadow-sm border border-border p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105">
              <Banknote className="h-12 w-12 text-accent mb-4" />
              <CardTitle className="text-xl text-primary mb-4">Bank Transfer (NEFT/RTGS/IMPS)</CardTitle>
              <CardContent className="space-y-2 text-gray-700 p-0">
                <p>For larger contributions or if you prefer traditional banking, you can make a direct bank transfer:</p>
                <p><strong>Bank Name:</strong> Axis Bank</p>
                <p><strong>Account Name:</strong> Nav Kalyan Sanstha</p>
                <p><strong>Account Number:</strong> 50100XXXXXXX</p> {/* Placeholder for actual account number */}
                <p><strong>IFSC Code:</strong> JANA0000XXX</p> {/* Placeholder for actual IFSC code */}
                <p><strong>Account Type:</strong> Savings</p>
              </CardContent>
            </Card>
          </div>

          <div className="p-6 bg-primary/10 border-l-4 border-primary rounded-md text-gray-800 mt-8">
            <h3 className="text-lg font-semibold mb-2 text-primary">Important: Donation Confirmation</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>After donating, please share a screenshot of your payment with us via WhatsApp at <a href="https://wa.me/919958349220" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><strong>+919958349220</strong></a>. This helps us track your generous contribution and send a confirmation efficiently.</li>
              <li>Your privacy is important to us. All personal information provided will be used solely for donation processing and communication purposes.</li>
            </ul>
          </div>

          <div className="p-6 bg-accent/10 border-l-4 border-accent rounded-md text-gray-800 mt-8">
            <h3 className="text-lg font-semibold mb-2 text-primary">Dedicate Your Donation on a Special Occasion</h3>
            <p className="mb-2 text-gray-700">Make your milestones more meaningful by sharing your joy. Donate food in honor of:</p>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-1 text-gray-700">
              <li>Birthdays & Anniversaries</li>
              <li>Career Promotions or a New Job</li>
              <li>Graduation or Academic Achievement</li>
              <li>Housewarming</li>
              <li>In Memory of a Loved One (Death Anniversary)</li>
              <li>Religious or Cultural Festivals</li>
              <li>Child Birth or Adoption</li>
            </ul>
            <p className="mt-3 text-gray-700">When you send your payment screenshot, please let us know the occasion so we can share the blessings with you and acknowledge your thoughtful gesture!</p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-gray-700 bg-muted p-6 rounded-lg shadow-sm border border-border">
        <h3 className="text-lg font-semibold mb-2 text-primary">For Donation Queries:</h3>
        <p>Please call us at <a href="tel:+919958349220" className="text-blue-500 hover:underline"><strong>+919958349220</strong></a> or email us at <a href="mailto:donations@navkalyansansthadelhi.org" className="text-blue-500 hover:underline"><strong>donations@navkalyansansthadelhi.org</strong></a>.</p>
        <p className="text-sm text-muted-foreground mt-2">Our team is available to assist you with any questions regarding your donation.</p>
      </div>
    </div>
  );
};

export default DonateFood;