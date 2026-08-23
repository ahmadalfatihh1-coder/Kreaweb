import './kultara.css';
import Navbar from '../../components/kultara/Navbar';
import Footer from '../../components/kultara/Footer';
import FloatingActions from '../../components/kultara/FloatingActions';

export const metadata = {
  metadataBase: new URL('https://kreaweb.id'),
  title: 'KULTARA — Kuliner Nusantara',
  description:
    'KULTARA adalah rumah makan khas Indonesia yang telah dua puluh tahun menjaga rasa, resep, dan cerita kuliner Nusantara. Konsep website dummy oleh KreaWeb.',
  alternates: {
    canonical: '/kultara',
  },
  openGraph: {
    title: 'KULTARA — Kuliner Nusantara',
    description:
      'KULTARA adalah rumah makan khas Indonesia yang telah dua puluh tahun menjaga rasa, resep, dan cerita kuliner Nusantara. Konsep website dummy oleh KreaWeb.',
    url: 'https://kreaweb.id/kultara',
    type: 'website',
    locale: 'id_ID',
    siteName: 'KULTARA',
  },
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