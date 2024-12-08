import { filterByFood, filterByAllergyFriendly } from "./filters.js";
export function getFamilyHandler(req, families) {
  const parameters = req.query;
  console.log("filtering");
  console.log("parameters: \n", parameters);
  let filtered = [];
  if (Object.keys(parameters).length === 0)
    throw new Error("no parameters provided");
  for (const [param, value] of Object.entries(parameters)) {
    switch (param) {
      case "food":
        console.log("Filtering by food");
        filterByFood(value, families);
        break;
      case "allergy-friendly":
        console.log("Filtering by allergy friendly");
        filterByAllergyFriendly(value, families);
        break;

      default:
        break;
    }
  }
}

function filterFamilies(param, value, families) {
  families.forEach((family) => {
    console.log(family.preferences[param]);
    console.log("VAL", value);
    if (family.preferences[param] === value) {
      console.log("match");
      filtered.push(family);
    }
  });
}
