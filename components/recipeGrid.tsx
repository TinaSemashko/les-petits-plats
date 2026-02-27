import { Recipe } from '@/types/recipe';
import RecipeCard from './recipeCard';

type Props = {
  recipes: Recipe[];
};

export default function RecipeGrid({ recipes }: Props) {
  return (
    <div className="grid grid-cols-3 gap-10 px-20 py-8">
      {(recipes as Recipe[]).map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
