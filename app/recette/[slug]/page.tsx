import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import recipes from '@/data/recipes.json';
import { Recipe } from '@/types/recipe';

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function RecipePage({ params }: Props) {
  const { slug } = await params;
  const recipe = (recipes as Recipe[]).find((r) => r.slug === slug);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#EDEDED]">
      <div className="w-full bg-black py-3 px-6">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Les petits plats"
            width={200}
            height={40}
          />
        </Link>
      </div>
      <div className="flex bg-white rounded-2xl overflow-hidden shadow-md max-w-5xl mx-auto mt-8">
        <div className="relative w-1/2 min-h-[500px] shrink-0">
          <Image
            src={`/images/${recipe.image}`}
            alt={recipe.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="w-1/2 py-8 px-8">
          <h1 className="text-2xl font-bold mb-4">{recipe.name}</h1>

          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Temps de préparation
          </h3>
          <span className="bg-[#FFD15B] text-sm px-4 py-1 rounded-full">
            {recipe.time}min
          </span>

          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-6 mb-2">
            Ingrédients
          </h3>
          <div className="grid grid-cols-3 gap-y-4 text-sm mb-6">
            {recipe.ingredients.map((ing, i) => (
              <div key={i}>
                <span className="font-bold">{ing.ingredient}</span>
                <br />
                <span className="text-gray-500">
                  {ing.quantity ?? ''}
                  {ing.unit ? ` ${ing.unit}` : ''}
                </span>
              </div>
            ))}
          </div>

          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Ustensiles nécessaires
          </h3>
          <div className="text-sm mb-6">
            {recipe.ustensils.map((u, i) => (
              <p key={i}>{u}</p>
            ))}
          </div>

          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Appareils nécessaires
          </h3>
          <p className="text-sm mb-6">{recipe.appliance}</p>

          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Recette
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
            {recipe.description}
          </p>
        </div>
      </div>
    </div>
  );
}
