import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/hero-img.png"
          alt="banner"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute top-4 left-6 z-10">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Les petits plats"
              width={200}
              height={40}
            />
          </Link>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-[#FFD15B] text-5xl font-bold mb-4">404 :(</h1>
          <p className="text-xl">La page que vous demandez est introuvable.</p>
        </div>
      </div>
      <div className="flex-1 bg-black" />
      <footer className="text-center text-gray-400 text-sm py-4 bg-black">
        Copyright © 2025 - Les Petits Plats
      </footer>
    </div>
  );
}
