import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function ProtectedRoute({ path, element }) {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" />
  );
}

export default ProtectedRoute;
