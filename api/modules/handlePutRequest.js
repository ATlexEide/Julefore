export function updateFamily(req, families) {
  if (!families) throw new Error("NO families provided");
  let family = families.find((family) => {
    return family.id === Number(req.params.familyId);
  });
  if (!family) throw new Error("Family not found");
  // console.log(family);
  for (const [key, value] of Object.entries(req.body)) {
    if (value.constructor === Object) {
      for (const [key, secondaryValue] of Object.entries(value)) {
        console.log(key, secondaryValue);
      }
    }
    // console.log(family);
    family.key = value;
  }
  // console.log(family);
}
