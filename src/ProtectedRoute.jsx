import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(userContext);
  console.log(user);
  if (user === null) {
    return <Navigate to={"/login"} />;
  }
  return children;
};

export default ProtectedRoute;
