import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../../components";
import { useAppSelector } from "../../redux/hook";
import { RoutePaths } from "../../routes/route-path.enum";

type Props = {};

export const Shell = (props: Props) => {
  const { isAuthenticated } = useAppSelector((state) => state.authUser);
  const { pathname } = useLocation();

  const isRoot = pathname === RoutePaths.Root;
  console.log({ isRoot });

  return (
    <div className={"shell-container"}>
      {isAuthenticated && !isRoot && <Navbar />}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
