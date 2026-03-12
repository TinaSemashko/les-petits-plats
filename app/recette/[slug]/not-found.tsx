import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col bg-black">
      <div className="relative w-full h-[93vh]">
        <Image
          src="/images/hero-img.png"
          alt="banner"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute top-6 left-6 z-10">
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
          <h1 className="text-[#FFD15B] text-5xl font-bold italic mb-4">
            404 :(
          </h1>
          <p className="text-xl font-bold italic">
            La page que vous demandez est introuvable.
          </p>
        </div>
      </div>
      <div className="h-1 bg-green-600" />
    </div>
  );
}
