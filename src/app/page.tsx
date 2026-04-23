import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Services from "@/components/Services";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Journey />
      <Services />
      <Philosophy />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
