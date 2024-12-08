export function filterByFood(value, families) {
  const filtered = [];
  families.forEach((family) => {
    if (family.preferences.food === value) filtered.push(family);
    console.log(filtered);
    return filtered;
  });
}
export function filterByAllergyFriendly(value, families) {
  const filtered = [];
  families.forEach((family) => {
    if (family.preferences["allergy-friendly"] === value) filtered.push(family);
    return filtered;
  });
}
