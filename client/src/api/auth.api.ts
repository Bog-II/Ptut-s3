export const signupUser = async (
  email: string,
  username: string,
  password: string
) => {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      username: username,
      password: password,
    }),
  });

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error('Error while signing up user');
};
