import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyKreaweb from '../components/WhyKreaweb';
import InvestmentSection from '../components/InvestmentSection';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Features from '../components/Features';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyKreaweb />
        <InvestmentSection />
        <Services />
        <Portfolio />
        <Features />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
