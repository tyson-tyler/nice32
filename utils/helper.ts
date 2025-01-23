import bcrypt from "bcryptjs";
export function saltandHash(password: any) {
  const saltRount = 10;
  const salt = bcrypt.genSaltSync(saltRount);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}
