type DropdownItem = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

type Dropdownrops = {
  items: DropdownItem[];
  className?: string;
};

export function Dropdown({ items, className }: Dropdownrops) {
  return (
    <div className={`absolute z-30 bg-white ${className || ""}`}>
      {items.map((item) => (
        <button
          key={item.label}
          disabled={item.disabled}
          className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100 disabled:opacity-50"
          onClick={item.onClick}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
