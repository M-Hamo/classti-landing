import { Routes, Route } from "react-router-dom";
import { useLanguage } from "./hooks/useLanguage";
import { Home } from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import "./styles/index.css";

export const App = () => {
  useLanguage();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
