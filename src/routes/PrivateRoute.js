import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);

  if (isAuth?.status === false) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRoute;
