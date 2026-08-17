import Reveal from './Reveal';

export default function BrandIntro() {
  return (
    <section id="tentang" className="kultara-section scroll-mt-24 overflow-hidden">
      <div className="kultara-container flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-20 lg:gap-y-12">
        {/* Judul — mobile: paling atas, desktop: atas kanan */}
        <Reveal className="order-1 lg:order-2 lg:col-start-2 lg:row-start-1">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Rumah Makan yang Menjaga Rasa Indonesia.
          </h2>
        </Reveal>

        {/* Logo Kultara berteks — mobile: tengah, desktop: kiri */}
        <Reveal className="order-2 flex justify-center lg:order-1 lg:col-start-1 lg:row-span-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/kultara/kultaratekss.png"
            alt="Logo Kultara"
            className="h-auto w-80 object-contain sm:w-56 md:w-64 lg:w-80 xl:w-96"
          />
        </Reveal>

        {/* Cerita — mobile: bawah, desktop: bawah kanan */}
        <Reveal delay={100} className="order-3 lg:col-start-2 lg:row-start-2">
          <p className="max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
            Dua puluh tahun kami membawa resep Nusantara ke meja keluarga, menjaga cita
            rasa tradisional dengan pengalaman yang lebih modern.
          </p>
        </Reveal>
      </div>
    </section>
  );
}