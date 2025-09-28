import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">About Us</h1>

      <section className="mb-12 bg-background p-8 rounded-lg shadow-lg border border-border">
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground text-center">Our Story: The Spark of Service</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Nav Kalyan Sanstha began with a simple yet profound realization: food is not a privilege, it is a fundamental human right. In a bustling city like Delhi, we observed the silent struggle of countless children, daily wage earners, and vulnerable families who were deprived of this basic necessity. This stark reality ignited a deep calling within us to bridge the gap between those who wished to help and those who desperately needed it.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          We started as a small chapter of our parent organization in Haryana, driven by a team of dedicated women who wanted to transform their compassion into tangible action. Our initial efforts were humble, but our resolve was strong. We are not just an NGO; we are a platform, a conduit for kindness, built on the belief that every individual deserves to eat with dignity.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Today, we continue to grow, fueled by the unwavering support of our volunteers and donors. We cook with love, serve with respect, and firmly believe that every meal we provide is a significant step towards building a more equitable, compassionate, and caring society for all. Our journey is a testament to the power of collective action and heartfelt dedication. We invite you to be a part of this transformative movement.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            Our ultimate vision is to create a hunger-free Delhi, a city where every single individual, regardless of their socio-economic background, has consistent access to nutritious, wholesome food. We envision a community where everyone is treated with inherent dignity and profound respect, and where collective well-being is a shared responsibility. We strive for a society where compassion triumphs over scarcity, and where the basic human right to food is universally upheld.
          </CardContent>
        </Card>
        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            Our mission is to consistently prepare and distribute healthy, hygienic, and tasty home-cooked meals to underprivileged children and individuals residing in Delhi. We are deeply committed to maintaining a transparent, heartfelt, and easily accessible platform for our generous donors. This ensures they can contribute with confidence and directly witness the profound impact of their generosity on the lives of those we serve, fostering trust and accountability.
          </CardContent>
        </Card>
        <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">Our Values</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Compassion:</strong> Every action we undertake is profoundly driven by empathy, understanding, and a genuine, heartfelt desire to alleviate suffering and help those in need.</li>
              <li><strong>Respect:</strong> We are unwavering in our commitment to serve every individual with the utmost dignity, care, and consideration, recognizing their inherent worth and humanity.</li>
              <li><strong>Transparency:</strong> We ensure complete openness and accountability in all our operations, so our donors know exactly how their invaluable contributions are making a tangible and positive difference.</li>
              <li><strong>Community:</strong> We firmly believe in the collective power of people coming together, uniting their efforts for a greater good, and fostering a strong, supportive community where everyone feels valued.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <section className="bg-muted p-8 rounded-lg shadow-lg border border-border">
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground text-center">Our Leadership: Guiding with Vision and Dedication</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Nav Kalyan Sanstha Delhi is proudly guided by a dedicated and passionate leadership team, committed to steering our mission with integrity and vision. Our leaders inspire and mobilize our volunteers, ensuring that our efforts are impactful and reach those who need it most. Their unwavering commitment is the cornerstone of our success and the driving force behind our community initiatives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="flex flex-col items-center text-center">
            <img src="/images/cake-cutting-children.jpg" alt="Ms. Seema Arya" className="w-32 h-32 rounded-full object-cover mb-4 shadow-md border-2 border-accent" />
            <h3 className="text-xl font-bold text-primary">Ms. Seema Arya</h3>
            <p className="text-lg text-gray-700">General Secretary</p>
            <p className="text-sm text-muted-foreground mt-2">A visionary leader whose profound compassion, strategic insight, and tireless dedication are the driving force behind our organization's success and continuous growth.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="/images/birthday-girl-srishti.jpg" alt="Ms. Shreyshi Arya" className="w-32 h-32 rounded-full object-cover mb-4 shadow-md border-2 border-accent" />
            <h3 className="text-xl font-bold text-primary">Ms. Shreyshi Arya</h3>
            <p className="text-lg text-gray-700">Deputy General Secretary</p>
            <p className="text-sm text-muted-foreground mt-2">Instrumental in operationalizing our mission, she brings fresh perspectives, innovative ideas, and tireless energy to our initiatives, ensuring efficient and effective outreach.</p>
          </div>
          <div className="md:col-span-2 text-center mt-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              And a powerful team of countless helping hands – Our volunteers are the true heart and soul of our organization. Their selfless efforts on the ground, from meal preparation to distribution, make our mission a reality every single day, embodying the spirit of community service.
            </p>
          </div>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed mt-8 text-center">
          Together, this team works tirelessly to ensure that Nav Kalyan Sanstha Delhi continues to be a beacon of hope and service in the community, transforming lives one meal and one act of kindness at a time. We are deeply grateful for their leadership and the collective spirit that propels our mission forward.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;