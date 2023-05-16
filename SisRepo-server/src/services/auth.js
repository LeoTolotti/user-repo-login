import bcryptjs, { hash } from "bcryptjs";

export const createPasswordHash = async (password) => {
  return bcryptjs.hash(password, 10);
};

export const checkPassword = async (user, password) => {
  const match = await bcryptjs.compare(password, user.password);
  return match;
};
