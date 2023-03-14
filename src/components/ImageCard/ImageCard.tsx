import React, { FC } from "react";
import { IImage } from "../../redux/feature/products/flickerSlice";
import "./ImageCard.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RoutePaths } from "../../routes/route-path.enum";
import { IMAGE_URL } from "../../utils";

interface IImageProp {
  image: IImage;
}

const ImageCard: FC<IImageProp> = (props) => {
  return (
    <Card style={{ marginTop: 10 }} data-testid="todo-1">
      <div className="media-container">
        <Link to={`${RoutePaths.ImageDetails}/${props.image?.id}`}>
          <CardMedia
            component={"img"}
            image={`${IMAGE_URL}/${props.image?.server}/${props.image?.id}_${props.image?.secret}_q.jpg`}
            className="imageCard"
          />
        </Link>
      </div>
      <CardContent>
        <Typography color={"#000"} variant="caption">
          {props.image?.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ImageCard;
