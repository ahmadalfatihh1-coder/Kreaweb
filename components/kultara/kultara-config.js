// ================================================
// KULTARA — Konfigurasi terpusat (mudah diganti)
// ================================================

export const KULTARA_CONFIG = {
  // Nomor WhatsApp (format internasional, tanpa tanda +)
  whatsappNumber: '6282161175424',

  // Placeholder URL — ganti sesuai akun/klien asli
  instagramUrl: 'https://www.instagram.com/',
  tiktokUrl: 'https://www.tiktok.com/',
  gofoodUrl: 'https://gofood.co.id/',
  grabfoodUrl: 'https://food.grab.com/id/',
  googleMapsUrl: 'https://maps.google.com/?q=Jl.+Nusantara+No.+20+Jakarta',

  // Google Maps embed (iframe src, mudah diganti)
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Jl.%20Nusantara%20No.%2020%20Jakarta&output=embed',

  // Informasi lokasi & kontak
  alamat: 'Jl. Nusantara No. 20, Jakarta, Indonesia',
  telepon: '0821-6117-5424',
  jamBuka: '10.00',
  jamTutup: '22.00',
  hariLabel: 'Senin – Minggu',
  parkingInfo: 'Tersedia area parkir luas untuk pelanggan.',
};

export function waLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${KULTARA_CONFIG.whatsappNumber}?text=${encoded}`;
}