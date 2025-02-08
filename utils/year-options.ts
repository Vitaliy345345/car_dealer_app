export const yearOptions = Array.from(
  { length: 2025 - 2015 + 1 },
  (_, index) => ({
    label: String(2015 + index),
    value: 2015 + index,
  })
);
