import './kultara.css';
import Navbar from '../../components/kultara/Navbar';
import Footer from '../../components/kultara/Footer';
import FloatingActions from '../../components/kultara/FloatingActions';

export const metadata = {
  title: 'KULTARA — Kuliner Nusantara',
  description:
    'KULTARA adalah rumah makan khas Indonesia yang telah dua puluh tahun menjaga rasa, resep, dan cerita kuliner Nusantara. Konsep website dummy oleh KreaWeb.',
};

export default function KultaraLayout({ children }) {
  return (
    <div className="kultara">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}