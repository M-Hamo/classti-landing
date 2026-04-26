import { Routes, Route, Navigate } from "react-router-dom";
import { useLanguage } from "./hooks/useLanguage";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { ForgetPassword } from "./components/ForgetPassword";
import { Otp } from "./components/Otp";
import { ResetPassword } from "./components/ResetPassword";
import Register from "./components/Register";

import "./styles/index.css";

export const App = () => {
  useLanguage();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
