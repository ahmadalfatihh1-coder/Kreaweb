'use client';

import { useState, useCallback } from 'react';
import Reveal from './Reveal';
import GaleriLightbox from './GaleriLightbox';

const GALLERY = [
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    alt: 'Interior restoran Kultara dengan pencahayaan hangat',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=80',
    alt: 'Area makan restoran bertema kayu hangat',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80',
    alt: 'Penataan meja makan bernuansa hangat Kultara',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80',
    alt: 'Tempat duduk restoran Kultara yang nyaman',
    span: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80',
    alt: 'Suasana fine dining Kultara yang hangat',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80',
    alt: 'Ruang makan Kultara dengan dekorasi kayu',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?auto=format&fit=crop&w=900&q=80',
    alt: 'Sudut nyaman restoran Kultara',
    span: 'normal',
  },
  {
    src: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=900&q=80',
    alt: 'Area duduk restoran Kultara',
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
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight text-paper sm:text-4xl md:text-5xl">
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
                  className={`w-full object-cover transition-transform duration-500 sepia-[0.18] saturate-[1.15] group-hover:scale-105 ${
                    item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-square'
                  }`}
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-[#3a2917]/35 via-[#8a5a32]/15 to-[#f3ead8]/30" />
                <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/25" />
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