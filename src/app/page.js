import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurCompany from "@/components/OurCompany";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Technologies from "@/components/Technologies";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="about" aria-label="About Us"><OurCompany /></section>
      <section id="service" aria-label="Our Services"><Services /></section>
      <section id="technologies" aria-label="Technologies We Use"><Technologies /></section>
      <section id="team" aria-label="Meet the team"><Team /></section>
      <section id="contact" aria-label="Contact"><Contact /></section>
      <Footer />
    </>
  );
};
