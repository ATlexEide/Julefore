export function createFamily(req, families) {
  if (!Object.keys(req.body).length) throw new Error("Body required");
  if (
    !req.body.image ||
    !req.body.title ||
    !req.body.description ||
    Object.keys(req.body.preferences).length !== 6
  )
    throw new Error("Please ensure to include all properties");
  req.body.id = crypto.randomUUID();
  families.push(req.body);
}
