const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8081/api/auth";

export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  console.log("Login API Response:", data);
  if (!response.ok) throw new Error(data.message || "Login failed");

  if (data.jwttoken){
  localStorage.setItem("token", data.jwttoken); // ✅ Store token in localStorage
}else {
  throw new Error ("JWT Token missing from response")
}
  localStorage.setItem("user", JSON.stringify({ name: data.name, email: data.email }));
  return data;
};

export const signUp = async (name: string, email: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message || "Signup failed");

  return data;
};
