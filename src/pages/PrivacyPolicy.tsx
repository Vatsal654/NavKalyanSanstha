import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 prose dark:prose-invert max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary dark:text-primary-foreground">Privacy Policy</h1>

      <p>Nav Kalyan Sanstha Delhi (hereinafter "the NGO") is committed to protecting the privacy of its donors, volunteers, and website visitors. This Privacy Policy outlines how we collect, use, and protect your personal information.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground dark:text-secondary">Information We Collect:</h2>
      <ul>
        <li><strong>Personal Identification Information:</strong> Name, email address, phone number, address, and PAN number provided when you donate, volunteer, or contact us.</li>
        <li><strong>Payment Information:</strong> Details related to UPI or bank transfers for donations. We do not store sensitive financial details directly on our servers. All transactions are processed through secure payment gateways.</li>
        <li><strong>Communication Data:</strong> Records of your correspondence with us.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground dark:text-secondary">How We Use Your Information:</h2>
      <ul>
        <li>To process and acknowledge your donations.</li>
        <li>To communicate with you regarding our activities, updates, and impact.</li>
        <li>To send you 80G tax-exemption receipts.</li>
        <li>To improve our website and services.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground dark:text-secondary">Data Security:</h2>
      <p>We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground dark:text-secondary">Sharing Your Information:</h2>
      <p>We do not sell, trade, or rent your personal identification information to others. We may share information if required by law or to protect our rights.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground dark:text-secondary">Consent:</h2>
      <p>By using our website or providing us with your information, you consent to our collection and use of your information as described in this Privacy Policy.</p>
    </div>
  );
};

export default PrivacyPolicy;