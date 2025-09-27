import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const GeneralDonations = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">Support Our Mission: General Contributions</h1>

      <section className="mb-12 max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          While our Anna Daan (food distribution) program is our primary and most visible focus, general contributions are absolutely vital for the overall sustainability and operational efficiency of Nav Kalyan Sanstha Delhi. These flexible funds provide us with the necessary resources to cover essential administrative costs, manage logistics, and respond promptly to urgent and unforeseen needs within the community that fall outside our regular meal programs.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Your general donation is a powerful way to support the backbone of our organization and helps with a wide array of critical operational aspects, ensuring our mission continues to thrive:
        </p>
        <ul className="list-disc list-inside text-left text-lg text-gray-700 space-y-2 mb-8">
          <li><strong>Procurement of High-Quality Cooking Ingredients:</strong> Ensuring we can consistently purchase fresh, nutritious, and high-quality ingredients for all our home-cooked meals.</li>
          <li><strong>Transportation and Logistics:</strong> Covering the costs associated with transporting cooked meals to various distribution points across Delhi, including fuel, vehicle maintenance, and volunteer travel.</li>
          <li><strong>Purchase of Hygiene Supplies:</strong> Investing in essential hygiene supplies such as gloves, masks, sanitizers, and packaging materials to maintain the highest standards of food safety and cleanliness during preparation and distribution.</li>
          <li><strong>Supporting Special Initiatives:</strong> Providing flexibility to fund and expand our special programs like birthday celebrations for underprivileged children, Gau Seva (cow feeding), and other community welfare activities.</li>
          <li><strong>Administrative Overheads:</strong> Covering necessary operational costs like utility bills, communication expenses, and maintenance of our cooking and storage facilities.</li>
        </ul>
        <p className="text-xl font-semibold text-primary mb-8">
          Every rupee you contribute through a general donation strengthens our overall capacity and ability to serve more effectively and efficiently. Your trust and unwavering support are deeply cherished and make a profound difference in the lives of countless individuals. Thank you for being a pillar of our mission.
        </p>
        <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
          <Link to="/donate-food">Make a General Donation Now</Link>
        </Button>
      </section>

      <section className="mt-12 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-foreground text-center">Convenient Payment Methods</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
          We offer multiple secure and easy-to-use payment options for your general contributions. Choose the method that is most convenient for you to support Nav Kalyan Sanstha Delhi.
        </p>
        <div className="space-y-6">
          <Card className="bg-card shadow-md border border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary">UPI (Paytm, Google Pay, PhonePe, etc.)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p><strong>UPI ID:</strong> nav.kalyan.sanstha@upi</p>
              <p>For quick and seamless payments, you can scan our dedicated QR code:</p>
              <div className="flex justify-center p-4 bg-gray-50 rounded-md">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=nav.kalyan.sanstha@upi&pn=NavKalyanSanstha&cu=INR" alt="UPI QR Code" className="w-48 h-48" />
              </div>
              <p className="text-sm text-muted-foreground">
                After successfully completing your payment via UPI, we kindly request you to share a screenshot of your transaction details with us on WhatsApp. This helps us accurately track your generous contribution and send you a timely confirmation. You can reach us at <a href="https://wa.me/919118898507" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">+919118898507</a>.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-md border border-border">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Bank Transfer (NEFT/RTGS/IMPS)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p>For larger contributions or if you prefer traditional banking methods, you can make a direct bank transfer using the details below:</p>
              <p><strong>Bank Name:</strong> Jana Bank</p>
              <p><strong>Account Name:</strong> Nav Kalyan Sanstha</p>
              <p><strong>Account Number:</strong> 50100XXXXXXX</p>
              <p><strong>IFSC Code:</strong> JANA0000XXX</p>
              <p><strong>Account Type:</strong> Savings</p>
              <p className="text-sm text-muted-foreground">
                Once your bank transfer is complete, please share a screenshot or transaction reference number with us on WhatsApp at <a href="https://wa.me/919118898507" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">+919118898507</a>. This is crucial for us to identify your donation and issue a proper acknowledgment.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 p-6 bg-blue-50/50 border-l-4 border-blue-500 rounded-md text-gray-800">
          <h3 className="text-lg font-semibold mb-2">Important Information Regarding Tax Exemption:</h3>
          <p className="mb-2">Nav Kalyan Sanstha Delhi is registered under Section 80G of the Indian Income Tax Act, which means your donations are eligible for tax exemption. To receive your 80G tax-exemption certificate, please ensure you provide the following details:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Your Full Name:</strong> As per your official records.</li>
            <li><strong>Your Complete Address:</strong> Including street, city, state, and pin code.</li>
            <li><strong>Your PAN (Permanent Account Number):</strong> This is mandatory for issuing the 80G certificate.</li>
          </ul>
          <p className="mt-3">Please share these details along with your payment confirmation via WhatsApp to <a href="https://wa.me/919118898507" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">+919118898507</a> or email us at <a href="mailto:donations@navkalyansansthadelhi.org" className="text-blue-500 hover:underline">donations@navkalyansansthadelhi.org</a>. We appreciate your cooperation in helping us comply with tax regulations and provide you with the necessary documentation.</p>
        </div>

        <div className="mt-8 text-center text-gray-700">
          <h3 className="text-lg font-semibold mb-2">For Donation Queries:</h3>
          <p>Should you have any questions or require assistance with your donation, please do not hesitate to contact us. You can call us directly at <a href="tel:+919118898507" className="text-blue-500 hover:underline">+919118898507</a> or send an email to <a href="mailto:donations@navkalyansansthadelhi.org" className="text-blue-500 hover:underline">donations@navkalyansansthadelhi.org</a>. Our team is ready to assist you.</p>
        </div>
      </section>
    </div>
  );
};

export default GeneralDonations;