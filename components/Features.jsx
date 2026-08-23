'use client';

import {
  MessageCircle,
  MapPin,
  Share2,
  Mail,
  FormInput,
  Search,
  Palette,
} from 'lucide-react';

const FEATURES = [
  {
    icon: MessageCircle,
    title: 'WhatsApp Integration',
    description: 'Calon pelanggan dapat langsung menghubungi bisnis melalui WhatsApp.',
  },
  {
    icon: MapPin,
    title: 'Google Maps',
    description: 'Memudahkan pelanggan menemukan lokasi bisnis.',
  },
  {
    icon: Share2,
    title: 'Social Media Integration',
    description: 'Hubungkan website dengan Instagram, TikTok, dan platform lainnya.',
  },
  {
    icon: Search,
    title: 'SEO Dasar',
    description: 'Struktur dasar website dipersiapkan agar lebih mudah ditemukan di Google.',
  },
  {
    icon: Palette,
    title: 'Bebas Request',
    description: 'Pelanggan adalah raja, seluruh desain dan fitur bisa di buat sesuai keinginan Anda',
  },
];

export default function Features() {
  return (
    <section id="fitur" className="scroll-mt-24 bg-[#f8fafc] py-16 md:py-24 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-14">
          <h2 className="text-[32px] font-bold leading-[1.2] text-[#0f172a] sm:text-[40px] md:text-[48px] dark:text-white">
            Fitur yang bisa Anda dapatkan dari kami
          </h2>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex items-start gap-3.5 rounded-2xl border border-slate-200/60 bg-white p-4 transition-all duration-300 hover:border-[#3b82f6] hover:shadow-[0_3px_12px_rgba(59,130,246,0.15)] sm:p-5 dark:border-slate-800 dark:bg-[#111a2e]"
              >
                <div className="shrink-0 text-[#3b82f6]">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#0f172a] dark:text-white">{feature.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-500 dark:text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}