'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(value);
    }, 300);
    return () => clearTimeout(timer);
  }, [value, onSearch]);

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Rechercher une recette, un ingrédient..."
        className="w-full py-4 px-6 pr-14 rounded-xl text-black bg-white"
      />
      <button
        onClick={() => onSearch(value)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black rounded-lg p-3 cursor-pointer"
      >
        <Image
          src="/images/search-icon.png"
          alt="search"
          width={20}
          height={20}
        />
      </button>
    </div>
  );
}
