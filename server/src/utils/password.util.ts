import bcrypt from 'bcryptjs';

const rounds = parseInt(process.env.ROUNDS_SALT_BCRYPT);
const salt = bcrypt.genSaltSync(rounds);
const pepper = process.env.PEPPER_BCRYPT;

const pepperedPassword = (password: string) => {
  return password + pepper;
};

export const getHashedPassword = async (password: string) => {
  const passwordAndPepper = pepperedPassword(password);
  const hashedPassword = await bcrypt.hash(passwordAndPepper, salt);
  return hashedPassword;
};

