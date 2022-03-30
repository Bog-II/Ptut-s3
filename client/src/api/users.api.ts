export const getUserInformation = async () => {
  const response = await fetch('/api/users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error('Error while getting user information');
};

export const updateUserInformation = async (username: string, email: string) => {
  const response = await fetch('/api/users/me', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error('Error while updating user information');
}

