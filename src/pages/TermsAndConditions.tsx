import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 prose dark:prose-invert max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary dark:text-primary-foreground">Terms & Conditions</h1>

      <p>Welcome to the Nav Kalyan Sanstha Delhi website. By accessing and using this website, you agree to comply with and be bound by the following terms and conditions.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground dark:text-secondary">Donation Policy:</h2>
      <ul>
        <li>All donations made to Nav Kalyan Sanstha Delhi are voluntary and non-refundable.</li>
        <li>We reserve the right to use donations at our discretion for our charitable purposes.</li>
        <li>For donations to be eligible for tax exemption under Section 80G of the Income Tax Act, donors must provide their full name, address, and PAN number.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground dark:text-secondary">Intellectual Property:</h2>
      <p>The content, features, and functionality on this website (including text, graphics, logos, images) are the exclusive property of Nav Kalyan Sanstha Delhi.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground dark:text-secondary">User Conduct:</h2>
      <p>You agree not to use the website for any unlawful purpose or in any way that might damage, disable, or impair the website's functionality.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground dark:text-secondary">Limitation of Liability:</h2>
      <p>In no event shall Nav Kalyan Sanstha Delhi, nor its directors or volunteers, be liable for any indirect, incidental, special, or consequential damages resulting from your use of the site or services.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground dark:text-secondary">Governing Law:</h2>
      <p>These Terms shall be governed and construed in accordance with the laws of India.</p>
    </div>
  );
};

export default TermsAndConditions;