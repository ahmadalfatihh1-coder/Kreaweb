import PageHero from '../../../components/kultara/PageHero';
import OpeningHours from '../../../components/kultara/OpeningHours';
import { KULTARA_CONFIG, waLink } from '../../../components/kultara/kultara-config';

const CUSTOMER_SERVICE_URL = waLink('halo Kreaweb, saya suka web seperti kultara ini, mau tanya tanya dulu');

export const metadata = {
  metadataBase: new URL('https://kreaweb.id'),
  title: 'Kontak & Lokasi KULTARA — Kuliner Nusantara',
  description:
    'Temukan lokasi, jam operasional, dan cara menghubungi KULTARA di Jakarta untuk menikmati sajian kuliner Nusantara.',
  alternates: {
    canonical: '/kultara/kontak',
  },
};

export default function Kontak() {
  const {
    alamat,
    telepon,
    gofoodUrl,
    grabfoodUrl,
    mapsEmbedUrl,
    hariLabel,
    jamBuka,
    jamTutup,
    parkingInfo,
  } = KULTARA_CONFIG;

  return (
    <>
      <PageHero
        title="Temukan Kami."
        description="Kunjungi Kultara di Jakarta untuk menikmati sajian Nusantara."
      />

      <section className="kultara-section pt-0">
        <div className="kultara-container grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-paper md:text-3xl">
              Kultara — Kuliner Nusantara
            </h2>

            <p className="mt-6 text-base leading-relaxed text-paper-muted">{alamat}</p>
            <p className="mt-2 text-base text-paper-muted">Telepon: {telepon}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <OpeningHours />
              <span className="text-sm text-paper-muted">
                {hariLabel} • {jamBuka}–{jamTutup}
              </span>
            </div>

            <p className="mt-4 text-sm text-paper-faint">{parkingInfo}</p>

            <a
              href={CUSTOMER_SERVICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="kultara-btn kultara-btn-primary mt-6"
            >
              Hubungi Kultara
            </a>

            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-paper-faint">
                Pesan Antar
              </h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={gofoodUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kultara-btn text-white"
                  style={{ backgroundColor: '#00AA13' }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12.072.713a15.38 15.38 0 0 0-.643.011C5.317.998.344 5.835.017 11.818c-.266 4.913 2.548 9.21 6.723 11.204 1.557.744 3.405-.19 3.706-1.861.203-1.126-.382-2.241-1.429-2.742-2.373-1.139-3.966-3.602-3.778-6.406.22-3.28 2.931-5.945 6.279-6.171 3.959-.267 7.257 2.797 7.257 6.619 0 2.623-1.553 4.888-3.809 5.965a2.511 2.511 0 0 0-1.395 2.706l.011.056c.295 1.644 2.111 2.578 3.643 1.852C21.233 21.139 24 17.117 24 12.461 23.996 5.995 18.664.749 12.072.711v.002Zm-.061 7.614c-2.331 0-4.225 1.856-4.225 4.139 0 2.282 1.894 4.137 4.225 4.137 2.33 0 4.225-1.855 4.225-4.137 0-2.283-1.895-4.139-4.225-4.139Z" />
                  </svg>
                  Pesan di GoFood
                </a>
                <a
                  href={grabfoodUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="kultara-btn text-white"
                  style={{ backgroundColor: '#00B14F' }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M23.129 10.863a2.927 2.927 0 00-2.079-.872c-.57 0-1.141.212-1.455.421-.651.434-1.186.904-2.149 2.148v.894c.817-1.064 1.59-1.903 2.177-2.364.386-.31.933-.501 1.427-.501 1.275 0 2.352 1.077 2.352 2.352v.538c0 .63-.247 1.223-.698 1.668a2.341 2.341 0 01-1.654.685c-1.048 0-1.97-.719-2.22-1.701l-.422.51c.307 1.03 1.417 1.789 2.642 1.789.778 0 1.516-.31 2.079-.872.562-.562.871-1.3.871-2.079v-.538c0-.778-.31-1.517-.871-2.078m-12.8-.274c.406 0 .757.087 1.074.266.149-.186.299-.337.411-.449-.335-.256-.903-.415-1.485-.415-.83 0-1.584.3-2.122.843-.534.54-.83 1.287-.83 2.107v3.489h.598V12.94c0-1.385.968-2.352 2.354-2.352m5.678 5.84v-3.488c0-1.072-.84-1.913-1.913-1.913-.5 0-.976.203-1.343.57a1.895 1.895 0 00-.57 1.343v.538c0 1.037.877 1.913 1.913 1.913.285 0 .671-.07.908-.264v-.631c-.232.187-.57.298-.908.298a1.302 1.302 0 01-1.315-1.316v-.538a1.3 1.3 0 011.315-1.314 1.3 1.3 0 011.316 1.314v3.489zM0 12.596v.193c0 1.036.393 2.003 1.107 2.722a3.759 3.759 0 002.689 1.112c.82 0 1.548-.186 2.162-.551.506-.302.73-.607.75-.635V12.22H3.65v.597H6.11v2.434l-.002.002c-.288.288-.972.77-2.312.77a3.165 3.165 0 01-2.279-.938 3.247 3.247 0 01-.92-2.297v-.193c0-.83.375-1.656 1.026-2.269a3.558 3.558 0 012.442-.967c.847 0 1.438.129 1.913.416v-.67c-.494-.21-1.085-.305-1.913-.305C1.862 8.8 0 10.538 0 12.595m10.329-.968c.226 0 .419.037.571.112.075-.186.151-.339.262-.525-.162-.116-.549-.186-.833-.186-1.09 0-1.913.823-1.913 1.913v3.489h.598V12.94c0-.774.54-1.314 1.315-1.314m-4.351-.702v-.707c-.541-.29-1.131-.419-1.913-.419-.799 0-1.555.293-2.132.824-.577.532-.895 1.233-.895 1.972v.193c0 1.542 1.237 2.796 2.758 2.796 1.237 0 1.745-.405 1.874-.533v-1.794H3.65v.598h1.46v.899l-.005.001c-.187.075-.578.231-1.31.231-.58 0-1.122-.225-1.528-.636a2.203 2.203 0 01-.632-1.562v-.193c0-1.192 1.113-2.198 2.43-2.198.91 0 1.45.147 1.913.528m14.105 1.126c.27-.27.623-.424.967-.424.737 0 1.315.577 1.315 1.314v.538c0 .738-.578 1.316-1.315 1.316-.357 0-.702-.196-.972-.55a2.151 2.151 0 01-.418-1.12l-.484.591c.095.452.33.885.665 1.19.344.313.774.486 1.209.486a1.915 1.915 0 001.913-1.913v-.538c0-.499-.202-.977-.57-1.343a1.896 1.896 0 00-1.343-.57c-.316 0-.818.114-1.417.652l-.002.002c-.16.16-.536.536-.765.804-.384.42-.943 1.054-1.42 1.688v.933c.529-.68.833-1.06 1.33-1.634.445-.519.996-1.15 1.307-1.422m-8.939 1.428c0 .779.31 1.517.872 2.08a2.93 2.93 0 002.078.87c.33 0 .669-.07.908-.188v-.597c-.28.117-.618.188-.908.188-1.274 0-2.352-1.077-2.352-2.353v-.538c0-1.275 1.078-2.352 2.352-2.352a2.34 2.34 0 012.353 2.353v3.488h.598v-3.604a2.979 2.979 0 00-.915-2.006 2.92 2.92 0 00-2.036-.83c-.778 0-1.516.31-2.078.873a2.926 2.926 0 00-.872 2.078zm6.918-2.313c.183-.22.372-.443.596-.631V7.378h-.596zm1.037-.876V7.378h.597V9.88a3.601 3.601 0 00-.597.41" />
                  </svg>
                  Pesan di GrabFood
                </a>
              </div>
            </div>

          </div>

          <div className="min-h-[360px] overflow-hidden rounded-sm border border-ink-line">
            <iframe
              title="Lokasi Kultara"
              src={mapsEmbedUrl}
              className="h-full min-h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}