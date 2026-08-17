'use client';

import { useState } from 'react';
import { MENU_ITEMS } from './menu-data';
import MenuCard from './MenuCard';
import MenuModal from './MenuModal';

export default function MenuCatalog() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MENU_ITEMS.map((item) => (
          <MenuCard key={item.id} item={item} onSelect={setSelected} />
        ))}
      </div>
      <MenuModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
}