import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { Shell } from "../layouts";
import { RoutePaths } from "./route-path.enum";
const PublicRoutes: FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.authUser);
  const location = useLocation();
  if (isAuthenticated) {
    return (
      <Navigate
        to={RoutePaths.Root}
        state={{ path: location.pathname }}
        replace
      />
    );
  }
  return <Shell />;
};

export default PublicRoutes;
