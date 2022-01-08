interface User {
  userName: string;
  password: string;
  email: string;
}

export const isUserValid = (user: User) => {
  const { userName, password, email } = user;
  return (
    isUserNameValid(userName) &&
    isPasswordValid(password) &&
    isEmailValid(password)
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
  // To change
  return true;
};
