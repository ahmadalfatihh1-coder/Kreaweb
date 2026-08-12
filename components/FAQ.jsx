'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    id: '01',
    question: 'Website ini cocok untuk siapa?',
    answer:
      'Cocok untuk UMKM, company profile, portfolio, personal brand, jasa profesional, yayasan, dan organisasi.',
  },
  {
    id: '02',
    question: 'Apakah website sepenuhnya menjadi milik klien?',
    answer:
      'Ya. Domain, hosting, dan source code menjadi milik Anda tanpa biaya tambahan.',
  },
  {
    id: '03',
    question: 'Apakah tersedia maintenance setelah website selesai?',
    answer: 'Ya. Kami bantu perbaiki bug atau error setelah website diluncurkan.',
  },
  {
    id: '04',
    question: 'Apakah website dapat dikembangkan lagi di masa depan?',
    answer: 'Bisa. Website bisa ditambah fitur, halaman, atau perubahan desain kapan saja.',
  },
  {
    id: '05',
    question: 'Berapa lama pengerjaan website?',
    answer: 'Umumnya 4–7 hari, tergantung jumlah halaman dan fitur.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-[#f8fafc] py-16 md:py-24">
      <div className="mx-auto max-w-[720px] px-5 md:px-8">
        <div className="mx-auto mb-10 max-w-[560px] text-center md:mb-14">
          <h2 className="text-[26px] font-bold leading-[1.2] text-[#0f172a] sm:text-[32px] md:text-[38px]">
            Pertanyaan yang sering ditanyakan.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-500 md:text-[16px]">
            Jawaban untuk pertanyaan yang paling sering ditanyakan.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen ? 'border-slate-300 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)]' : 'border-slate-200/70 bg-white'
                }`}
              >
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span className="text-[15px] font-semibold text-[#0f172a] md:text-[16px]">
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen ? 'rotate-45 border-[#3b82f6] bg-[#3b82f6] text-white' : 'border-slate-200 text-[#3b82f6]'
                    }`}
                    aria-hidden="true"
                  >
                    <Plus size={16} />
                  </span>
                </button>

                {/* Answer panel — smooth height animation */}
                <div
                  id={`faq-panel-${faq.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14px] leading-relaxed text-slate-500">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}