import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Nav Kalyan Sanstha Delhi and what is its primary mission?',
    answer: 'Nav Kalyan Sanstha Delhi is a dedicated non-profit, women-led organization committed to humanitarian service. Our primary mission is to alleviate hunger by consistently preparing and distributing healthy, hygienic, and home-cooked food packages to underprivileged children, daily wage earners, and vulnerable individuals across various locations in Delhi. We believe that access to nutritious food is a fundamental human right, and we strive to uphold this principle with every meal we serve.',
  },
  {
    question: 'How can I contribute to your food distribution program?',
    answer: 'You can make a significant impact by donating a food package for just ₹21. We accept donations via UPI to our dedicated ID: 9958349220@ibl. For larger contributions or if you prefer alternative methods, we also accept bank transfers. Detailed information on all donation methods, including our bank account details and UPI QR code, can be found on our "Donate Food" page. Your contribution directly translates into a warm meal for someone in need.',
  },
  {
    question: 'When do you conduct your food distribution drives?',
    answer: 'Our food distribution drives are a consistent and integral part of our weekly operations. We regularly hold these drives every Tuesday and Saturday. This fixed schedule ensures that the communities we serve can rely on our support, providing a predictable source of nourishment and hope. We are committed to maintaining this regularity to maximize our impact.',
  },
  {
    question: 'What kind of food do you distribute, and what are your quality standards?',
    answer: 'We are deeply committed to providing only the highest quality meals. We distribute healthy, hygienic, home-cooked, and delicious meal packages. Each meal is prepared with the utmost care, love, and profound respect for the recipients. We strictly adhere to food safety standards and focus on distributing fresh, ready-to-eat food. We do not distribute dry rations; our emphasis is always on providing wholesome, freshly prepared meals.',
  },
  {
    question: 'Are donations to Nav Kalyan Sanstha Delhi eligible for tax exemption?',
    answer: 'Nav Kalyan Sanstha Delhi is officially registered under Section 80G of the Indian Income Tax Act. This means that all monetary donations made to our organization are eligible for tax exemption. Please contact us for more details on how to receive your tax exemption certificate.',
  },
  {
    question: 'Can I celebrate my birthday or other special occasions with your organization?',
    answer: 'Yes, we warmly welcome you to celebrate your special moments with us! For a modest contribution of ₹500-₹600, we can arrange for a heartwarming cake cutting ceremony and meal sharing event with the underprivileged children we serve. This unique opportunity allows you to transform your personal milestones into acts of profound kindness and create unforgettable memories of joy and giving. Please contact us in advance to coordinate the arrangements for your celebration.',
  },
  {
    question: 'How do I confirm my donation, and what details should I provide?',
    answer: 'To help us accurately track your generous contribution and send you a timely confirmation, we kindly request you to share a screenshot of your payment confirmation via WhatsApp to +919958349220. This ensures proper record-keeping and acknowledgment of your support.',
  },
  {
    question: 'Who are the key individuals leading Nav Kalyan Sanstha Delhi?',
    answer: 'Our organization is proudly run by a dedicated and passionate team of women volunteers. The leadership includes our esteemed General Secretary, Ms. Seema Arya, and our dynamic Deputy General Secretaries, Ms. Shreyshi Arya and Ms. Srishti Arya. Beyond the core leadership, we are powered by a vast network of countless helping hands—our selfless volunteers—who are the true heart and soul of our organization, making our mission a reality every single day.',
  },
  {
    question: 'How can I volunteer my time and services with Nav Kalyan Sanstha Delhi?',
    answer: 'We are always eager to welcome new helping hands and passionate individuals to our team! If you are interested in volunteering your time and services, please do not hesitate to contact us directly via phone or email at navkalyansansthadelhi@gmail.com. We will be delighted to guide you through the volunteering process, discuss available opportunities, and help you find a meaningful way to contribute to our mission. Your dedication can make a significant difference.',
  },
  {
    question: 'What other initiatives does Nav Kalyan Sanstha Delhi undertake?',
    answer: 'Beyond our core food distribution program, we engage in several special initiatives to promote holistic welfare. These include our revered Gau Seva (cow feeding) program, where we facilitate donations for providing fodder and care for gentle animals. We also welcome custom donation requests, allowing individuals to contribute in unique ways or support specific needs within the community. Our aim is to spread kindness and support in various forms.',
  },
];

const FAQs = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">Frequently Asked Questions</h1>
      <p className="text-lg text-center text-gray-700 max-w-3xl mx-auto mb-8">
        Here you'll find answers to the most common questions about Nav Kalyan Sanstha Delhi, our mission, how we operate, and how you can get involved. If you don't find what you're looking for, please feel free to contact us directly.
      </p>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
              <AccordionTrigger className="text-lg font-semibold text-secondary-foreground hover:no-underline text-left py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-base leading-relaxed pb-4">
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