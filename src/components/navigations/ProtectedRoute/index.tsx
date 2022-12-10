import { ReactElement, ReactNode, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "src/context/AuthContext";
import RouteMap from "src/utils/route-map";

interface Props {
  redirectPath?: string;
  children: ReactNode | ReactElement;
}

const ProtectedRoute = ({ redirectPath = RouteMap.LOGIN, children }: Props) => {
  const authContext = useContext(AuthContext);

  if (!authContext.isLogin) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children ? children : <Outlet />}</>;
};

export default ProtectedRoute;
