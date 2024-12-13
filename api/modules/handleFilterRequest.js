import {
  filterByFood,
  filterByAllergyFriendly,
  filterByAlcohol,
  filterByGifts,
  filterByPets,
} from "./filters.js";
export function filterFamilies(parameters, families) {
  console.log(parameters);
  if (Object.keys(parameters).length === 0) return families;
  let filtered = families;
  for (const [param, value] of Object.entries(parameters)) {
    switch (param) {
      case "food":
        filtered = filterByFood(value, filtered);
        break;
      case "alcohol":
        filtered = filterByAlcohol(value, filtered);
        break;
      case "allergy-friendly":
        filtered = filterByAllergyFriendly(value, filtered);
        break;
      case "gifts":
        filtered = filterByGifts(value, filtered);
        break;
      case "pets":
        filtered = filterByPets(value, filtered);
        break;

      default:
        break;
    }
  }
  return filtered;
}
