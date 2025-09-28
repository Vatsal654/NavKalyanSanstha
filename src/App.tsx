import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout"; // Temporarily removed
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import WhatWeDo from "./pages/WhatWeDo";
import DonateFood from "./pages/DonateFood";
import GeneralDonations from "./pages/GeneralDonations";
import FAQs from "./pages/FAQs";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    {/* Temporarily removed Layout component for debugging */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/what-we-do" element={<WhatWeDo />} />
      <Route path="/donate-food" element={<DonateFood />} />
      <Route path="/general-donations" element={<GeneralDonations />} />
      <Route path="/faqs" element={<FAQs />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;