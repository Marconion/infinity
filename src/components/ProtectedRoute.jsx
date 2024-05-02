import React, { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function ProtectedRoute({ path, element }) {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? (
    <Routes>
      <Route path={`${path}/*`} element={element} />
    </Routes>
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoute;
