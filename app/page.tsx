'use client';

import HeroBanner from '@/components/heroBanner';
import RecipeGrid from '@/components/recipeGrid';
import { useState } from 'react';
import recipes from '@/data/recipes.json';
import { Recipe } from '@/types/recipe';
import TagFilter from '@/components/tagFilter';

export default function Home() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedAppareils, setSelectedAppareils] = useState<string[]>([]);
  const [selectedUstensiles, setSelectedUstensiles] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = (recipes as Recipe[]).filter((r) => {
    const query = searchQuery.toLowerCase().trim();
    const matchSearch =
      query.length < 3 ||
      r.name.toLowerCase().includes(query) ||
      r.description.toLowerCase().includes(query) ||
      r.ingredients.some((i) => i.ingredient.toLowerCase().includes(query));
    const matchIng = selectedIngredients.every((s) =>
      r.ingredients.some((i) => i.ingredient === s),
    );
    const matchApp =
      selectedAppareils.length === 0 || selectedAppareils.includes(r.appliance);
    const matchUst = selectedUstensiles.every((s) => r.ustensils.includes(s));
    return matchSearch && matchIng && matchApp && matchUst;
  });

  const availableIngredients = [
    ...new Set(filtered.flatMap((r) => r.ingredients.map((i) => i.ingredient))),
  ].filter((i) => !selectedIngredients.includes(i));

  const availableAppareils = [
    ...new Set(filtered.map((r) => r.appliance)),
  ].filter((a) => !selectedAppareils.includes(a));

  const availableUstensiles = [
    ...new Set(filtered.flatMap((r) => r.ustensils)),
  ].filter((u) => !selectedUstensiles.includes(u));

  return (
    <div className="flex bg-[#EDEDED] min-h-screen items-center justify-center flex-col">
      <HeroBanner />
      <TagFilter
        ingredients={availableIngredients}
        appareils={availableAppareils}
        ustensiles={availableUstensiles}
        selectedIngredients={selectedIngredients}
        selectedAppareils={selectedAppareils}
        selectedUstensiles={selectedUstensiles}
        onSelectIngredient={(v) =>
          setSelectedIngredients([...selectedIngredients, v])
        }
        onRemoveIngredient={(v) =>
          setSelectedIngredients(selectedIngredients.filter((s) => s !== v))
        }
        onSelectAppareil={(v) =>
          setSelectedAppareils([...selectedAppareils, v])
        }
        onRemoveAppareil={(v) =>
          setSelectedAppareils(selectedAppareils.filter((s) => s !== v))
        }
        onSelectUstensile={(v) =>
          setSelectedUstensiles([...selectedUstensiles, v])
        }
        onRemoveUstensile={(v) =>
          setSelectedUstensiles(selectedUstensiles.filter((s) => s !== v))
        }
        count={filtered.length}
      />
      <RecipeGrid recipes={filtered} />
    </div>
  );
}
