import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const DonateFood = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    donationAmount: '',
  });
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleDonateAmountClick = (amount: number) => {
    setFormData((prev) => ({ ...prev, donationAmount: amount.toString() }));
  };

  const handleShowPaymentOptions = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation before showing payment options
    if (!formData.firstName || !formData.email || !formData.phone || !formData.donationAmount) {
      alert('Please fill in all required personal details and donation amount before proceeding.');
      return;
    }
    if (parseFloat(formData.donationAmount) <= 0) {
      alert('Donation amount must be greater than zero.');
      return;
    }
    setShowPaymentDetails(true);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">Anna Daan - A Gift of Food, A Gift of Life.</h1>
      <p className="text-xl text-center text-gray-700 mb-8">Feed a Needy Person for Just ₹21.</p>

      <section className="mb-12 max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In a city of millions, many struggle silently for their next meal. For the families of patients in hospitals, for daily wage workers, and for countless children, a warm, nutritious meal is often a distant dream. It's not just food; it's a message of hope, a moment of comfort, and the strength to face another day. At Nav Kalyan Sanstha Delhi, we believe that no one should go hungry.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Nav Kalyan Sanstha Delhi is on a mission to deliver this hope directly to those in need. Your contribution, no matter the size, directly translates into a freshly cooked, wholesome meal served with dignity and love. Join us in this sacred act of 'Anna Daan' and help us nourish bodies and spirits across Delhi.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground">Make a Difference Today:</h2>
        <p className="text-lg text-gray-700 mb-6">Choose an option below or donate any amount you wish. Every ₹21 provides one hygienic, home-cooked meal.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {[210, 525, 1050, 2100, 5250].map((amount) => (
            <Button
              key={amount}
              variant="outline"
              className="py-6 h-auto text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 whitespace-normal break-words"
              onClick={() => handleDonateAmountClick(amount)}
            >
              Donate ₹{amount} to feed {amount / 21} people
            </Button>
          ))}
          <Button
            variant="outline"
            className="py-6 h-auto text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 col-span-2 md:col-span-1 whitespace-normal break-words"
            onClick={() => setFormData((prev) => ({ ...prev, donationAmount: '' }))} // Clear for custom amount
          >
            Donate Any Amount of Your Choice
          </Button>
        </div>
      </section>

      <Card className="max-w-3xl mx-auto shadow-lg border border-border">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Donation Details</CardTitle>
          <CardDescription className="text-gray-600">Please fill in your details to proceed to payment options.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleShowPaymentOptions} className="space-y-6">
            <h3 className="text-xl font-semibold text-secondary-foreground">Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name*</Label>
                <Input id="firstName" type="text" required value={formData.firstName} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" type="text" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address*</Label>
                <Input id="email" type="email" required value={formData.email} onChange={handleChange} />
              </div>
              <div>
                <Label htmlFor="phone">Phone*</Label>
                <Input id="phone" type="tel" required value={formData.phone} onChange={handleChange} />
              </div>
            </div>
            <div>
              <Label htmlFor="donationAmount">Donation Amount (₹)*</Label>
              <Input id="donationAmount" type="number" required value={formData.donationAmount} onChange={handleChange} min="1" />
            </div>

            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 text-lg rounded-md transition-colors duration-300">
              Show Payment Options
            </Button>
          </form>
        </CardContent>
      </Card>

      {showPaymentDetails && (
        <section className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground text-center">Complete Your Donation</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
            Thank you for your generosity! Please use one of the following methods to complete your donation.
            After making the payment, we kindly request you to share a screenshot of your payment confirmation via WhatsApp to <a href="https://wa.me/919118898507" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">+919118898507</a>. This helps us track your valuable contribution and send a confirmation.
          </p>
          <div className="space-y-6">
            <Card className="bg-card shadow-md border border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">UPI (Paytm, Google Pay, PhonePe, etc.)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-700">
                <p><strong>UPI ID:</strong> nav.kalyan.sanstha@upi</p>
                <p>Scan this QR code to make a quick payment:</p>
                <div className="flex justify-center p-4 bg-gray-50 rounded-md">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=nav.kalyan.sanstha@upi&pn=NavKalyanSanstha&cu=INR" alt="UPI QR Code" className="w-48 h-48" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-md border border-border">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Bank Transfer (NEFT/RTGS/IMPS)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-gray-700">
                <p><strong>Bank Name:</strong> Jana Bank</p>
                <p><strong>Account Name:</strong> Nav Kalyan Sanstha</p>
                <p><strong>Account Number:</strong> 50100XXXXXXX</p>
                <p><strong>IFSC Code:</strong> JANA0000XXX</p>
                <p><strong>Account Type:</strong> Savings</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-blue-50/50 border-l-4 border-blue-500 rounded-md text-gray-800">
            <h3 className="text-lg font-semibold mb-2">Dedicate Your Donation on a Special Occasion</h3>
            <p className="mb-2">Make your milestones more meaningful by sharing your joy. You can dedicate your donation in honor of:</p>
            <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-1">
              <li>Birthdays & Anniversaries</li>
              <li>Career Promotions or a New Job</li>
              <li>Graduation or Academic Achievement</li>
              <li>Housewarming</li>
              <li>In Memory of a Loved One (Death Anniversary)</li>
              <li>Religious or Cultural Festivals</li>
              <li>Child Birth or Adoption</li>
            </ul>
            <p className="mt-3">When you send your payment screenshot via WhatsApp, please let us know the occasion so we can acknowledge your thoughtful gesture and share the blessings with you!</p>
          </div>
        </section>
      )}

      <div className="mt-8 text-center text-gray-700">
        <h3 className="text-lg font-semibold mb-2">For Donation Queries:</h3>
        <p>Please call us at <a href="tel:+919118898507" className="text-blue-500 hover:underline">+919118898507</a> or email us at <a href="mailto:donations@navkalyansansthadelhi.org" className="text-blue-500 hover:underline">donations@navkalyansansthadelhi.org</a>.</p>
      </div>
    </div>
  );
};

export default DonateFood;