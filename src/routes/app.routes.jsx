import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewDishe } from "../pages/NewDishe";

import { useAuth } from "../hooks/auth";

export function AppRoutes() {
  const { user } = useAuth();

  const isAdmin = user.admin;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {isAdmin ? (
        <Route path="/novo-prato" element={<NewDishe />} />
      ) : (
        alert("Sem Autorizaão de acesso")
      )}
    </Routes>
  );
}
