import Reveal from './Reveal';

export default function SignatureDish() {
  return (
    <section className="kultara-section overflow-hidden bg-ink-soft/30">
      <div className="kultara-container">
        <Reveal className="mb-14">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight text-paper sm:text-4xl md:text-5xl">
            Hidangan yang Menjadi Identitas Kami
          </h2>
        </Reveal>

        {/* Editorial layout — image left, copy right, no generic grid */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-7">
            <div className="reveal-image relative aspect-square rounded-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/kultara/signature-rendang.png"
                alt="Rendang Daging — hidangan signature Kultara"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-crimson px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                Signature
              </span>
            </div>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-5">
            <h3 className="font-display text-4xl font-extrabold text-paper sm:text-5xl">
              Rendang Daging
            </h3>
            <div className="mt-5 text-2xl font-semibold text-crimson-bright md:text-3xl">
              Rp 48.000
            </div>
            <p className="mt-10 text-base leading-relaxed text-paper-muted md:text-lg">
              Daging sapi pilihan yang dimasak perlahan bersama rempah Nusantara hingga
              bumbu meresap sempurna. Kaya rasa, lembut, dan menjadi salah satu hidangan
              yang paling menggambarkan karakter Kultara.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}