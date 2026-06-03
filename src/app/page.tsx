import Navigation from "@/components/Navigation";
import HeroVideo from "@/components/HeroVideo";
import About from "@/components/About";
import FactoryBanner from "@/components/FactoryBanner";
import Process from "@/components/Process";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ClientMarquee from "@/components/ClientMarquee";
import Calculator from "@/components/Calculator";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroVideo />
        <About />
        <FactoryBanner />
        <Process />
        <Certifications />
        <Projects />
        <Testimonials />
        <ClientMarquee />
        <Calculator />
        <Contacts />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
