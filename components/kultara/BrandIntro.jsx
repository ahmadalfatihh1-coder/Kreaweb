import Reveal from './Reveal';

export default function BrandIntro() {
  return (
    <section id="tentang" className="kultara-section scroll-mt-24 overflow-hidden">
      <div className="kultara-container flex flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-20 lg:gap-y-12">
        {/* Judul — mobile: paling atas, desktop: atas kanan */}
        <Reveal className="order-1 lg:order-2 lg:col-start-2 lg:row-start-1">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-paper sm:text-4xl md:text-5xl">
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
          <div className="max-w-xl space-y-4 text-base leading-relaxed text-paper-muted md:text-lg">
            <p>
              Semuanya berawal dari dapur sederhana di rumah nenek Pak Andi. Sejak kecil, ia
              sering melihat neneknya memasak berbagai hidangan Nusantara untuk keluarga. Aroma
              rempah, suara bumbu yang diulek, dan kesabaran nenek dalam memasak menjadi kenangan
              yang selalu melekat. Dari situlah tumbuh rasa kagum dan kecintaan Pak Andi terhadap
              masakan tradisional.
            </p>
            <p>
              Resep-resep neneknya tidak banyak ditulis, melainkan diwariskan lewat kebiasaan dan
              pengalaman. Pak Andi pun belajar dengan melihat, membantu, dan memahami cara neneknya
              menjaga rasa setiap masakan. Setelah dewasa, ia membawa rasa dan kenangan dari dapur
              tersebut kepada lebih banyak orang. Dengan tekad dan perjalanan yang tidak selalu
              mudah, ia membangun sebuah rumah makan yang berangkat dari resep serta nilai yang
              telah ia kenal sejak kecil.
            </p>
            <p>
              Kini, lebih dari dua puluh tahun telah dilalui. Kultara menjadi wujud impian Pak Andi
              untuk menjaga cita rasa Nusantara sekaligus memperkenalkannya kepada generasi
              berikutnya. Setiap hidangan membawa cerita dari dapur neneknya—tentang keluarga,
              tradisi, dan rasa yang terus dijaga agar tetap hidup di tengah perubahan zaman.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}