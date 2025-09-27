import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabase'; // Import Supabase client
import { v4 as uuidv4 } from 'uuid'; // For unique file names

const DonateFood = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    panNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    donationAmount: '',
    occasion: '',
  });
  const [paymentStatementFile, setPaymentStatementFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPaymentStatementFile(e.target.files[0]);
    } else {
      setPaymentStatementFile(null);
    }
  };

  const handleDonateAmountClick = (amount: number) => {
    setFormData((prev) => ({ ...prev, donationAmount: amount.toString() }));
  };

  // Mock function to simulate sending an email
  const sendMockEmail = async (toEmail: string, subject: string, body: string) => {
    console.log(`--- MOCK EMAIL SENT ---`);
    console.log(`To: ${toEmail}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: \n${body}`);
    console.log(`-----------------------`);
    // In a real application, you would use an email API here (e.g., SendGrid, Resend, or a Supabase Edge Function)
    // Example: await fetch('/api/send-email', { method: 'POST', body: JSON.stringify({ toEmail, subject, body }) });
    return Promise.resolve(); // Simulate success
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const loadingToastId = toast.loading('Processing your donation...');

    let paymentStatementUrl: string | null = null;

    try {
      // 1. Upload payment statement file if provided
      if (paymentStatementFile) {
        const fileExtension = paymentStatementFile.name.split('.').pop();
        const fileName = `${uuidv4()}.${fileExtension}`;
        const filePath = `payment_statements/${fileName}`; // Assuming a 'payment-statements' bucket

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('payment-statements') // Ensure this bucket exists in Supabase Storage
          .upload(filePath, paymentStatementFile, {
            cacheControl: '3600',
            upsert: false,
          });

        if (uploadError) {
          throw new Error(`File upload failed: ${uploadError.message}`);
        }

        const { data: publicUrlData } = supabase.storage
          .from('payment-statements')
          .getPublicUrl(filePath);
        
        paymentStatementUrl = publicUrlData.publicUrl;
      }

      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 1500)); // 1.5-second delay for mock payment

      // 2. Insert donation data into Supabase
      const { data, error } = await supabase.from('donations').insert([
        {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          pan_number: formData.panNumber,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip_code: formData.zipCode,
          donation_amount: parseFloat(formData.donationAmount),
          occasion: formData.occasion,
          payment_status: 'completed', // Mark as completed after mock payment
          payment_statement_url: paymentStatementUrl, // Store the URL
        },
      ]).select();

      if (error) {
        throw error;
      }

      toast.dismiss(loadingToastId);
      toast.success('Donation successful! Thank you for your generosity.');
      toast.info('Please share a screenshot of your payment via WhatsApp to +919118898507 if you haven\'t uploaded it.');

      // Simulate sending emails (mocked)
      const donorEmailBody = `Dear ${formData.firstName},\n\nThank you for your generous donation of ₹${formData.donationAmount} to Nav Kalyan Sanstha Delhi. Your contribution will help us provide nutritious meals to those in need.\n\nTransaction ID: ${data[0].id}\n${paymentStatementUrl ? `Payment Statement: ${paymentStatementUrl}\n` : ''}\nWarm regards,\nNav Kalyan Sanstha Delhi`;
      await sendMockEmail(formData.email, 'Thank You for Your Donation to Nav Kalyan Sanstha', donorEmailBody);

      const ngoEmailBody = `New Donation Received!\n\nDonor: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nAmount: ₹${formData.donationAmount}\nOccasion: ${formData.occasion || 'N/A'}\nTransaction ID: ${data[0].id}\n${paymentStatementUrl ? `Payment Statement URL: ${paymentStatementUrl}\n` : ''}`;
      await sendMockEmail('donations@navkalyansansthadelhi.org', 'New Donation Alert!', ngoEmailBody); // Mock NGO email

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        panNumber: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        donationAmount: '',
        occasion: '',
      });
      setPaymentStatementFile(null);

    } catch (error: any) {
      console.error('Donation submission error:', error);
      toast.dismiss(loadingToastId);
      toast.error(`Failed to process your donation: ${error.message || 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary dark:text-primary-foreground">Anna Daan - A Gift of Food, A Gift of Life.</h1>
      <p className="text-xl text-center text-gray-700 dark:text-gray-300 mb-8">Feed a Needy Person for Just ₹21.</p>

      <section className="mb-12 max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          In a city of millions, many struggle silently for their next meal. For the families of patients in hospitals, for daily wage workers, and for countless children, a warm, nutritious meal is a distant dream. It's not just food; it's a message of hope, a moment of comfort, and the strength to face another day.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          Nav Kalyan Sanstha Delhi is on a mission to deliver this hope. Your contribution, no matter the size, directly translates into a freshly cooked, wholesome meal served with dignity and love. Join us in this sacred act of 'Anna Daan'.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground dark:text-secondary">Make a Difference Today:</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">Choose an option below or donate any amount you wish.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {[210, 525, 1050, 2100, 5250].map((amount) => (
            <Button
              key={amount}
              variant="outline"
              className="py-6 h-auto text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 whitespace-normal break-words"
              onClick={() => handleDonateAmountClick(amount)}
              disabled={isSubmitting}
            >
              Donate ₹{amount} to feed {amount / 21} people
            </Button>
          ))}
          <Button
            variant="outline"
            className="py-6 h-auto text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 col-span-2 md:col-span-1 whitespace-normal break-words"
            onClick={() => setFormData((prev) => ({ ...prev, donationAmount: '' }))} // Clear for custom amount
            disabled={isSubmitting}
          >
            Donate Any Amount of Your Choice
          </Button>
        </div>
      </section>

      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary dark:text-primary-foreground">Donation Form</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">Please fill in your details to proceed with the donation.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-xl font-semibold text-secondary-foreground dark:text-secondary">Personal Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name*</Label>
                <Input id="firstName" type="text" required value={formData.firstName} onChange={handleChange} disabled={isSubmitting} />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" type="text" value={formData.lastName} onChange={handleChange} disabled={isSubmitting} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address*</Label>
                <Input id="email" type="email" required value={formData.email} onChange={handleChange} disabled={isSubmitting} />
              </div>
              <div>
                <Label htmlFor="phone">Phone*</Label>
                <Input id="phone" type="tel" required value={formData.phone} onChange={handleChange} disabled={isSubmitting} />
              </div>
            </div>
            <div>
              <Label htmlFor="panNumber">PAN Number (For 80G Tax Exemption Receipt)</Label>
              <Input id="panNumber" type="text" value={formData.panNumber} onChange={handleChange} disabled={isSubmitting} />
            </div>

            <h3 className="text-xl font-semibold text-secondary-foreground dark:text-secondary">Billing Details</h3>
            <div>
              <Label htmlFor="address">Address*</Label>
              <Input id="address" type="text" required value={formData.address} onChange={handleChange} disabled={isSubmitting} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City*</Label>
                <Input id="city" type="text" required value={formData.city} onChange={handleChange} disabled={isSubmitting} />
              </div>
              <div>
                <Label htmlFor="state">State*</Label>
                <Input id="state" type="text" required value={formData.state} onChange={handleChange} disabled={isSubmitting} />
              </div>
              <div>
                <Label htmlFor="zipCode">Zip / Postal Code*</Label>
                <Input id="zipCode" type="text" required value={formData.zipCode} onChange={handleChange} disabled={isSubmitting} />
              </div>
            </div>

            <div>
              <Label htmlFor="donationAmount">Donation Amount (₹)*</Label>
              <Input id="donationAmount" type="number" required value={formData.donationAmount} onChange={handleChange} min="1" disabled={isSubmitting} />
            </div>

            <div>
              <Label htmlFor="occasion">Dedicate Your Donation on a Special Occasion (Optional)</Label>
              <Input id="occasion" type="text" placeholder="e.g., Birthday, Anniversary, In Memory of..." value={formData.occasion} onChange={handleChange} disabled={isSubmitting} />
            </div>

            <div>
              <Label htmlFor="paymentStatement">Upload Payment Statement (Optional)</Label>
              <Input id="paymentStatement" type="file" accept="image/*,application/pdf" onChange={handleFileChange} disabled={isSubmitting} />
              <p className="text-sm text-muted-foreground mt-1">Accepted formats: images (JPG, PNG), PDF.</p>
            </div>

            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg rounded-md transition-colors duration-300" disabled={isSubmitting}>
              {isSubmitting ? 'Processing...' : 'Proceed to Payment'}
            </Button>
          </form>
        </CardContent>
      </Card>

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

        <div className="mt-8 p-6 bg-blue-50/50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-md text-gray-800 dark:text-gray-200">
          <h3 className="text-lg font-semibold mb-2">Dedicate Your Donation on a Special Occasion</h3>
          <p className="mb-2">Make your milestones more meaningful by sharing your joy. Donate food in honor of:</p>
          <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-1">
            <li>Birthdays & Anniversaries</li>
            <li>Career Promotions or a New Job</li>
            <li>Graduation or Academic Achievement</li>
            <li>Housewarming</li>
            <li>In Memory of a Loved One (Death Anniversary)</li>
            <li>Religious or Cultural Festivals</li>
            <li>Child Birth or Adoption</li>
          </ul>
          <p className="mt-3">When you send your payment screenshot, please let us know the occasion so we can share the blessings with you!</p>
        </div>

        <div className="mt-8 text-center text-gray-700 dark:text-gray-300">
          <h3 className="text-lg font-semibold mb-2">For Donation Queries:</h3>
          <p>Please call us at <a href="tel:+919118898507" className="text-blue-500 hover:underline">+919118898507</a> or email us at <a href="mailto:donations@navkalyansansthadelhi.org" className="text-blue-500 hover:underline">donations@navkalyansansthadelhi.org</a> (mock email).</p>
        </div>
      </section>
    </div>
  );
};

export default DonateFood;