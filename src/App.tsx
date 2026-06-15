import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import Process from "./components/Process";
import BeforeAfter from "./components/BeforeAfter";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import { useSmoothScroll } from "./lib/useSmoothScroll";

export default function App() {
  useSmoothScroll();
  return (
    <div className="relative min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Process />
        <BeforeAfter />
        <WhyUs />
        <Gallery />
        <Packages />
        <Testimonials />
        <FAQ />
        <BookingCTA />
      </main>
      <Footer />
    </div>
  );
}
