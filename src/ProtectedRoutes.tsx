import { Navigate, RoutesProps } from "react-router-dom";

interface LayoutProps {
  children: RoutesProps;
}

const ProtectedRoutes = ({ children }: LayoutProps) => {
  const token = JSON.parse(sessionStorage.getItem("userId"));

  return token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
