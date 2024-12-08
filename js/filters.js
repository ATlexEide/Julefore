import { filtered } from "./getHandlers.js";
export function filterByFood(value, families) {
  families.forEach((family) => {
    if (family.preferences.food === value) filtered.push(family);
    // console.log(filtered);
  });
}
export function filterByAllergyFriendly(value, families) {
  const filtered = [];
  families.forEach((family) => {
    if (family.preferences["allergy-friendly"] === value) filtered.push(family);
  });
}
