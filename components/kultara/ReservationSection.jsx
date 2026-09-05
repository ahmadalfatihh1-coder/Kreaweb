'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { waLink } from './kultara-config';

export default function ReservationSection() {
  const [nama, setNama] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [jam, setJam] = useState('');
  const [jumlah, setJumlah] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = 'halo Kreaweb, saya suka web seperti kultara ini, mau tanya tanya dulu';
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full rounded-sm border border-ink-line bg-ink px-4 py-3 text-paper placeholder:text-paper-faint focus:border-crimson focus:outline-none';

  return (
    <section className="kultara-section bg-ink-soft/30">
      <div className="kultara-container grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-paper sm:text-4xl md:text-5xl">
            Reservasi Meja
          </h2>
          <p className="mt-6 max-w-md text-paper-muted">
            Amankan meja Anda sebelum datang. Isi form singkat berikut dan kami akan
            konfirmasi lewat WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="nama" className="mb-2 block text-sm font-medium text-paper-muted">
                Nama
              </label>
              <input
                id="nama"
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                placeholder="Nama Anda"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="tanggal" className="mb-2 block text-sm font-medium text-paper-muted">
                Tanggal
              </label>
              <input
                id="tanggal"
                type="date"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                required
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="jam" className="mb-2 block text-sm font-medium text-paper-muted">
                Jam
              </label>
              <input
                id="jam"
                type="time"
                value={jam}
                onChange={(e) => setJam(e.target.value)}
                required
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="jumlah" className="mb-2 block text-sm font-medium text-paper-muted">
                Jumlah Orang
              </label>
              <input
                id="jumlah"
                type="number"
                min="1"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                required
                placeholder="Contoh: 4"
                className={inputClass}
              />
            </div>

            <div className="sm:col-span-2">
              <button type="submit" className="kultara-btn kultara-btn-primary w-full">
                Reservasi via WhatsApp
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}