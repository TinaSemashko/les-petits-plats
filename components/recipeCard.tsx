import Image from 'next/image';
import Link from 'next/link';
import { Recipe } from '@/types/recipe';

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <Link href={`/recette/${recipe.slug}`} className="block h-full">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full">
        <div className="relative h-48">
          <Image
            src={`/images/${recipe.image}`}
            alt={recipe.name}
            fill
            className="object-cover"
          />
          <span className="absolute top-2 right-2 bg-yellow-400 text-black text-sm px-4 py-1 rounded-full">
            {recipe.time}min
          </span>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{recipe.name}</h2>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Recette
          </h3>
          <p className="text-sm text-gray-600 mb-4">{recipe.description}</p>
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Ingrédients
          </h3>
          <div className="grid grid-cols-2 gap-y-4 text-sm">
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
        </div>
      </div>
    </Link>
  );
}
