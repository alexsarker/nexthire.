import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { BarLoader } from "react-spinners";

const PrivateRouting = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log("Loading state:", loading);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <BarLoader color="#3498db" width="100%" />
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signin" />;
};

export default PrivateRouting;
