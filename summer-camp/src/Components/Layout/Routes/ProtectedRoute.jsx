import React, { useContext } from "react";
import { AuthContext } from "../../Authorization/AuthProvider";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);
  if (isLoading) {
    <div className="text-center w-96">
      {" "}
      <h3>Loading</h3>
    </div>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
};

export default ProtectedRoute;
