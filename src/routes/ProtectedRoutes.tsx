import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { Shell } from "../layouts";
import { RoutePaths } from "./route-path.enum";
const ProtectedRoutes: FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.authUser);
  console.log({ isAuthenticated });

  if (!isAuthenticated) {
    return (
      <Navigate
        to={RoutePaths.Login}
        state={{ path: location.pathname }}
        replace
      />
    );
  }
  return <Shell />;
};

export default ProtectedRoutes;
