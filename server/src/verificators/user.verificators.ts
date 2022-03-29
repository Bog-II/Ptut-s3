import User from '../schemas/User';

interface User {
  username: string;
  password: string;
  email: string;
}

export const isUserValid = async (user: User) => {
  const { username, password, email } = user;
  const emailExist = await isEmailExisting(email);
  const usernameExist = await isUsernameExisting(username);
  return (
    !usernameExist &&
    !emailExist &&
    isPasswordValid(password) &&
    isEmailValid(email)
  );
};

export const isPasswordValid = (password: string) => {
  // To change
  return true;
};

export const isUsernameValid = (useName: string) => {
  // To change
  return true;
};

export const isEmailValid = (email: string) => {
  return email.includes('@') && email.includes('.') && email.length > 5;
};

export const isUserIdExisting = async (userId: string) => {
  const user = await User.findOne({ _id: userId });
  return user !== null;
};

export const isEmailExisting = async (email: string) => {
  const user = await User.findOne({ email: email });
  return user !== null;
};

export const isUsernameExisting = async (username: string) => {
  const user = await User.findOne({ username: username });
  return user !== null;
};
