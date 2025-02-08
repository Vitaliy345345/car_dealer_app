interface Option {
  label: string;
  value: number;
}

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  value,
  options,
  placeholder,
  onChange,
}) => (
  <select
    className="p-3 border rounded w-full"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    <option value="">{placeholder}</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);
