import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">About Us</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground">Our Story: The Spark of Service</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Nav Kalyan Sanstha began with a simple yet profound realization: food is not a privilege, it is a fundamental human right. In a bustling city like Delhi, we observed the silent struggle of countless children, daily wage earners, and vulnerable families who were deprived of this basic necessity. This stark reality ignited a deep calling within us to bridge the gap between those who wished to help and those who desperately needed it.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We started as a small chapter of our parent organization in Haryana, driven by a team of dedicated women who wanted to transform their compassion into tangible action. Our initial efforts were humble, but our resolve was strong. We are not just an NGO; we are a platform, a conduit for kindness, built on the belief that every individual deserves to eat with dignity.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Today, we continue to grow, fueled by the unwavering support of our volunteers and donors. We cook with love, serve with respect, and firmly believe that every meal we provide is a significant step towards building a more equitable, compassionate, and caring society for all. Our journey is a testament to the power of collective action and heartfelt dedication.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            Our ultimate vision is to create a hunger-free Delhi, a city where every single individual, regardless of their socio-economic background, has consistent access to nutritious, wholesome food. We envision a community where everyone is treated with inherent dignity and profound respect, and where collective well-being is a shared responsibility. We strive for a society where compassion triumphs over scarcity.
          </CardContent>
        </Card>
        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            Our mission is to consistently prepare and distribute healthy, hygienic, and tasty home-cooked meals to underprivileged children and individuals residing in Delhi. We are deeply committed to maintaining a transparent, heartfelt, and easily accessible platform for our generous donors. This ensures they can contribute with confidence and directly witness the profound impact of their generosity on the lives of those we serve.
          </CardContent>
        </Card>
        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Our Values</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Compassion:</strong> Every action we undertake is profoundly driven by empathy, understanding, and a genuine, heartfelt desire to alleviate suffering and help those in need.</li>
              <li><strong>Respect:</strong> We are unwavering in our commitment to serve every individual with the utmost dignity, care, and consideration, recognizing their inherent worth.</li>
              <li><strong>Transparency:</strong> We ensure complete openness and accountability, so our donors know exactly how their invaluable contributions are making a tangible and positive difference.</li>
              <li><strong>Community:</strong> We firmly believe in the collective power of people coming together, uniting their efforts for a greater good, and fostering a strong, supportive community.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section>
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground">Our Leadership</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Nav Kalyan Sanstha Delhi is proudly guided by a dedicated and passionate leadership team, committed to steering our mission with integrity and vision. Our leaders inspire and mobilize our volunteers, ensuring that our efforts are impactful and reach those who need it most.
        </p>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          <li><strong>General Secretary:</strong> Ms. Seema Arya – A visionary leader whose compassion and dedication are the driving force behind our organization's success and growth.</li>
          <li><strong>Deputy General Secretaries:</strong> Ms. Shreyshi Arya & Ms. Srishti Arya – Instrumental in operationalizing our mission, bringing fresh perspectives and tireless energy to our initiatives.</li>
          <li>And a powerful team of countless helping hands – Our volunteers are the true heart and soul of our organization, whose selfless efforts on the ground make our mission a reality every single day.</li>
        </ul>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Together, this team works tirelessly to ensure that Nav Kalyan Sanstha Delhi continues to be a beacon of hope and service in the community, transforming lives one meal and one act of kindness at a time.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;