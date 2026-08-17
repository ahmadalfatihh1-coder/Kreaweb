'use client';

import { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GaleriLightbox({ images, index, onClose, onNavigate }) {
  const touchStartX = useRef(null);

  useEffect(() => {
    if (index === null) return;

    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNavigate(index + 1);
      if (event.key === 'ArrowLeft') onNavigate(index - 1);
    };

    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [index, onClose, onNavigate]);

  if (index === null) return null;

  const current = images[index];
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    const threshold = 50;
    if (delta > threshold) onNavigate(index - 1);
    else if (delta < -threshold) onNavigate(index + 1);
    touchStartX.current = null;
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-6"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Close */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute right-4 top-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
      >
        <X size={22} />
      </button>

      {/* Prev */}
      {hasPrev && (
        <button
          type="button"
          onClick={() => onNavigate(index - 1)}
          aria-label="Sebelumnya"
          className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 sm:left-6"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          type="button"
          onClick={() => onNavigate(index + 1)}
          aria-label="Berikutnya"
          className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70 sm:right-6"
        >
          <ChevronRight size={22} />
        </button>
      )}

      {/* Image */}
      <div className="relative z-10 max-h-full max-w-5xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[85vh] w-auto max-w-full rounded-sm object-contain sm:max-h-[88vh]"
        />
        <div className="mt-3 text-center text-sm text-white/70">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}