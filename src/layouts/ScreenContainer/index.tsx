import { Container } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ScreenContainer = (props: Props) => {
  return <Container fixed>{props.children}</Container>;
};
