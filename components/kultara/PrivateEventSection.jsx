import Reveal from './Reveal';
import { waLink } from './kultara-config';

const EVENT_TYPES = [
  'Ulang tahun',
  'Arisan',
  'Meeting',
  'Gathering',
  'Family dinner',
  'Corporate lunch',
];

const EVENT_URL = waLink('Halo Kultara, saya ingin konsultasi acara private dining.');

export default function PrivateEventSection() {
  return (
    <section className="kultara-section">
      <div className="kultara-container">
        <Reveal className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-paper sm:text-4xl md:text-5xl">
              Rayakan Momen Bersama Kultara
            </h2>
            <p className="mt-6 text-paper-muted">
              Untuk momen istimewa bersama orang terdekat, Kultara siap menjadi tempat
              berkumpul yang hangat.
            </p>
          </div>

          <a
            href={EVENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="kultara-btn kultara-btn-primary"
          >
            Konsultasikan Acara
          </a>
        </Reveal>

        <Reveal delay={150} className="mt-10">
          <div className="flex flex-wrap gap-3">
            {EVENT_TYPES.map((item) => (
              <span
                key={item}
                className="inline-flex items-center rounded-full border border-ink-line px-5 py-2.5 text-sm text-paper-muted"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}