import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6 prose max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary" id="privacy-policy-page">Privacy Policy</h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        At Nav Kalyan Sanstha Delhi, we are deeply committed to protecting the privacy and personal information of our valued donors, dedicated volunteers, and all visitors to our website. This Privacy Policy outlines in detail how we collect, utilize, safeguard, and manage your personal data, ensuring transparency and trust in all our interactions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground" id="information-we-collect">Information We Collect:</h2>
      <p className="text-lg text-gray-700 mb-4">
        We collect various types of information to facilitate our operations and enhance your experience with Nav Kalyan Sanstha Delhi. This includes:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
        <li><strong>Personal Identification Information:</strong> This encompasses details such as your full name, email address, contact phone number, and complete postal address. This information is primarily collected when you choose to make a donation, express interest in volunteering, or directly contact us for inquiries or support.</li>
        <li><strong>Payment Information:</strong> When you make a donation, we collect details related to your UPI transactions or bank transfers. It is crucial to note that we do not store sensitive financial details, such as credit card numbers or bank account passwords, directly on our servers. All payment transactions are securely processed through trusted and encrypted payment gateways, ensuring the highest level of security for your financial data.</li>
        <li><strong>Communication Data:</strong> We maintain records of your correspondence with us, which may include emails, messages, and phone call summaries. This helps us to provide consistent support, address your queries effectively, and improve our communication channels.</li>
        <li><strong>Website Usage Data:</strong> We may collect non-personally identifiable information about how you interact with our website, such as pages visited, time spent on site, and referral sources. This data is used in an aggregated and anonymized form to help us understand user behavior and improve our website's functionality and content.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground" id="how-we-use-your-information">How We Use Your Information:</h2>
      <p className="text-lg text-gray-700 mb-4">
        The information we collect is utilized for several key purposes, all aimed at fulfilling our mission and serving our community effectively:
      </p>
      <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
        <li>To efficiently process and acknowledge your generous donations, ensuring proper record-keeping and gratitude.</li>
        <li>To communicate with you effectively regarding our ongoing activities, important updates, upcoming events, and the tangible impact of your support.</li>
        <li>To enhance and continually improve our website's user experience, functionality, and the overall quality of our services.</li>
        <li>To comply with all applicable legal obligations, regulatory requirements, and governmental requests, ensuring our operations are fully compliant.</li>
        <li>To manage and coordinate volunteer activities, ensuring smooth operations and effective deployment of our dedicated helping hands.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground" id="data-security">Data Security:</h2>
      <p className="text-lg text-gray-700 mb-4">
        The security of your personal data is of paramount importance to us. We implement a robust array of appropriate technical and organizational measures designed to protect your personal information from unauthorized access, accidental loss, alteration, disclosure, or destruction. Our security protocols are regularly reviewed and updated to ensure the highest level of data protection.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground" id="sharing-your-information">Sharing Your Information:</h2>
      <p className="text-lg text-gray-700 mb-4">
        Nav Kalyan Sanstha Delhi maintains a strict policy regarding the sharing of your personal information. We do not, under any circumstances, sell, trade, or rent your personal identification information to third parties for marketing or any other commercial purposes. We may only share information if it is explicitly required by law, such as in response to a court order or legal process, or when it is necessary to protect our rights, property, or safety, or the rights, property, or safety of others. Any such sharing will be done with the utmost care and in compliance with legal standards.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-secondary-foreground" id="your-consent">Your Consent:</h2>
      <p className="text-lg text-gray-700 mb-4">
        By utilizing our website or by voluntarily providing us with your personal information, you explicitly consent to our collection, use, and protection of your information as meticulously described in this comprehensive Privacy Policy. We encourage you to read this policy carefully and contact us if you have any questions or concerns regarding your data privacy.
      </p>
    </div>
  );
};

export default PrivacyPolicy;