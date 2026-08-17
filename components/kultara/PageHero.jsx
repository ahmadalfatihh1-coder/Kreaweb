export default function PageHero({ title, description }) {
  return (
    <section className="kultara-section pt-56 pb-24 md:pt-64 md:pb-28">
      <div className="kultara-container">
        <h1 className="max-w-4xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}