import {
  filterByFood,
  filterByAllergyFriendly,
  filterByAlcohol,
  filterByGifts,
  filterByPets,
} from "./filters.js";
export function filterFamilies(parameters, families) {
  console.log("parameters: \n", parameters);
  if (Object.keys(parameters).length === 0)
    throw new Error("no parameters provided");
  let filtered = families;
  for (const [param, value] of Object.entries(parameters)) {
    console.log("current param: ", param);
    console.log(filtered);
    switch (param) {
      case "food":
        console.log("Filtering by food");
        filtered = filterByFood(value, filtered);
        console.log(filtered);
        break;
      case "alcohol":
        console.log("Filtering by alcohol");
        filtered = filterByAlcohol(value, filtered);
        console.log(filtered);
        break;
      case "allergy-friendly":
        console.log("Filtering by allergy friendly");
        filtered = filterByAllergyFriendly(value, filtered);
        break;
      case "gifts":
        console.log("Filtering by allergy friendly");
        filtered = filterByGifts(value, filtered);
        break;
      case "pets":
        console.log("Filtering by allergy friendly");
        filtered = filterByPets(value, filtered);
        break;

      default:
        break;
    }
  }
  return filtered;
}

// function filterFamilies(param, value, families) {
//   families.forEach((family) => {
//     console.log(family.preferences[param]);
//     console.log("VAL", value);
//     if (family.preferences[param] === value) {
//       console.log("match");
//       filtered.push(family);
//     }
//   });
// }
