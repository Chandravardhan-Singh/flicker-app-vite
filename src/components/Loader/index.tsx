import { Box, CircularProgress } from "@mui/material";
import React from "react";

type Props = {};

export const Loader = (props: Props) => {
  return (
    <Box
      justifyContent={"center"}
      alignItems={"center"}
      flex={1}
      display={"flex"}
      height={"60vh"}
    >
      <CircularProgress />
    </Box>
  );
};
