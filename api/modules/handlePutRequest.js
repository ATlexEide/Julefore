export function updateFamily(req, families) {
  const family = families.find((family) => {
    return family.id === Number(req.params.familyId);
  });
  if (!family) throw new Error("Family not found");
  console.log(family);
}
