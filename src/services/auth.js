const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL || '';

export async function verifyPassword(password, role) {
  const response = await fetch(AUTH_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, role }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Authentication failed' }));
    throw new Error(error.message || 'Invalid password');
  }

  return response.json();
}

export async function loginAsContractor(password) {
  return verifyPassword(password, 'contractor');
}

export async function loginAsAdmin(password) {
  return verifyPassword(password, 'admin');
}
