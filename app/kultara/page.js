import HomeHero from '../../components/kultara/HomeHero';
import TrustIndicator from '../../components/kultara/TrustIndicator';
import BrandIntro from '../../components/kultara/BrandIntro';
import SignatureDish from '../../components/kultara/SignatureDish';
import MenuSection from '../../components/kultara/MenuSection';
import KisahSection from '../../components/kultara/KisahSection';
import GaleriSection from '../../components/kultara/GaleriSection';
import InstagramSection from '../../components/kultara/InstagramSection';
import FaqSection from '../../components/kultara/FaqSection';
import ReservationSection from '../../components/kultara/ReservationSection';
import PrivateEventSection from '../../components/kultara/PrivateEventSection';

export default function KultaraHome() {
  return (
    <>
      <HomeHero />
      <TrustIndicator />
      <BrandIntro />
      <SignatureDish />
      <MenuSection />
      <KisahSection />
      <GaleriSection />
      <InstagramSection />
      <FaqSection />
      <ReservationSection />
      <PrivateEventSection />
    </>
  );
}