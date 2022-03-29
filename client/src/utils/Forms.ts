export const isEmailValid = (email: string) => {
  return email.includes('@') && email.includes('.') && email.length > 5;
};