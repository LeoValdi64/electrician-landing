import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <Services />
        <div className="section-divider" />
        <WhyChooseUs />
        <div className="section-divider" />
        <ServiceAreas />
        <div className="section-divider" />
        <Testimonials />
        <div className="section-divider" />
        <Pricing />
        <div className="section-divider" />
        <FAQ />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
