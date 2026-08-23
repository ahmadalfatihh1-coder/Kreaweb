'use client';

import { formatRupiah } from './menu-data';

export default function MenuCard({ item, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className="group flex h-full w-full flex-col overflow-hidden rounded-sm border border-ink-line bg-ink-soft text-left transition-colors duration-300 hover:border-crimson/60"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {item.badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {item.badges.map((badge) => (
              <span
                key={badge}
                className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
                  badge === 'Signature'
                    ? 'bg-crimson text-white'
                    : 'bg-white text-black'
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-crimson-bright">
          {item.category}
        </span>
        <h3 className="mt-2 font-display text-xl font-extrabold text-paper">
          {item.name}
        </h3>
        <div className="mt-1.5 text-lg font-bold text-paper">
          {formatRupiah(item.price)}
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-paper-muted">
          {item.description}
        </p>
      </div>
    </button>
  );
}