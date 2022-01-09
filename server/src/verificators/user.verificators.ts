import User from '../schemas/User';

interface User {
  userName: string;
  password: string;
  email: string;
}

export const isUserValid = async (user: User) => {
  const { userName, password, email } = user;
  const emailExist = await isEmailExisting(email);
  const userNameExist = await isUsernameExisting(userName);
  return (
    !userNameExist &&
    !emailExist &&
    isPasswordValid(password) &&
    isEmailValid(email)
  );
};

export const isPasswordValid = (password: string) => {
  // To change
  return true;
};

export const isUserNameValid = (useName: string) => {
  // To change
  return true;
};

export const isEmailValid = (email: string) => {
  return email.includes('@') && email.includes('.');
};

export const isUserIdExisting = async (userId: string) => {
  const user = await User.findOne({ _id: userId });
  return user !== null;
};

export const isEmailExisting = async (email: string) => {
  const user = await User.findOne({ email: email });
  return user !== null;
};

export const isUsernameExisting = async (userName: string) => {
  const user = await User.findOne({ userName: userName });
  return user !== null;
};
