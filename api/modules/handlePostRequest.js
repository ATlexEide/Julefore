export function createFamily(req, families) {
  req.body.id = crypto.randomUUID();
  families.push(req.body);
}
