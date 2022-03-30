import User from '../schemas/User';

interface User {
  username: string;
  password: string;
  email: string;
}

export const isUserValid = async (user: User) => {
  const { username, password, email } = user;
  if (username == undefined || password == undefined || email == undefined) {
    return false;
  }

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
  if (password == undefined) {
    return false;
  }
  return password != '';
};

export const isUsernameValid = (username: string) => {
  if (username == undefined) {
    return false;
  }
  return username != '';
};

export const isEmailValid = (email: string) => {
  if (email == undefined) {
    return false;
  }
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
