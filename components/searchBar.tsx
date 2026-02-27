import Image from 'next/image';

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        placeholder="Rechercher une recette, un ingrédient..."
        className="w-full py-4 px-6 pr-14 rounded-xl text-black bg-white"
      />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black rounded-lg p-3">
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
