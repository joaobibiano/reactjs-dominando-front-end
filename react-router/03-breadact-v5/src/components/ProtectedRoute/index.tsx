import { RouteProps, Route, Redirect } from "react-router-dom";

export const ProtectedRoute = (props: RouteProps) => {
  const token = localStorage.getItem("token");

  if (token) {
    return <Route {...props} />;
  }

  return <Redirect to="/login" />;
};
