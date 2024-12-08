export function filterByFood(value, families) {
  const filtered = [];
  families.forEach((family) => {
    if (family.preferences.food === value) filtered.push(family);
    return filtered;
  });
}
