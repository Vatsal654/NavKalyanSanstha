import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HandHeart, UtensilsCrossed, GalleryHorizontal, MessageSquareText, Users, IndianRupee, HeartHandshake, PiggyBank, CalendarDays, MapPin, Phone, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center text-center text-white overflow-hidden py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-200" // Fallback bg
          style={{ backgroundImage: 'url(/images/hero-background.webp)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/40"></div>
        </div>
        <div className="relative z-10 p-4 md:p-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg">A Meal of Hope. A Gesture of Love.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow">
            Welcome to Nav Kalyan Sanstha Delhi. We are a non-profit, women-led initiative dedicated to serving fresh, home-cooked meals to those in need. For just ₹21, you can provide a nutritious meal and be a part of our mission to ensure no one in our community goes hungry. Our commitment extends beyond just food; it's about fostering dignity, community, and hope.
          </p>
          <p className="text-2xl md:text-3xl font-semibold mb-10 text-accent drop-shadow">Our Slogan: Donate. Impact. Change.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-4xl font-bold text-accent mb-2">3000+</h3>
              <p className="text-lg">Meals Served and Counting</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-4xl font-bold text-accent mb-2">100%</h3>
              <p className="text-lg">Volunteer Driven</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-4xl font-bold text-accent mb-2">₹21</h3>
              <p className="text-lg">Provides One Hygienic, Home-Cooked Meal</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-7 text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to="/donate-food">Donate a Meal Now (₹21)</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-7 text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to="/about-us">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Navigation / Call to Action Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore Our Mission</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Navigate through our key initiatives and learn how you can become a part of our journey to create a hunger-free Delhi. Each section provides a deeper insight into our work and the various ways you can contribute.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card text-card-foreground shadow-xl transition-transform duration-300 hover:scale-105 border border-border">
              <CardHeader className="flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="text-xl font-semibold">About Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Discover our inspiring journey, our unwavering vision for a better society, and meet the dedicated team behind Nav Kalyan Sanstha.</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/about-us">Our Story</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-xl transition-transform duration-300 hover:scale-105 border border-border">
              <CardHeader className="flex flex-col items-center text-center">
                <UtensilsCrossed className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="text-xl font-semibold">What We Do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Learn about our impactful weekly food drives, special initiatives like Gau Seva, and how we bring hope to the community.</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/what-we-do">Our Programs</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-xl transition-transform duration-300 hover:scale-105 border border-border">
              <CardHeader className="flex flex-col items-center text-center">
                <IndianRupee className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="text-xl font-semibold">Donate Food</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Contribute a nutritious meal for just ₹21 and make a direct, tangible impact on someone's life today.</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/donate-food">Donate Now</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-xl transition-transform duration-300 hover:scale-105 border border-border">
              <CardHeader className="flex flex-col items-center text-center">
                <GalleryHorizontal className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="text-xl font-semibold">Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Browse heartwarming moments from our food distribution drives and special events, showcasing our impact.</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/gallery">View Photos</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-16 bg-secondary text-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Who We Are: Our Story</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Nav Kalyan Sanstha Delhi began with a simple yet profound realization: food is not a privilege, it is a fundamental human right. We are a non-profit, women-led organization dedicated to serving fresh, home-cooked meals to those in need, bridging the gap between compassion and action. Our journey started with a small group of dedicated women, and has grown into a community-driven movement that believes in the power of collective kindness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Our Vision & Mission</h3>
              <p className="text-gray-700 mb-4">
                Our vision is to create a hunger-free Delhi where every individual has access to nutritious food and is treated with dignity and respect. We envision a community that stands together, ensuring the well-being of its most vulnerable members. Our mission is to consistently prepare and distribute healthy, hygienic, and tasty home-cooked meals to underprivileged children and individuals in Delhi. We are committed to maintaining a transparent, heartfelt, and accessible platform for donors to contribute and witness the direct impact of their generosity.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md transition-colors duration-300">
                <Link to="/about-us">Read More About Us</Link>
              </Button>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-xl min-h-[200px] bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1593113630400-f711629579a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Volunteers serving food"
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Snippet */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">Our Initiatives: Beyond Meals</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10">
            Beyond our regular food distribution, we organize special programs that allow our community to engage in unique acts of kindness and celebrate life's moments with those less fortunate. Each initiative is a step towards a more compassionate society, fostering hope and well-being for all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card text-card-foreground shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
              <CardHeader className="flex flex-col items-center text-center">
                <HandHeart className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Weekly Food Distribution</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">Our core program involves the consistent distribution of hundreds of healthy, home-cooked meals. Every Tuesday and Saturday, our dedicated volunteers reach out to underprivileged children and individuals across various locations in Delhi, ensuring that no one in our community goes hungry. This program is the heartbeat of our mission, providing essential nourishment and a message of hope.</p>
                <ul className="list-disc list-inside text-left pl-4 space-y-1 text-sm">
                  <li><strong>Impact:</strong> Providing consistent nourishment and hope to vulnerable communities.</li>
                  <li><strong>Frequency:</strong> Food distribution drives are held reliably every Tuesday and Saturday.</li>
                  <li><strong>Cost:</strong> Each nutritious, freshly prepared meal costs just ₹21.</li>
                  <li><strong>Quality:</strong> We ensure all meals are hygienic, home-cooked, and served with dignity.</li>
                </ul>
                <Button asChild variant="link" className="mt-4 text-accent hover:text-accent/90">
                  <Link to="/what-we-do">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
              <CardHeader className="flex flex-col items-center text-center">
                <UtensilsCrossed className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Celebrate with Us</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">Make your special occasions—be it birthdays, anniversaries, or significant milestones—truly unforgettable by sharing your joy. For a modest contribution of ₹500-₹600, we can arrange for a cake cutting and celebration with the children we serve. This unique initiative creates heartwarming moments of happiness and allows you to give back in a deeply personal way.</p>
                <ul className="list-disc list-inside text-left pl-4 space-y-1 text-sm">
                  <li><strong>Occasions:</strong> Ideal for Birthdays, Anniversaries, Graduations, or any personal milestone.</li>
                  <li><strong>Activity:</strong> Includes a joyful cake cutting ceremony and sharing meals with children.</li>
                  <li><strong>Contribution:</strong> A small contribution of ₹500-₹600 helps cover the costs of the celebration.</li>
                  <li><strong>Memories:</strong> Create lasting, meaningful memories by spreading happiness.</li>
                </ul>
                <Button asChild variant="link" className="mt-4 text-accent hover:text-accent/90">
                  <Link to="/what-we-do">Discover More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
              <CardHeader className="flex flex-col items-center text-center">
                <PiggyBank className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Gau Seva & Custom Donations</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">Extend your kindness to all living beings through our revered Gau Seva (cow feeding) program. We facilitate donations specifically for providing nutritious fodder and essential care for these gentle animals, reflecting our broader commitment to compassion and welfare. Additionally, if you have a unique act of charity in mind or wish to make a custom donation for specific needs, we are open to discussing and facilitating your generous contributions.</p>
                <ul className="list-disc list-inside text-left pl-4 space-y-1 text-sm">
                  <li><strong>Gau Seva:</strong> Support the feeding and care of cows, a sacred act of kindness.</li>
                  <li><strong>Custom Donations:</strong> Tailor your contribution to specific needs or projects you care about.</li>
                  <li><strong>Flexibility:</strong> Contact us to discuss unique acts of charity and how we can help facilitate them.</li>
                  <li><strong>Holistic Welfare:</strong> Our commitment extends to the well-being of all creatures.</li>
                </ul>
                <Button asChild variant="link" className="mt-4 text-accent hover:text-accent/90">
                  <Link to="/what-we-do">Explore Options</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="py-16 bg-secondary text-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">How You Can Help</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Your support is the backbone of our mission, enabling us to reach more individuals and make a lasting impact. Here are a few profound ways you can contribute to a brighter future for our community. Every gesture of kindness, big or small, fuels our efforts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
              <CardHeader className="flex flex-col items-center text-center">
                <IndianRupee className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Donate Meals</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">Provide a nutritious, home-cooked meal for just ₹21. Every donation directly feeds someone in need and brings a smile to their face, offering essential sustenance and hope. Your contribution ensures a warm meal reaches those who need it most.</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md transition-colors duration-300 mt-4">
                  <Link to="/donate-food">Donate Now</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
              <CardHeader className="flex flex-col items-center text-center">
                <HeartHandshake className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Volunteer Your Time</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">Join our dedicated team of volunteers and become a helping hand. Your time and effort are invaluable in preparing and distributing meals, connecting with the community, and making a tangible difference on the ground. We welcome passionate individuals to join our cause.</p>
                <Button asChild variant="link" className="mt-4 text-accent hover:text-accent/90">
                  <Link to="/contact-us">Become a Volunteer</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
              <CardHeader className="flex flex-col items-center text-center">
                <CalendarDays className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Celebrate with Purpose</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">Mark your special occasions by sharing joy with underprivileged children. A unique and heartwarming way to celebrate your milestones—be it birthdays, anniversaries, or achievements—by giving back to the community and creating smiles!</p>
                <Button asChild variant="link" className="mt-4 text-accent hover:text-accent/90">
                  <Link to="/what-we-do">Plan Your Celebration</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Snippet */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary">Moments of Impact</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Witness the smiles your generosity creates and the profound impact of our collective efforts. Our gallery captures heartwarming moments from our food distribution drives, special events, and community interactions, showcasing the real difference your support makes in countless lives.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group min-h-[150px] bg-gray-200">
              <img src="/images/gallery-1.jpg" alt="Child receiving food" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group min-h-[150px] bg-gray-200">
              <img src="/images/gallery-2.jpg" alt="Child reaching for food" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group min-h-[150px] bg-gray-200">
              <img src="/images/gallery-3.jpg" alt="Food package being handed over" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group min-h-[150px] bg-gray-200">
              <img src="/images/gallery-4.jpg" alt="Another food package being handed over" className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">View</span>
              </div>
            </div>
          </div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </section>

      {/* Contact Us Snippet */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">Get In Touch</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Have questions, want to volunteer, or collaborate? We'd love to hear from you. Your engagement helps us grow and serve more effectively, strengthening our community bonds and extending our reach to those in need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            <div className="relative overflow-hidden rounded-lg shadow-xl col-span-full lg:col-span-2 min-h-[200px] bg-gray-200">
              <img
                src="https://images.unsplash.com/photo-1523240795601-830e02942357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="People collaborating"
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white text-xl font-semibold">Join Our Community</p>
            </div>
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
              <CardHeader className="flex flex-col items-center text-center">
                <MessageSquareText className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Quick FAQs</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">Find answers to common questions about our mission, donation processes, and operational details quickly and easily. Our comprehensive FAQ section is designed to provide clarity and assist you.</p>
                <Button asChild variant="link" className="mt-4 text-accent hover:text-accent/90">
                  <Link to="/faqs">View FAQs</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border">
              <CardHeader className="flex flex-col items-center text-center">
                <Phone className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                <p className="mb-4">Reach out to us directly via phone, email, or visit our office during working hours. We're here to help with any inquiries, discuss potential collaborations, or guide you through volunteer opportunities!</p>
                <Button asChild variant="link" className="mt-4 text-accent hover:text-accent/90">
                  <Link to="/contact-us">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;