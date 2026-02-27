'use client';

import HeroBanner from '@/components/heroBanner';
import RecipeGrid from '@/components/recipeGrid';
import { useState } from 'react';
import recipes from '@/data/recipes.json';
import { Recipe } from '@/types/recipe';
import TagFilter from '@/components/tagFilter';

const allIngredients = [
  ...new Set(
    (recipes as Recipe[]).flatMap((r) =>
      r.ingredients.map((i) => i.ingredient),
    ),
  ),
];
const allAppareils = [
  ...new Set((recipes as Recipe[]).map((r) => r.appliance)),
];
const allUstensiles = [
  ...new Set((recipes as Recipe[]).flatMap((r) => r.ustensils)),
];

export default function Home() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [selectedAppareils, setSelectedAppareils] = useState<string[]>([]);
  const [selectedUstensiles, setSelectedUstensiles] = useState<string[]>([]);

  const filtered = (recipes as Recipe[]).filter((r) => {
    const matchIng = selectedIngredients.every((s) =>
      r.ingredients.some((i) => i.ingredient === s),
    );
    const matchApp =
      selectedAppareils.length === 0 || selectedAppareils.includes(r.appliance);
    const matchUst = selectedUstensiles.every((s) => r.ustensils.includes(s));
    return matchIng && matchApp && matchUst;
  });

  return (
    <div className="flex bg-[#EDEDED] min-h-screen items-center justify-center flex-col">
      <HeroBanner />
      <TagFilter
        ingredients={allIngredients}
        appareils={allAppareils}
        ustensiles={allUstensiles}
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
