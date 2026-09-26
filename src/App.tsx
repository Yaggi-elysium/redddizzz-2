import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Industries from './components/Industries';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import TechStack from './components/TechStack';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="w-full overflow-x-hidden bg-[#F7F6FB] text-[#14102A]">
      <Navbar />
      <Hero />
      <Features />
      <Industries />
      <HowItWorks />
      <WhyChooseUs />
      <TechStack />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
