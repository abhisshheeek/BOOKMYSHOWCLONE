import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { AuthProvider } from "./AuthContext";


const App = () => {
  return (
    <AuthProvider> {/* ✅ Wrap everything inside AuthProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
