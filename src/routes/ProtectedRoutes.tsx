import { FC, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";
import { Shell } from "../layouts";
import { RoutePaths } from "./route-path.enum";
import { authenticate } from "../redux/feature/products/authSlice";
import { useDispatch } from "react-redux";
const ProtectedRoutes: FC = () => {
  const { isAuthenticated } = useAppSelector((state) => state.authUser);

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log({ pathname });

  useEffect(() => {
    console.log("here");
    dispatch(authenticate());
  }, []);
  if (pathname === RoutePaths.Root) {
    return (
      <>
        <Outlet />
      </>
    );
  }

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
