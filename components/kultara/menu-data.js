export const MENU_ITEMS = [
  {
    id: 'rendang-daging',
    name: 'Rendang Daging',
    price: 48000,
    category: 'Hidangan Utama',
    badges: ['Signature', 'Best Seller'],
    image: '/images/kultara/menu/rendang.jpg',
    description:
      'Daging sapi empuk yang dimasak perlahan bersama rempah khas Nusantara hingga kaya rasa.',
  },
  {
    id: 'ayam-bakar-taliwang',
    name: 'Ayam Bakar Taliwang',
    price: 42000,
    category: 'Hidangan Utama',
    badges: [],
    image: '/images/kultara/menu/taliwang.jpg',
    description:
      'Ayam bakar dengan bumbu pedas khas Lombok, smoky, gurih, dan penuh karakter.',
  },
  {
    id: 'nasi-liwet-sunda',
    name: 'Nasi Liwet Sunda',
    price: 32000,
    category: 'Nusantara',
    badges: [],
    image: '/images/kultara/menu/nasi-liwet.jpg',
    description:
      'Nasi gurih harum yang disajikan dengan lauk dan pelengkap khas Sunda.',
  },
  {
    id: 'soto-betawi',
    name: 'Soto Betawi',
    price: 38000,
    category: 'Hidangan Utama',
    badges: ['Best Seller'],
    image: '/images/kultara/menu/soto-betawi.jpg',
    description:
      'Kuah gurih creamy dengan potongan daging sapi dan aroma rempah yang kuat.',
  },
  {
    id: 'kuah-pliek-aceh',
    name: 'Kuah Pliek Aceh',
    price: 35000,
    category: 'Nusantara',
    badges: [],
    image: '/images/kultara/menu/kuah-pliek.jpg',
    description:
      'Hidangan tradisional khas Aceh dengan perpaduan rempah lokal, ikan tongkol, dan kuah hijau khasnya.',
  },
  {
    id: 'rawon-jawa-timur',
    name: 'Rawon Jawa Timur',
    price: 40000,
    category: 'Hidangan Utama',
    badges: [],
    image: '/images/kultara/menu/rawon.jpg',
    description:
      'Sup daging berkuah hitam dengan aroma kluwek dan rempah khas Jawa Timur.',
  },
  {
    id: 'sate-ayam-madura',
    name: 'Sate Ayam Madura',
    price: 35000,
    category: 'Sate',
    badges: ['Best Seller'],
    image: '/images/kultara/menu/sate-ayam.jpg',
    description:
      'Potongan ayam panggang dengan bumbu kacang gurih dan manis yang menjadi favorit sepanjang masa.',
  },
  {
    id: 'ikan-bakar-jimbaran',
    name: 'Ikan Bakar Jimbaran',
    price: 55000,
    category: 'Seafood',
    badges: [],
    image: '/images/kultara/menu/ikan-jimbaran.jpg',
    description:
      'Ikan segar dibakar dengan bumbu rempah dan disajikan dengan sambal khas Nusantara.',
  },
  {
    id: 'gado-gado-nusantara',
    name: 'Gado-Gado Nusantara',
    price: 28000,
    category: 'Nusantara',
    badges: [],
    image: '/images/kultara/menu/gado-gado.jpg',
    description:
      'Sayuran segar, tahu, tempe, dan telur dengan saus kacang yang kaya rasa.',
  },
  {
    id: 'es-cendol-gula-aren',
    name: 'Es Cendol Gula Aren',
    price: 22000,
    category: 'Minuman',
    badges: [],
    image: '/images/kultara/menu/es-cendol.jpg',
    description:
      'Cendol lembut, santan, dan gula aren dalam perpaduan manis dan segar sebagai penutup.',
  },
];

export function formatRupiah(value) {
  return `Rp ${value.toLocaleString('id-ID')}`;
}