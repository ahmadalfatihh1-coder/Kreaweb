'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MENU_ITEMS, formatRupiah } from './menu-data';
import MenuModal from './MenuModal';

const ITEMS = MENU_ITEMS;
const N = ITEMS.length;

function modIndex(x) {
  return ((x % N) + N) % N;
}

// Signed offset (in slots) of an item relative to the current active item,
// wrapped to the nearest copy so the ring can loop infinitely.
function normalizeOffset(diff) {
  let d = modIndex(diff);
  if (d > N / 2) d -= N;
  return d;
}

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function MenuCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0); // fractional drag displacement (in slots)
  const [transitioning, setTransitioning] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [sideCount, setSideCount] = useState(1);
  const [selected, setSelected] = useState(null);

  const activeRef = useRef(0);
  const stageRef = useRef(null);
  const dragRef = useRef(null);

  useEffect(() => {
    const update = () =>
      setSideCount(window.matchMedia('(min-width: 640px)').matches ? 2 : 1);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const slide = sideCount >= 2 ? 55 : 45; // horizontal spread per slot (in % of card width)
  const angle = sideCount >= 2 ? 28 : 24; // rotateY degrees per slot
  const depth = sideCount >= 2 ? 70 : 48; // translateZ depth per slot (px)
  const scaleBase = sideCount >= 2 ? 0.86 : 0.85; // scale multiplier per slot distance

  const getStepPx = useCallback(() => {
    const el = stageRef.current?.querySelector?.('.mc-card');
    const w = el ? el.offsetWidth : 300;
    return (slide / 100) * w;
  }, [slide]);

  const commitActive = useCallback((next) => {
    const val = modIndex(next);
    setActiveIndex(val);
    activeRef.current = val;
  }, []);

  const navigate = useCallback(
    (next) => {
      setTransitioning(true);
      setOffset(0);
      commitActive(next);
    },
    [commitActive],
  );

  const goTo = useCallback(
    (target) => {
      const current = activeRef.current;
      let diff = modIndex(target - current);
      if (diff > N / 2) diff -= N;
      navigate(current + diff);
    },
    [navigate],
  );

  const settle = useCallback(
    (newActive, residual) => {
      setTransitioning(false);
      setOffset(residual);
      commitActive(newActive);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransitioning(true);
          setOffset(0);
        });
      });
    },
    [commitActive],
  );

  const onPointerDown = (event) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    const el = event.currentTarget;
    el.setPointerCapture(event.pointerId);
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastT: performance.now(),
      velocity: 0,
      moved: false,
      offsetUnits: 0,
      stepPx: getStepPx(),
    };
    setDragging(true);
    setTransitioning(false);
    setOffset(0);
  };

  const onPointerMove = (event) => {
    const d = dragRef.current;
    if (!d) return;
    const dx = event.clientX - d.startX;
    const dy = event.clientY - d.startY;
    if (!d.moved && Math.hypot(dx, dy) < 6) return;
    d.moved = true;

    const now = performance.now();
    const dt = Math.max(now - d.lastT, 1);
    d.velocity = (event.clientX - d.lastX) / dt;
    d.lastX = event.clientX;
    d.lastT = now;

    d.offsetUnits = dx / d.stepPx;
    setOffset(d.offsetUnits);
  };

  const openIfActive = (targetEl) => {
    const card = targetEl?.closest?.('[data-menu-item]');
    if (!card) return;
    const idx = Number(card.dataset.menuItem);
    const off = normalizeOffset(idx - activeRef.current);
    const rounded = Math.round(off);
    if (rounded === 0) {
      setSelected(ITEMS[idx]);
    } else {
      goTo(activeRef.current + rounded);
    }
  };

  const onPointerUp = (event) => {
    const d = dragRef.current;
    if (!d) return;
    dragRef.current = null;
    setDragging(false);
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      /* noop */
    }

    if (!d.moved) {
      openIfActive(event.target);
      return;
    }

    const units = d.offsetUnits;
    let k = Math.round(units);
    if (d.velocity > 0.28) k = Math.max(k, Math.floor(units) + 1);
    else if (d.velocity < -0.28) k = Math.min(k, Math.ceil(units) - 1);
    k = clamp(k, -3, 3);

    settle(activeRef.current - k, units - k);
  };

  const onPointerCancel = () => {
    dragRef.current = null;
    setDragging(false);
    setTransitioning(true);
    setOffset(0);
  };

  const onKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      navigate(activeRef.current - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      navigate(activeRef.current + 1);
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelected(ITEMS[activeRef.current]);
    }
  };

  return (
    <>
      <div className="relative mx-auto max-w-[1500px]">
        <div className="relative">
          <div
            role="region"
            aria-label="Carousel Menu Nusantara"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerCancel}
            className={`relative overflow-hidden outline-none ${
              dragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ touchAction: 'pan-y', userSelect: 'none' }}
          >
            <div
              ref={stageRef}
              className="relative h-[480px] w-full sm:h-[560px] md:h-[600px]"
              style={{ perspective: '1500px' }}
            >
              {ITEMS.map((item, i) => {
                const raw = normalizeOffset(i - activeIndex) + offset;
                const ad = Math.abs(raw);
                const isActive = Math.round(raw) === 0;
                const inView = ad <= sideCount + 1.5;
                const clickable = ad <= sideCount + 0.5;

                const x = raw * slide;
                const z = -ad * depth;
                const ry = -raw * angle;
                const sc = Math.pow(scaleBase, ad);
                const opacity = clamp(1 - ad * 0.34, 0, 1);
                const brightness = clamp(1 - ad * 0.2, 0.12, 1);
                const blur = ad > 0 ? Math.min(ad * 0.7, 2) : 0;
                const zIndex = Math.round(100 - ad * 40);

                return (
                  <div
                    key={item.id}
                    data-menu-item={i}
                    aria-hidden={!inView}
                    className="mc-card absolute inset-0 m-auto aspect-[3/4] w-[min(74vw,290px)] overflow-hidden rounded-2xl bg-ink-soft sm:w-[320px] md:w-[340px]"
                    style={{
                      transform: `translateX(${x}%) translateZ(${z}px) rotateY(${ry}deg) scale(${sc})`,
                      opacity,
                      filter: `brightness(${brightness}) blur(${blur}px)`,
                      zIndex,
                      visibility: inView ? 'visible' : 'hidden',
                      pointerEvents: clickable ? 'auto' : 'none',
                      transformOrigin: 'center center',
                      willChange: 'transform, opacity, filter',
                      borderStyle: 'solid',
                      borderWidth: 1,
                      borderColor: isActive
                        ? 'rgba(194,31,36,0.7)'
                        : 'rgba(35,35,38,0.9)',
                      boxShadow: isActive
                        ? '0 0 0 1px rgba(194,31,36,0.35), 0 40px 90px rgba(0,0,0,0.65)'
                        : '0 24px 60px rgba(0,0,0,0.5)',
                      transition: transitioning
                        ? 'transform 320ms cubic-bezier(0.22, 1, 0.36, 1), opacity 320ms ease, filter 320ms ease'
                        : 'none',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.name}
                      draggable={false}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />

                    {item.badges.length > 0 && (
                      <div className="absolute left-4 top-4 flex flex-wrap gap-2">
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

                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-crimson-bright">
                        {item.category}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-extrabold leading-tight text-white">
                        {item.name}
                      </h3>
                      <div className="mt-1 text-xl font-bold text-white">
                        {formatRupiah(item.price)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate(activeIndex - 1)}
            aria-label="Menu sebelumnya"
            className="absolute left-2 top-1/2 z-30 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition-colors hover:border-crimson/60 hover:text-white active:border-crimson active:bg-crimson active:text-white sm:left-5"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => navigate(activeIndex + 1)}
            aria-label="Menu berikutnya"
            className="absolute right-2 top-1/2 z-30 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition-colors hover:border-crimson/60 hover:text-white active:border-crimson active:bg-crimson active:text-white sm:right-5"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 px-6">
          <span className="text-xs font-semibold tabular-nums tracking-[0.2em] text-paper-faint">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-1.5">
            {ITEMS.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ke ${item.name}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 bg-crimson-bright'
                    : 'w-1.5 bg-ink-line hover:bg-paper-faint'
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold tabular-nums tracking-[0.2em] text-paper-faint">
            {String(N).padStart(2, '0')}
          </span>
        </div>
      </div>

      <MenuModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}