import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react'; // Import icons for toggle

const DonateFood = () => {
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  const togglePaymentDetails = () => {
    setShowPaymentDetails((prev) => !prev);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">Anna Daan - A Gift of Food, A Gift of Life.</h1>
      <p className="text-xl text-center text-gray-700 mb-8">Feed a Needy Person for Just ₹21.</p>

      <section className="mb-12 max-w-3xl mx-auto bg-secondary p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-primary text-center">The Power of Anna Daan</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In a city of millions, many struggle silently for their next meal. For the families of patients in hospitals, for daily wage workers, and for countless children, a warm, nutritious meal is a distant dream. It's not just food; it's a message of hope, a moment of comfort, and the strength to face another day.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Nav Kalyan Sanstha Delhi is on a mission to deliver this hope. Your contribution, no matter the size, directly translates into a freshly cooked, wholesome meal served with dignity and love. Join us in this sacred act of 'Anna Daan' and become a beacon of kindness in someone's life.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-primary">Make a Difference Today:</h2>
        <p className="text-lg text-gray-700 mb-6">Choose an option below or donate any amount you wish. Every <strong>₹21</strong> provides one hygienic, home-cooked meal.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {[210, 525, 1050, 2100, 5250].map((amount) => (
            <Button
              key={amount}
              className="bg-accent hover:bg-accent/90 text-accent-foreground py-6 h-auto text-lg rounded-md transition-colors duration-300 whitespace-normal break-words"
              // Removed alert call
            >
              Donate <strong>₹{amount}</strong> to feed <strong>{amount / 21}</strong> people
            </Button>
          ))}
          <Button
            className="bg-accent hover:bg-accent/90 text-accent-foreground py-6 h-auto text-lg rounded-md transition-colors duration-300 col-span-2 md:col-span-1 whitespace-normal break-words"
            // Removed alert call
          >
            Donate Any Amount of Your Choice
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          For custom donation amounts or specific requests, please contact us directly.
        </p>
      </section>

      <section className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-primary text-center">Payment Methods</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
          We offer multiple convenient ways for you to make your generous contributions. Choose the method that works best for you.
        </p>

        <Button
          onClick={togglePaymentDetails}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg rounded-md transition-colors duration-300 flex items-center justify-center gap-2 mb-6"
        >
          {showPaymentDetails ? (
            <>
              Hide Payment Details <ChevronUp className="h-5 w-5" />
            </>
          ) : (
            <>
              Show Payment Details <ChevronDown className="h-5 w-5" />
            </>
          )}
        </Button>

        {showPaymentDetails && (
          <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <Card className="bg-card shadow-md border border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">UPI (Paytm, Google Pay, PhonePe, etc.)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-700">
                <p><strong>UPI ID:</strong> nav.kalyan.sanstha@upi</p>
                <p>Scan this QR code to make a quick payment:</p>
                <div className="flex justify-center p-4 bg-muted rounded-md">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=nav.kalyan.sanstha@upi&pn=NavKalyanSanstha&cu=INR" alt="UPI QR Code" className="w-48 h-48" />
                </div>
                <p className="text-sm text-muted-foreground">
                  <a href="https://wa.me/919118898507" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click here to DM us your details on WhatsApp</a> after scanning. This helps us track your generous contribution and send a confirmation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-md border border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Bank Transfer (NEFT/RTGS/IMPS)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-700">
                <p>For larger contributions or if you prefer traditional banking, you can make a direct bank transfer:</p>
                <p><strong>Bank Name:</strong> Jana Bank</p>
                <p><strong>Account Name:</strong> Nav Kalyan Sanstha</p>
                <p><strong>Account Number:</strong> 50100XXXXXXX</p> {/* Placeholder for actual account number */}
                <p><strong>IFSC Code:</strong> JANA0000XXX</p> {/* Placeholder for actual IFSC code */}
                <p><strong>Account Type:</strong> Savings</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Please ensure all details are correct to avoid any transaction issues.
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        <div className="mt-8 p-6 bg-primary/10 border-l-4 border-primary rounded-md text-gray-800">
          <h3 className="text-lg font-semibold mb-2 text-primary">Very Important: Tax Exemption & Confirmation</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>As per Indian Income Tax Department rules, please provide your PAN number and full address to receive the 80G tax-exemption certificate. This certificate allows you to claim tax benefits on your donation.</li>
            <li>After donating, please share a screenshot of your payment with us via WhatsApp at <a href="https://wa.me/919118898507" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">+919118898507</a>. This helps us track your generous contribution, send a confirmation, and process your 80G certificate efficiently.</li>
            <li>Your privacy is important to us. All personal information provided will be used solely for donation processing and tax exemption purposes.</li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-accent/10 border-l-4 border-accent rounded-md text-gray-800">
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

        <div className="mt-8 text-center text-gray-700">
          <h3 className="text-lg font-semibold mb-2 text-primary">For Donation Queries:</h3>
          <p>Please call us at <a href="tel:+919118898507" className="text-blue-500 hover:underline">+919118898507</a> or email us at <a href="mailto:donations@navkalyansansthadelhi.org" className="text-blue-500 hover:underline">donations@navkalyansansthadelhi.org</a>.</p>
          <p className="text-sm text-muted-foreground mt-2">Our team is available to assist you with any questions regarding your donation or the 80G certificate process.</p>
        </div>
      </section>
    </div>
  );
};

export default DonateFood;