import Dropdown from './dropdown';

type Props = {
  ingredients: string[];
  appareils: string[];
  ustensiles: string[];
  selectedIngredients: string[];
  selectedAppareils: string[];
  selectedUstensiles: string[];
  onSelectIngredient: (v: string) => void;
  onRemoveIngredient: (v: string) => void;
  onSelectAppareil: (v: string) => void;
  onRemoveAppareil: (v: string) => void;
  onSelectUstensile: (v: string) => void;
  onRemoveUstensile: (v: string) => void;
  count: number;
};

export default function TagFilter({
  ingredients,
  appareils,
  ustensiles,
  selectedIngredients,
  selectedAppareils,
  selectedUstensiles,
  onSelectIngredient,
  onRemoveIngredient,
  onSelectAppareil,
  onRemoveAppareil,
  onSelectUstensile,
  onRemoveUstensile,
  count,
}: Props) {
  return (
    <div className="flex items-start justify-between px-16 py-4 w-full">
      <div className="flex gap-4">
        <Dropdown
          label="Ingrédients"
          options={ingredients}
          selected={selectedIngredients}
          onSelect={onSelectIngredient}
          onRemove={onRemoveIngredient}
        />
        <Dropdown
          label="Appareils"
          options={appareils}
          selected={selectedAppareils}
          onSelect={onSelectAppareil}
          onRemove={onRemoveAppareil}
        />
        <Dropdown
          label="Ustensiles"
          options={ustensiles}
          selected={selectedUstensiles}
          onSelect={onSelectUstensile}
          onRemove={onRemoveUstensile}
        />
      </div>
      <p className="text-lg font-bold">{count} recettes</p>
    </div>
  );
}
