'use client';

import { useState, useEffect } from 'react';
import { KULTARA_CONFIG } from './kultara-config';

function getJakartaHour() {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Jakarta',
    hour: 'numeric',
    hour12: false,
  }).formatToParts(new Date());
  const hour = parts.find((part) => part.type === 'hour');
  return hour ? parseInt(hour.value, 10) : new Date().getHours();
}

export default function OpeningHours() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const hour = getJakartaHour();
      const buka = parseInt(KULTARA_CONFIG.jamBuka, 10);
      const tutup = parseInt(KULTARA_CONFIG.jamTutup, 10);
      setIsOpen(hour >= buka && hour < tutup);
    };
    update();
    const interval = setInterval(update, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold ${
        isOpen ? 'bg-crimson text-white' : 'bg-ink-raised text-paper-muted'
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${isOpen ? 'bg-white' : 'bg-paper-faint'}`}
      />
      {isOpen ? 'Buka Sekarang' : 'Tutup'}
    </span>
  );
}