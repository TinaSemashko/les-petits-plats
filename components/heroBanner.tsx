import Image from 'next/image';
import SearchBar from './searchBar';
import { anton } from '@/lib/fonts';

export default function HeroBanner() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/hero-img.png"
        alt="hero banner"
        fill
        className="object-cover"
        priority
      />
      <Image
        src="/images/logo.png"
        alt="Les petits plats"
        width={200}
        height={50}
        className="absolute top-6 left-6 z-10"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-6 text-white">
        <h1
          className={`${anton.className} text-[#FFD15B] text-5xl text-center max-w-2xl pb-4 leading-normal`}
        >
          DÉCOUVREZ NOS RECETTES DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES
        </h1>
        <SearchBar />
      </div>
    </div>
  );
}
