import { Recipe } from '@/types/recipe';
import RestaurantCard from './restaurantCard';

type Props = {
  recipes: Recipe[];
};

export default function RecipeGrid({ recipes }: Props) {
  return (
    <div className="grid grid-cols-3 gap-10 px-20 py-8">
      {(recipes as Recipe[]).map((recipe) => (
        <RestaurantCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
