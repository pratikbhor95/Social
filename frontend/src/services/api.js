const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const registerUser = async (userData) => {
  const response = await fetch(`${API_BASE_URL}/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMsg = Array.isArray(data.detail) 
      ? data.detail[0].msg 
      : (data.detail || 'Registration failed');
    throw new Error(errorMsg);
  }

  return data;
};

export const loginUser = async (email, password) => {
  const urlEncodedData = new URLSearchParams();
  urlEncodedData.append('username', email);
  urlEncodedData.append('password', password);

  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: urlEncodedData,
  });

  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Server error or invalid route configuration.");
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || 'Invalid email or password');
  }

  return data; // Returns the token data (e.g., access_token)
};