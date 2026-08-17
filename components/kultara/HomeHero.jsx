export default function HomeHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-black">
      {/* Hero image — Rendang */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/kultara/rendangutama.jpg"
          alt="Rendang Daging Kultara"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="kultara-container relative z-10 pt-32 pb-24 md:pt-40 md:pb-32">
        <h1 className="anim-fade-up anim-delay-200 max-w-4xl font-display text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
        Siap untuk <br /> Manjakan Lidahmu?
        </h1>

        <p
          className="anim-fade-up anim-delay-300 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg"
          style={{ marginTop: '10px' }}
        >
          Resep Otentik khas Nusantara yang siap membuat Lidahmu merasakan Kenikmatan yang hakiki.
        </p>

        <div className="anim-fade-up anim-delay-400 mt-10 flex flex-wrap items-center gap-4">
          <a href="#menu" className="kultara-btn kultara-btn-primary">
            Lihat Menu
          </a>
        </div>

        <div className="anim-fade-in anim-delay-400 mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/80">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-crimson-bright" />
            Buka Hari Ini • 10.00–22.00
          </span>
          <span>Jakarta, Indonesia</span>
        </div>
      </div>
    </section>
  );
}