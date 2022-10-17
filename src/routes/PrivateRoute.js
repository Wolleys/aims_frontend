import { Navigate } from "react-router-dom";

function PrivateRoute({ isAuth, children }) {
  if (isAuth?.status === false) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRoute;
