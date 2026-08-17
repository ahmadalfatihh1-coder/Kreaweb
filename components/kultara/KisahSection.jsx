import Reveal from './Reveal';

export default function KisahSection() {
  return (
    <section id="kisah" className="kultara-section scroll-mt-24 bg-ink-soft/30">
      <div className="kultara-container">
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            20 Tahun, Ribuan Meja, Satu Cerita.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10">
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-white/80">
              Semua berawal dari dapur kecil di rumah Pak Sulaiman. Dua puluh tahun lalu,
              ia memasak untuk keluarga dan tetangga dengan resep warisan ibunya.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-base leading-relaxed text-white/80">
              Dari satu meja, datang satu meja lagi. Pelanggan mulai berdatangan, dan Pak
              Sulaiman membuka warung kecil dengan tekad menjaga rasa rumah.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-base leading-relaxed text-white/80">
              Kini generasi berikutnya ikut melanjutkan. Resep yang sama, rasa yang sama,
              dan kebanggaan yang sama untuk cita rasa Nusantara.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}