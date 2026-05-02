import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "./hooks/useLanguage";
import { Home } from "./components/Home";
import { UsagePolicy } from "./components/UsagePolicy";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsConditions } from "./components/TermsConditions";
import { Login } from "./components/Login";
import { ForgetPassword } from "./components/ForgetPassword";
import { Otp } from "./components/Otp";
import { ResetPassword } from "./components/ResetPassword";
import Register from "./components/Register";
import "./styles/index.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

export const App = () => {
  useLanguage();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usage-policy" element={<UsagePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
