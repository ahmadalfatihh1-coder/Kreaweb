'use client';

import { useEffect, useRef, useState } from 'react';
import { MessagesSquare, PenTool, Code2, CheckCircle2, Rocket } from 'lucide-react';

const STEPS = [
  {
    id: '01',
    icon: MessagesSquare,
    title: 'KONSULTASI & NEGOSIASI',
    description: 'Kami pahami bisnis, kebutuhan, dan tujuan website Anda.',
    
  },
  {
    id: '02',
    icon: PenTool,
    title: 'DESAIN UI/UX',
    description: 'Menyusun struktur halaman dan desain visual sesuai identitas brand Anda.',
  
  },
  {
    id: '03',
    icon: Code2,
    title: 'PENGEMBANGAN',
    description: 'Desain dikembangkan menjadi website responsif dan siap digunakan.',
    
  },
  {
    id: '04',
    icon: CheckCircle2,
    title: 'TESTING',
    description: 'Kami periksa semua fungsi dan tampilan agar berjalan lancar.',
    
  },
  {
    id: '05',
    icon: Rocket,
    title: 'PUBLISH',
    description: 'Website dipublikasikan dan aset diserahkan sesuai kesepakatan.',
    
  },
];

// Circumference of the ring circle (r=24 in a 56px viewBox => 2 * PI * 24)
const RING_R = 24;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_R;

export default function Process() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="proses" className="bg-[#0f2a4a] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="mx-auto mb-12 max-w-[640px] text-center md:mb-16">
          <span className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#3b82f6]">
            Alur Pengerjaan 
          </span>
          <h2 className="mt-3 text-[26px] font-bold leading-[1.2] text-white sm:text-[32px] md:text-[38px]">
            Dari Konsultasi hingga Website Siap Digunakan.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#b8c9e0] md:text-[16px]">
            Proses ini simple, anda hanya perlu memberi informasi dan terima jadi.
          </p>
        </div>

        {/* Timeline — vertical on mobile, horizontal on lg */}
        <div ref={sectionRef} className="relative">
          {/* Horizontal connector (desktop) — base track */}
          <div className="absolute left-0 right-0 top-[26px] hidden h-[2px] bg-[#1e3a5f] lg:block" aria-hidden="true" />
          {/* Horizontal connector (desktop) — blue flow line draws on scroll */}
          <div
            className="absolute left-0 top-[26px] hidden h-[2px] bg-[#3b82f6] transition-[width] duration-[1500ms] ease-out lg:block"
            style={{ width: inView ? '100%' : '0%' }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const delay = i * 320; // stagger per step

              return (
                <div
                  key={step.id}
                  className="relative flex gap-4 transition-all duration-700 ease-out lg:block"
                  style={{
                    transitionDelay: `${delay}ms`,
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0)' : 'translateY(28px)',
                  }}
                >
                  {/* Vertical connector (mobile) — base track */}
                  {i < STEPS.length - 1 && (
                    <span
                      className="absolute left-[26px] top-[52px] h-[calc(100%-52px)] w-[2px] bg-[#1e3a5f] lg:hidden"
                      aria-hidden="true"
                    />
                  )}
                  {/* Vertical connector (mobile) — blue flow line draws on scroll */}
                  {i < STEPS.length - 1 && (
                    <span
                      className="absolute left-[26px] top-[52px] w-[2px] bg-[#3b82f6] transition-[height] duration-[1500ms] ease-out lg:hidden"
                      style={{
                        height: inView ? 'calc(100% - 52px)' : '0px',
                        transitionDelay: `${delay}ms`,
                      }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Node: filled blue circle + animated blue ring drawing around it */}
                  <div className="relative z-10 h-[52px] w-[52px] shrink-0 lg:mx-auto">
                    {/* Drawing ring — blue only */}
                    <svg
                      className="absolute -inset-1 h-[60px] w-[60px]"
                      viewBox="0 0 56 56"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="28"
                        cy="28"
                        r={RING_R}
                        stroke="#3b82f6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray={RING_CIRCUMFERENCE}
                        strokeDashoffset={inView ? 0 : RING_CIRCUMFERENCE}
                        transform="rotate(-90 28 28)"
                        style={{ transition: `stroke-dashoffset 0.9s ease-in-out ${delay}ms` }}
                      />
                    </svg>

                    {/* Filled circle */}
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#3b82f6] text-white">
                      <Icon size={22} strokeWidth={1.9} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-2 lg:mt-5 lg:text-center">
                    <span className="text-[12px] font-bold tracking-wider text-[#3b82f6]">
                      {step.id}
                    </span>
                    <h3 className="mt-1 text-[15px] font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#b8c9e0]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}