import React, { createContext, useState, useEffect } from "react";
import { login, signUp } from "./authService"; // ✅ Import Auth API

interface AuthContextType {
  user: any;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const loginUser = async (email: string, password: string) => {
    try {
      const data = await login(email, password);

      if (data.success) {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token); // ✅ Store token
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error("Login failed", error);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const data = await signUp(name, email, password);
      
      if (data.success) {
        return await loginUser(email, password); // ✅ Auto-login after signup
      } else {
        return false;
      }
    } catch (error) {
      console.error("Signup failed:", error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token"); // ✅ Remove token on logout
  };

  return (
    <AuthContext.Provider value={{ user, login: loginUser, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
