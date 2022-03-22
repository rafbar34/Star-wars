import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../UserAuthContext/UserAuthContext";
 function ProtectedRoute({ children }) {
<<<<<<< HEAD
  
  const { user } = useUserAuth();
=======
>>>>>>> aafc34692d9e559baa2d6d517f6e35bce8698564
  
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }

  return children;
}
export default ProtectedRoute;
