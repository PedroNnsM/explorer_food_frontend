import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewDishe } from "../pages/NewDishe";

import { useAuth } from "../hooks/auth";
import { EditDishe } from "../pages/EditDishe";
import { ShowDishe } from "../pages/ShowDishe";

export function AppRoutes() {
  const { user } = useAuth();

  const isAdmin = user.admin;
  return (
    <>
      {isAdmin ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo-prato" element={<NewDishe />} />
          <Route path="/editar-prato" element={<EditDishe />} />

          <Route path="/prato" element={<ShowDishe />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </>
  );
}
