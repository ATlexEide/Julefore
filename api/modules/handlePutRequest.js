export function updateFamily(req, families) {
  if (!families) throw new Error("No families provided");
  let family = families.find((family) => {
    return family.id === Number(req.params.familyId);
  });
  for (const [key, value] of Object.entries(req.body)) {
    switch (key) {
      case "title":
        family.title = value;
        break;
      case "description":
        family.description = value;
        break;
      case "image":
        family.image = value;
        break;
      case "food":
        family.preferences.food = value;
        break;
      case "allergy_friendly":
        family.preferences.allergy_friendly = value;
        break;
      case "alcohol":
        family.preferences.alcohol = value;
        break;
      case "gifts":
        family.preferences.gifts = value;
        break;
      case "pets":
        family.preferences.pets.hasPets = value;

      case "species":
        family.preferences.pets.species = value;

        break;
      case "residents":
        family.preferences.residents = value;
        break;

      default:
        throw new Error(`Unknown propterty: ${key}`);
    }
  }
  console.log(family);
  console.log(req.body);
}
