import Reveal from './Reveal';

const STATS = [
  { value: '20+', label: 'Tahun Berdiri' },
  { value: '50+', label: 'Menu Nusantara' },
  { value: '10K+', label: 'Pelanggan' },
  { value: '4.9/5', label: 'Rating Pelanggan' },
];

export default function TrustIndicator() {
  return (
    <section className="border-y border-ink-line bg-ink-soft/40">
      <div className="kultara-container grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4 md:py-16">
        {STATS.map((item, index) => (
          <Reveal key={item.label} delay={index * 100}>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-crimson font-display text-2xl font-extrabold text-white md:h-28 md:w-28 md:text-3xl">
                {item.value}
              </div>
              <div className="text-[12px] uppercase tracking-[0.18em] text-paper-muted md:text-[13px]">
                {item.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}