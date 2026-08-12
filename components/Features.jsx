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
    icon: Mail,
    title: 'Email',
    description: 'Sediakan jalur komunikasi profesional melalui email.',
  },
  {
    icon: FormInput,
    title: 'Contact Form',
    description: 'Memudahkan calon pelanggan mengirim pertanyaan.',
  },
  {
    icon: Search,
    title: 'SEO Dasar',
    description: 'Struktur dasar website dipersiapkan agar lebih mudah dipahami mesin pencari.',
  },
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Desain disesuaikan dengan identitas dan kebutuhan bisnis.',
  },
];

export default function Features() {
  return (
    <section className="bg-[#f8fafc] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-[640px] text-center md:mb-14">
          <h2 className="text-[26px] font-bold leading-[1.2] text-[#0f172a] sm:text-[32px] md:text-[38px]">
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
                className="flex items-start gap-3.5 rounded-2xl border border-slate-200/60 bg-white p-4 transition-all duration-300 hover:border-[#3b82f6] hover:shadow-[0_3px_12px_rgba(59,130,246,0.15)] sm:p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#3b82f6]/10 text-[#3b82f6]">
                  <Icon size={18} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#0f172a]">{feature.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-500">
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