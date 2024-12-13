export function deleteFamily(req, families) {
  if (!families) throw new Error("No families provided");
  let family = families.find((family) => {
    return family.id.toString() === req.params.familyId;
  });
  if (!family) throw new Error("Family does not exist");
  const familyIndex = families.indexOf(family);
  families.splice(familyIndex, 1);
}
