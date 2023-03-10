import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { Shell } from "../layouts";
import { RoutePaths } from "./route-path.enum";

const ProtectedRoutes: FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useAppSelector((state) => state.authUser);

  if (isAuthenticated) {
    return <Shell />;
  } else {
    return (
      <Navigate
        to={RoutePaths.Login}
        state={{ path: location.pathname }}
        replace
      />
    );
  }
};

export default ProtectedRoutes;
