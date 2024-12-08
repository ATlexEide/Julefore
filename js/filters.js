export function filterByFood(value, families = families) {
  const filteredList = [];
  families.forEach((family) => {
    if (family.preferences.food === value) filteredList.push(family);
  });
  return filteredList;
}
export function filterByAlcohol(value, families = families) {
  const filteredList = [];
  families.forEach((family) => {
    if (family.preferences.alcohol.toString() === value)
      filteredList.push(family);
  });
  return filteredList;
}
export function filterByAllergyFriendly(value, families = families) {
  const filteredList = [];
  families.forEach((family) => {
    if (family.preferences.allergy_friendly.toString() === value)
      filteredList.push(family);
  });
  return filteredList;
}
