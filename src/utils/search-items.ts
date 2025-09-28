interface SearchItem {
  label: string; // Display text
  value: string; // Unique value for CommandItem
  path: string; // React Router path
  anchor?: string; // Optional anchor ID for internal page navigation
}

export const searchItems: SearchItem[] = [
  // Main Navigation Pages
  { label: 'Home', value: 'home', path: '/' },
  { label: 'About Us', value: 'about-us', path: '/about-us' },
  { label: 'What We Do', value: 'what-we-do', path: '/what-we-do' },
  { label: 'Donate Food', value: 'donate-food', path: '/donate-food' },
  { label: 'General Donations', value: 'general-donations', path: '/general-donations' },
  { label: 'FAQs', value: 'faqs', path: '/faqs' },
  { label: 'Gallery', value: 'gallery', path: '/gallery' },
  { label: 'Contact Us', value: 'contact-us', path: '/contact-us' },
  { label: 'Privacy Policy', value: 'privacy-policy', path: '/privacy-policy' },
  { label: 'Terms & Conditions', value: 'terms-and-conditions', path: '/terms-and-conditions' },

  // Home Page Sections
  { label: 'Home: Who We Are', value: 'home-who-we-are', path: '/', anchor: 'who-we-are' },
  { label: 'Home: Our Vision & Mission', value: 'home-our-vision-mission', path: '/', anchor: 'our-vision-mission' },
  { label: 'Home: Our Initiatives', value: 'home-our-initiatives', path: '/', anchor: 'our-initiatives' },
  { label: 'Home: Weekly Food Distribution', value: 'home-weekly-food-distribution', path: '/', anchor: 'weekly-food-distribution-home' },
  { label: 'Home: Celebrate with Us', value: 'home-celebrate-with-us', path: '/', anchor: 'celebrate-with-us-home' },
  { label: 'Home: Gau Seva & Custom Donations', value: 'home-gau-seva-custom-donations', path: '/', anchor: 'gau-seva-custom-donations-home' },
  { label: 'Home: How You Can Help', value: 'home-how-you-can-help', path: '/', anchor: 'how-you-can-help' },
  { label: 'Home: Donate Meals', value: 'home-donate-meals', path: '/', anchor: 'donate-meals-home' },
  { label: 'Home: Volunteer Your Time', value: 'home-volunteer-time', path: '/', anchor: 'volunteer-your-time-home' },
  { label: 'Home: Celebrate with Purpose', value: 'home-celebrate-purpose', path: '/', anchor: 'celebrate-with-purpose-home' },
  { label: 'Home: Moments of Impact', value: 'home-moments-of-impact', path: '/', anchor: 'moments-of-impact' },
  { label: 'Home: Quick FAQs', value: 'home-quick-faqs', path: '/', anchor: 'quick-faqs-home' },
  { label: 'Home: Direct Contact', value: 'home-direct-contact', path: '/', anchor: 'direct-contact-home' },

  // About Us Page Sections
  { label: 'About Us: Our Story', value: 'about-us-story', path: '/about-us', anchor: 'our-story' },
  { label: 'About Us: Our Vision', value: 'about-us-vision', path: '/about-us', anchor: 'our-vision' },
  { label: 'About Us: Our Mission', value: 'about-us-mission', path: '/about-us', anchor: 'our-mission' },
  { label: 'About Us: Our Values', value: 'about-us-values', path: '/about-us', anchor: 'our-values' },
  { label: 'About Us: Our Leadership', value: 'about-us-leadership', path: '/about-us', anchor: 'our-leadership' },

  // What We Do Page Sections
  { label: 'What We Do: Core Initiative', value: 'what-we-do-core-initiative', path: '/what-we-do', anchor: 'core-initiative' },
  { label: 'What We Do: Program Details', value: 'what-we-do-program-details', path: '/what-we-do', anchor: 'program-details' },
  { label: 'What We Do: Special Initiatives', value: 'what-we-do-special-initiatives', path: '/what-we-do', anchor: 'special-initiatives' },
  { label: 'What We Do: Celebrate Your Special Day', value: 'what-we-do-celebrate-day', path: '/what-we-do', anchor: 'celebrate-your-special-day' },
  { label: 'What We Do: Gau Seva', value: 'what-we-do-gau-seva', path: '/what-we-do', anchor: 'gau-seva' },
  { label: 'What We Do: Custom Donation Requests', value: 'what-we-do-custom-donations', path: '/what-we-do', anchor: 'custom-donation-requests' },

  // Donate Food Page Sections
  { label: 'Donate Food: Power of Nav Seva', value: 'donate-food-power', path: '/donate-food', anchor: 'power-of-nav-seva' },
  { label: 'Donate Food: Complete Your Donation', value: 'donate-food-complete', path: '/donate-food', anchor: 'complete-your-donation' },
  { label: 'Donate Food: UPI Payment', value: 'donate-food-upi', path: '/donate-food', anchor: 'upi-payment' },
  { label: 'Donate Food: Bank Transfer', value: 'donate-food-bank', path: '/donate-food', anchor: 'bank-transfer' },
  { label: 'Donate Food: Donation Confirmation', value: 'donate-food-confirmation', path: '/donate-food', anchor: 'donation-confirmation' },
  { label: 'Donate Food: Dedicate Your Donation', value: 'donate-food-dedicate', path: '/donate-food', anchor: 'dedicate-your-donation' },
  { label: 'Donate Food: Donation Queries', value: 'donate-food-queries', path: '/donate-food', anchor: 'donation-queries' },

  // General Donations Page Sections
  { label: 'General Donations: Our Impact', value: 'general-donations-impact', path: '/general-donations', anchor: 'our-impact' },
  { label: 'General Donations: Birthday Celebrations', value: 'general-donations-birthday', path: '/general-donations', anchor: 'birthday-celebrations' },
  { label: 'General Donations: Awaiting Our Arrival', value: 'general-donations-awaiting', path: '/general-donations', anchor: 'awaiting-our-arrival' },
  { label: 'General Donations: Donations in Temples', value: 'general-donations-temples', path: '/general-donations', anchor: 'donations-in-temples' },
  { label: 'General Donations: Milestones & Self-Donations', value: 'general-donations-milestones', path: '/general-donations', anchor: 'milestones-self-donations' },
  { label: 'General Donations: Tax Exemption Info', value: 'general-donations-tax-info', path: '/general-donations', anchor: 'tax-exemption-info' },
  { label: 'General Donations: Donation Queries', value: 'general-donations-queries', path: '/general-donations', anchor: 'general-donation-queries' },

  // FAQs Page Sections (linking to the page, individual FAQs are dynamic)
  { label: 'FAQs: All Questions', value: 'faqs-all', path: '/faqs' },
  // Individual FAQs can be linked by their generated IDs if needed, e.g., faq-0, faq-1 etc.

  // Contact Us Page Sections
  { label: 'Contact Us: Office Address', value: 'contact-us-address', path: '/contact-us', anchor: 'our-office-address' },
  { label: 'Contact Us: Phone & WhatsApp', value: 'contact-us-phone', path: '/contact-us', anchor: 'phone-whatsapp' },
  { label: 'Contact Us: Email Us', value: 'contact-us-email', path: '/contact-us', anchor: 'email-us' },
  { label: 'Contact Us: Connect Online', value: 'contact-us-connect', path: '/contact-us', anchor: 'connect-online' },
  { label: 'Contact Us: Our Location on Map', value: 'contact-us-map', path: '/contact-us', anchor: 'our-location-map' },
  { label: 'Contact Us: Hours of Operation', value: 'contact-us-hours', path: '/contact-us', anchor: 'hours-of-operation' },

  // Privacy Policy Sections
  { label: 'Privacy Policy: Information We Collect', value: 'privacy-info-collect', path: '/privacy-policy', anchor: 'information-we-collect' },
  { label: 'Privacy Policy: How We Use Your Information', value: 'privacy-info-use', path: '/privacy-policy', anchor: 'how-we-use-your-information' },
  { label: 'Privacy Policy: Data Security', value: 'privacy-data-security', path: '/privacy-policy', anchor: 'data-security' },
  { label: 'Privacy Policy: Sharing Your Information', value: 'privacy-info-sharing', path: '/privacy-policy', anchor: 'sharing-your-information' },
  { label: 'Privacy Policy: Your Consent', value: 'privacy-your-consent', path: '/privacy-policy', anchor: 'your-consent' },

  // Terms and Conditions Sections
  { label: 'Terms & Conditions: Donation Policy', value: 'terms-donation-policy', path: '/terms-and-conditions', anchor: 'donation-policy' },
  { label: 'Terms & Conditions: Intellectual Property', value: 'terms-intellectual-property', path: '/terms-and-conditions', anchor: 'intellectual-property' },
  { label: 'Terms & Conditions: User Conduct', value: 'terms-user-conduct', path: '/terms-and-conditions', anchor: 'user-conduct' },
  { label: 'Terms & Conditions: Limitation of Liability', value: 'terms-limitation-liability', path: '/terms-and-conditions', anchor: 'limitation-of-liability' },
  { label: 'Terms & Conditions: Governing Law', value: 'terms-governing-law', path: '/terms-and-conditions', anchor: 'governing-law' },
];