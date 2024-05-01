import { useContext } from "react";
import { useRoutes, Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const ProtectedRoute = ({ path, element }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? useRoutes([{ path, element }]) : <Navigate to="/login" />;
};
