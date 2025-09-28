import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HandHeart, UtensilsCrossed, GalleryHorizontal, MessageSquareText, Users, IndianRupee, HeartHandshake, PiggyBank, CalendarDays, Phone, Search, Utensils, X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog';
import BackgroundPattern from '@/components/BackgroundPattern';
import AnimatedNumber from '@/components/AnimatedNumber'; // Import the new component

const Home = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleImageClick = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const galleryImages = [
    { src: '/images/donation-receive-1.jpg', alt: 'Person receiving food packet' },
    { src: '/images/donation-receive-2.jpg', alt: 'Child receiving food packet' },
    { src: '/images/man-praying-money.jpg', alt: 'Man praying with money' },
    { src: '/images/birthday-girl-cake.jpg', alt: 'Girl with birthday hat and cake' },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative text-primary-foreground min-h-[80vh] flex flex-col items-center justify-center text-center overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0">
          <img src="/images/hero-background-child-2.jpg" alt="Child receiving food" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 p-4 md:p-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">A Meal of Hope. A Gesture of Love.</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Welcome to Nav Kalyan Sanstha Delhi. We are a non-profit, women-led initiative dedicated to serving fresh, home-cooked meals to those in need. For just ₹21, you can provide a nutritious meal and be a part of our mission to ensure no one in our community goes hungry. Our commitment extends beyond just food; it's about fostering dignity, community, and hope.
          </p>
          <p className="text-2xl md:text-3xl font-semibold mb-10 text-accent">Our Slogan: Donate. Impact. Change.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:bg-black/50 transition-all duration-300">
              <AnimatedNumber to={3000} suffix="+" className="text-4xl font-bold text-accent mb-2" />
              <p className="text-lg">Meals Served and Counting</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:bg-black/50 transition-all duration-300">
              <AnimatedNumber to={100} suffix="%" className="text-4xl font-bold text-accent mb-2" />
              <p className="text-lg">Volunteer Driven</p>
            </div>
            <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-white/20 hover:bg-black/50 transition-all duration-300">
              <AnimatedNumber to={21} prefix="₹" className="text-4xl font-bold text-accent mb-2" />
              <p className="text-lg">Provides One Hygienic, Home-Cooked Meal</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-7 text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to="/donate-food#donation-qr-section">Donate a Meal Now (₹21)</Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-7 text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <Link to="/about-us">Learn Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Navigation / Call to Action Section */}
      <section className="relative py-12 bg-primary text-primary-foreground">
        <BackgroundPattern Icon={HeartHandshake} size={200} opacity="opacity-[0.05]" position="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 -rotate-6" />
        <BackgroundPattern Icon={IndianRupee} size={180} opacity="opacity-[0.05]" position="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 rotate-6" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Explore Our Mission</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Dive deeper into the heart of Nav Kalyan Sanstha Delhi. Discover our core values, the impact we've made, and the various ways you can join us in creating a hunger-free community. Each section provides a deeper insight into our work and the various ways you can contribute.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card text-card-foreground shadow-xl transition-transform duration-300 hover:scale-105 border border-border h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="text-xl font-semibold">About Us</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-4">
                <p className="text-sm mb-4 text-wrap">Discover our inspiring journey, our unwavering vision for a better society, and meet the dedicated team behind Nav Kalyan Sanstha.</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-auto">
                  <Link to="/about-us">Our Story</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-xl transition-transform duration-300 hover:scale-105 border border-border h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <UtensilsCrossed className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="text-xl font-semibold">What We Do</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-4">
                <p className="text-sm mb-4 text-wrap">Learn about our impactful weekly food drives, special initiatives like Gau Seva, and how we bring hope to the community.</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-auto">
                  <Link to="/what-we-do">Our Programs</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-xl transition-transform duration-300 hover:scale-105 border border-border h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <IndianRupee className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="text-xl font-semibold">Donate Food</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-4">
                <p className="text-sm mb-4 text-wrap">Contribute a nutritious meal for just ₹21 and make a direct, tangible impact on someone's life today.</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-auto">
                  <Link to="/donate-food#donation-qr-section">Donate Now</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-xl transition-transform duration-300 hover:scale-105 border border-border h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <GalleryHorizontal className="h-10 w-10 text-accent mb-3" />
                <CardTitle className="text-xl font-semibold">Gallery</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between p-4">
                <p className="text-sm mb-4 text-wrap">Browse heartwarming moments from our food distribution drives and special events, showcasing our impact.</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground mt-auto">
                  <Link to="/gallery">View Photos</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="relative py-16 bg-secondary text-foreground">
        <BackgroundPattern Icon={Users} size={250} opacity="opacity-[0.03]" position="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
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
                src="/images/cake-feeding-children.jpg"
                alt="Volunteers serving food"
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Snippet */}
      <section className="relative py-16 bg-primary text-primary-foreground">
        <BackgroundPattern Icon={Utensils} size={280} opacity="opacity-[0.05]" position="absolute top-1/4 right-1/4 translate-x-1/2 -translate-y-1/2 -rotate-12" />
        <BackgroundPattern Icon={PiggyBank} size={220} opacity="opacity-[0.05]" position="absolute bottom-1/4 left-1/4 -translate-x-1/2 translate-y-1/2 rotate-12" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">Our Initiatives: Beyond Meals</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-10">
            Beyond our regular food distribution, we organize special programs that allow our community to engage in unique acts of kindness and celebrate life's moments with those less fortunate. Each initiative is a step towards a more compassionate society, fostering hope and well-being for all.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card text-card-foreground shadow-lg transition-transform duration-300 hover:scale-105 border border-border h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <HandHeart className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Weekly Food Distribution</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 flex-grow flex flex-col justify-between p-4">
                <p className="mb-4 text-wrap">Our core program involves the consistent distribution of hundreds of healthy, home-cooked meals. Every Tuesday and Saturday, our dedicated volunteers reach out to underprivileged children and individuals across various locations in Delhi, ensuring that no one in our community goes hungry. This program is the heartbeat of our mission, providing essential nourishment and a message of hope.</p>
                <ul className="list-disc list-inside text-left pl-4 space-y-1 text-sm">
                  <li><strong>Impact:</strong> Providing consistent nourishment and hope to vulnerable communities.</li>
                  <li><strong>Frequency:</strong> Food distribution drives are held reliably every Tuesday and Saturday.</li>
                  <li><strong>Cost:</strong> Each nutritious, freshly prepared meal costs just ₹21.</li>
                  <li><strong>Quality:</strong> We ensure all meals are hygienic, home-cooked, and served with dignity.</li>
                </ul>
                <Button asChild variant="link" className="mt-auto text-accent hover:text-accent/90">
                  <Link to="/what-we-do">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg transition-transform duration-300 hover:scale-105 border border-border h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <UtensilsCrossed className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Celebrate with Us</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 flex-grow flex flex-col justify-between p-4">
                <p className="mb-4 text-wrap">Make your special occasions—be it birthdays, anniversaries, or significant milestones—truly unforgettable by sharing your joy. For a modest contribution of ₹500-₹600, we can arrange for a cake cutting and celebration with the children we serve. This unique initiative creates heartwarming moments of happiness and allows you to give back in a deeply personal way.</p>
                <ul className="list-disc list-inside text-left pl-4 space-y-1 text-sm">
                  <li><strong>Occasions:</strong> Ideal for Birthdays, Anniversaries, Graduations, or any personal milestone.</li>
                  <li><strong>Activity:</strong> Includes a joyful cake cutting ceremony and sharing meals with children.</li>
                  <li><strong>Contribution:</strong> A small contribution of ₹500-₹600 helps cover the costs of the celebration.</li>
                  <li><strong>Memories:</strong> Create lasting, meaningful memories by spreading happiness.</li>
                </ul>
                <Button asChild variant="link" className="mt-auto text-accent hover:text-accent/90">
                  <Link to="/what-we-do">Discover More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card text-card-foreground shadow-lg transition-transform duration-300 hover:scale-105 border border-border h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <PiggyBank className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Gau Seva & Custom Donations</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 flex-grow flex flex-col justify-between p-4">
                <p className="mb-4 text-wrap">Extend your profound kindness and compassion to all living beings through our revered Gau Seva (cow feeding) program. We actively facilitate donations specifically dedicated to providing nutritious fodder, clean water, and essential veterinary care for these gentle and sacred animals. This initiative is a reflection of our broader commitment to compassion and welfare for all creatures, promoting a holistic approach to charity that extends beyond human beneficiaries. Your contribution to Gau Seva helps us ensure the well-being and respectful treatment of these animals, upholding a cherished tradition of service.</p>
                <ul className="list-disc list-inside text-left pl-4 space-y-1 text-sm">
                  <li><strong>Gau Seva:</strong> Support the feeding and care of cows, a sacred act of kindness.</li>
                  <li><strong>Custom Donations:</strong> Tailor your contribution to specific needs or projects you care about.</li>
                  <li><strong>Flexibility:</strong> Contact us to discuss unique acts of charity and how we can help facilitate them.</li>
                  <li><strong>Holistic Welfare:</strong> Our commitment extends to the well-being of all creatures.</li>
                </ul>
                <Button asChild variant="link" className="mt-auto text-accent hover:text-accent/90">
                  <Link to="/general-donations">Explore Options</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      <section className="relative py-16 bg-secondary text-foreground">
        <BackgroundPattern Icon={IndianRupee} size={300} opacity="opacity-[0.03]" position="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-primary">How You Can Help</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Your support is the backbone of our mission, enabling us to reach more individuals and make a lasting impact. Here are a few profound ways you can contribute to a brighter future for our community. Every gesture of kindness, big or small, fuels our efforts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <IndianRupee className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Donate Meals</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 flex-grow flex flex-col justify-between p-4">
                <p className="mb-4 text-wrap">Provide a nutritious, home-cooked meal for just ₹21. Every donation directly feeds someone in need and brings a smile to their face, offering essential sustenance and hope. Your contribution ensures a warm meal reaches those who need it most.</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md transition-colors duration-300 mt-auto">
                  <Link to="/donate-food#donation-qr-section">Donate Now</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <HeartHandshake className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Volunteer Your Time</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 flex-grow flex flex-col justify-between p-4">
                <p className="mb-4 text-wrap">Join our dedicated team of volunteers and become a helping hand. Your time and effort are invaluable in preparing and distributing meals, connecting with the community, and making a tangible difference on the ground. We welcome passionate individuals to join our cause.</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md transition-colors duration-300 mt-auto">
                  <Link to="/contact-us">Become a Volunteer</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <CalendarDays className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Celebrate with Purpose</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 flex-grow flex flex-col justify-between p-4">
                <p className="mb-4 text-wrap">Mark your special occasions by sharing joy with underprivileged children. A unique and heartwarming way to celebrate your milestones—be it birthdays, anniversaries, or achievements—by giving back to the community and creating smiles!</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md transition-colors duration-300 mt-auto">
                  <Link to="/what-we-do">Plan Your Celebration</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Snippet */}
      <section className="relative py-16 bg-muted">
        <BackgroundPattern Icon={GalleryHorizontal} size={250} opacity="opacity-[0.03]" position="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 rotate-6" />
        <BackgroundPattern Icon={Search} size={200} opacity="opacity-[0.03]" position="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 -rotate-6" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-primary">Moments of Impact</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-10">
            Witness the smiles your generosity creates and the profound impact of our collective efforts. Our gallery captures heartwarming moments from our food distribution drives, special events, and community interactions, showcasing the real difference your support makes in countless lives.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group min-h-[150px] bg-gray-200"
                onClick={() => handleImageClick(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Search className="h-8 w-8 text-white" />
                </div>
              </div>
            ))}
          </div>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg rounded-md shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <Link to="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </section>

      {/* Contact Us Snippet */}
      <section className="relative py-16 bg-primary text-primary-foreground">
        <BackgroundPattern Icon={Phone} size={280} opacity="opacity-[0.05]" position="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 rotate-12" />
        <BackgroundPattern Icon={MessageSquareText} size={220} opacity="opacity-[0.05]" position="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 -rotate-12" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">Get In Touch</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Have questions, want to volunteer, or collaborate? We'd love to hear from you. Your engagement helps us grow and serve more effectively, strengthening our community bonds and extending our reach to those in need.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center">
            <div className="relative overflow-hidden rounded-lg shadow-xl col-span-full lg:col-span-2 min-h-[200px] bg-gray-200">
              <img
                src="/images/cake-cutting-children.jpg"
                alt="People collaborating"
                className="w-full h-72 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white text-xl font-semibold">Join Our Community</p>
            </div>
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <MessageSquareText className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Quick FAQs</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 flex-grow flex flex-col justify-between p-4">
                <p className="mb-4 text-wrap">Find answers to common questions about our mission, donation processes, and operational details quickly and easily. Our comprehensive FAQ section is designed to provide clarity and assist you.</p>
                <Button asChild variant="link" className="mt-auto text-accent hover:text-accent/90">
                  <Link to="/faqs">View FAQs</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-lg transition-transform duration-300 hover:scale-105 border border-border h-full flex flex-col">
              <CardHeader className="flex flex-col items-center text-center">
                <Phone className="h-12 w-12 text-accent mb-4" />
                <CardTitle className="text-2xl font-bold text-primary">Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 flex-grow flex flex-col justify-between p-4">
                <p className="mb-4 text-wrap">Reach out to us directly via phone, email, or visit our office during working hours. We're here to help with any inquiries, discuss potential collaborations, or guide you through volunteer opportunities!</p>
                <Button asChild variant="link" className="mt-auto text-accent hover:text-accent/90">
                  <Link to="/contact-us">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl w-auto p-0 border-none bg-transparent shadow-none">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <DialogClose asChild>
                <button className="absolute top-2 right-2 p-1 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </button>
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;