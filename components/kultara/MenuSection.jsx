import MenuCarousel from './MenuCarousel';
import Reveal from './Reveal';

export default function MenuSection() {
  return (
    <section id="menu" className="kultara-section scroll-mt-24 overflow-hidden">
      <div className="kultara-container">
        <Reveal className="mb-12 text-center md:text-left">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-paper sm:text-4xl md:text-5xl">
            Menu Nusantara Kultara
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper-muted md:text-lg">
            Dari hidangan rumahan hingga sajian khas daerah, temukan rasa Indonesia
            dalam satu meja.
          </p>
        </Reveal>
      </div>

      <MenuCarousel />
    </section>
  );
}