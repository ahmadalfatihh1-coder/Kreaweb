import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import WhyKreaweb from '../components/WhyKreaweb';
import InvestmentSection from '../components/InvestmentSection';
import Services from '../components/Services';
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
        <TrustBar />
        <WhyKreaweb />
        <InvestmentSection />
        <Services />
        <Features />
        <Process />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
