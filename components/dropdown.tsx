import { useState } from 'react';

type Props = {
  label: string;
  options: string[];
  selected: string[];
  onSelect: (value: string) => void;
  onRemove: (value: string) => void;
};

export default function Dropdown({
  label,
  options,
  selected,
  onSelect,
  onRemove,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');

  const filtered = options.filter(
    (opt) =>
      opt.toLowerCase().includes(search.toLowerCase()) &&
      !selected.includes(opt),
  );

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-48 bg-white rounded-xl px-4 py-3 text-sm"
      >
        {label}
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 w-48 bg-white rounded-xl shadow-md z-20 p-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={`Rechercher un ${label.toLowerCase()}`}
            className="w-full px-3 py-2 text-sm border-b outline-none"
          />
          <ul className="max-h-48 overflow-y-auto">
            {filtered.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  onSelect(opt);
                  setSearch('');
                  setIsOpen(false);
                }}
                className="px-3 py-2 text-sm cursor-pointer hover:bg-yellow-100"
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selected.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 bg-[#FFD15B] text-sm px-3 py-1 rounded-full"
            >
              {tag}
              <button onClick={() => onRemove(tag)} className="text-black">
                ✕
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
