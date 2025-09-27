import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Nav Kalyan Sanstha Delhi?',
    answer: 'Nav Kalyan Sanstha Delhi is a non-profit, women-led organization dedicated to distributing healthy, home-cooked food packages to needy children and individuals in Delhi.',
  },
  {
    question: 'How can I donate food packages?',
    answer: 'You can donate a food package for just ₹21/- via UPI to nav.kalyan.sanstha@upi. We also accept bank transfers for larger contributions. You can find more details on our Donate Food page.',
  },
  {
    question: 'When do you distribute food?',
    answer: 'Food distribution drives are held every Tuesday and Saturday each week.',
  },
  {
    question: 'What kind of food do you distribute?',
    answer: 'We distribute healthy, hygienic, home-cooked, and tasty meal packages, prepared and served with pure love and respect. We do not distribute dry rations.',
  },
  {
    question: 'Can I get a tax deduction for my donation?',
    answer: 'Yes, donations to Nav Kalyan Sanstha Delhi are eligible for tax exemption under Section 80G of the Income Tax Act. Please provide your full name, address, and PAN number when donating to receive your 80G certificate.',
  },
  {
    question: 'Can I celebrate my birthday with you?',
    answer: 'Yes! For a contribution of ₹500-₹600, we can arrange for a cake cutting and celebration with the children we serve. Please contact us to coordinate.',
  },
  {
    question: 'How do you confirm my donation?',
    answer: 'We kindly request you share a screenshot of your payment confirmation via WhatsApp to +919118898507. This helps us track your donation and acknowledge your support.',
  },
  {
    question: 'Who runs the organization?',
    answer: 'Our organization is run by a dedicated team of women volunteers, led by our General Secretary Ms. Seema Arya, and Deputy General Secretaries Ms. Shreyshi Arya and Ms. Srishti Arya.',
  },
  {
    question: 'How can I volunteer?',
    answer: 'We always welcome helping hands! Please contact us via phone or email to express your interest in volunteering, and we\'ll guide you through the process.',
  },
];

const FAQs = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary dark:text-primary-foreground">Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-secondary-foreground dark:text-secondary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQs;