import { Card, Typography } from "@mui/material";
import CameraIcon from "@mui/icons-material/Camera";
import React from "react";

type Props = {
  label: string;
  description: string;
  renderIcon: () => JSX.Element;
};

export const ImageInfo = (props: Props) => {
  return (
    <Card
      elevation={2}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        margin: 10,
        padding: 10,
      }}
    >
      {props.renderIcon()}
      <div>
        <Typography variant="h5" component={"h4"} textAlign={"center"}>
          {props.label}
        </Typography>
        <Typography variant="h4" component={"h4"}>
          {props.description}
        </Typography>
      </div>
    </Card>
  );
};
