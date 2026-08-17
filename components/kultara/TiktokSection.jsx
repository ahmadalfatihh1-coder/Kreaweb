import Reveal from './Reveal';

const TIKTOK_URL = 'https://tiktok.com/@kultara.id';

export default function TiktokSection() {
  return (
    <section className="kultara-section">
      <div className="kultara-container">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
              Dapur Kultara
            </h2>
            <p className="mt-4 max-w-md text-white/70">
              Lihat proses memasak dan cerita dapur kami lewat video singkat.
            </p>
          </div>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="kultara-btn kultara-btn-primary"
          >
            Lihat TikTok Kami
          </a>
        </Reveal>
      </div>
    </section>
  );
}