import React, { FC, useEffect, useState } from "react";
import { useSearchImageQuery } from "../redux/api/products/flickerAPI";
import ImageCard from "../components/ImageCard/Imagecard";
import "./style.css";
import { ScreenContainer } from "../layouts";
import { Box, Chip, CircularProgress, Grid, Stack } from "@mui/material";
import { Loader } from "../components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RoutePaths } from "../routes/route-path.enum";

const searchChips = ["Cat", "Car", "Bus", "nature", "Landscape"];

export const Search: FC = () => {
  const { tag } = useParams();
  const { data, error, isLoading } = useSearchImageQuery(tag ?? "", {
    refetchOnFocus: false,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScreenContainer>
      <Grid container spacing={2} mt={2}>
        <Grid item md={12} xs={12}>
          <Stack direction="row" spacing={1}>
            {searchChips.map((tag) => (
              <Link to={RoutePaths.search + "/" + tag}>
                <Chip label={tag} style={{ marginRight: 4 }} />
              </Link>
            ))}
          </Stack>
        </Grid>
        {data?.photos.photo.map((image) => {
          return (
            <Grid item md={3} xs={12}>
              <ImageCard image={image} />
            </Grid>
          );
        })}
      </Grid>
    </ScreenContainer>
  );
};
