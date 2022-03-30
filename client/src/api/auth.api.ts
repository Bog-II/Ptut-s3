export const signUpUser = async (
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

export const signInUserWithEmail = async (email: string, password: string) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error('Error while signing in user');
};

export const signInUserWithUsername = async (
  username: string,
  password: string
) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error('Error while signing in user');
};

export const isUserLoggedIn = async () => {
  const response = await fetch('/api/auth/', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    return;
  }

  throw new Error('Error while checking if user is logged in');
};

export const deleteAccessTokenCookie = async () => {
  const response = await fetch('/api/auth/logout', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    return;
  }

  throw new Error('Error while logging out user');
};
