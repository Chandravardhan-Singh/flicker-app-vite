import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../../components";
import { useAppSelector } from "../../redux/hook";

type Props = {};

export const Shell = (props: Props) => {
  const { isAuthenticated } = useAppSelector((state) => state.authUser);

  return (
    <div className={"shell-container"}>
      {isAuthenticated && <Navbar />}
      <div>
        <Outlet />
      </div>
    </div>
  );
};
