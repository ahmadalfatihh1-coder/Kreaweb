'use client';

import { useState, useCallback } from 'react';
import Reveal from './Reveal';
import GaleriLightbox from './GaleriLightbox';

const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1548940740-204726a19be3?auto=format&fit=crop&w=900&q=80',
    alt: 'Hidangan Nusantara di meja Kultara',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    alt: 'Suasana interior restoran Kultara',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80',
    alt: 'Koki Kultara sedang memasak di dapur',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80',
    alt: 'Sajian makanan khas Indonesia',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&w=900&q=80',
    alt: 'Rempah dan bahan masakan Nusantara',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    alt: 'Restoran Kultara dengan pencahayaan hangat',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=80',
    alt: 'Pelanggan menikmati hidangan Kultara',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80',
    alt: 'Hidangan laut bakar khas Kultara',
    span: 'tall',
  },
];

export default function GaleriSection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleNavigate = useCallback(
    (next) => {
      if (next < 0 || next >= GALLERY.length) return;
      setLightboxIndex(next);
    },
    []
  );

  return (
    <section id="galeri" className="kultara-section scroll-mt-24 overflow-hidden">
      <div className="kultara-container">
        <Reveal className="mb-12">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Suasana di Kultara
          </h2>
        </Reveal>

        {/* Masonry grid via CSS columns */}
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>div]:mb-4 [&>div]:break-inside-avoid">
          {GALLERY.map((item, index) => (
            <Reveal key={index} delay={(index % 4) * 100}>
              <button
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group relative block w-full overflow-hidden rounded-sm text-left"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-square'
                  }`}
                />
                <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <GaleriLightbox
        images={GALLERY}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={handleNavigate}
      />
    </section>
  );
}