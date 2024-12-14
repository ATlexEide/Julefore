export function filterByFood(value, families = families) {
  const filteredList = [];
  families.forEach((family) => {
    if (
      value === "other" &&
      family.preferences.food !== "ribbe" &&
      family.preferences.food !== "pinnekjøtt"
    ) {
      filteredList.push(family);
    } else if (family.preferences.food === value) {
      filteredList.push(family);
    }
  });
  console.log("filtered: ", filteredList);
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
export function filterByGifts(value, families = families) {
  const filteredList = [];
  families.forEach((family) => {
    if (family.preferences.gifts.toString() === value)
      filteredList.push(family);
  });
  return filteredList;
}
export function filterByPets(value, families = families) {
  const filteredList = [];
  families.forEach((family) => {
    if (family.preferences.pets.hasPets.toString() === value)
      filteredList.push(family);
  });
  return filteredList;
}
export function filterByResidents(value, families = families) {
  const filteredList = [];
  families.forEach((family) => {
    if (family.preferences.residents.toString() <= value)
      filteredList.push(family);
  });
  return filteredList;
}
// TODO: Add filter by residents
