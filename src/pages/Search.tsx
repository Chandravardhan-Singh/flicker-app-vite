import React, { FC, useEffect, useMemo, useState } from "react";
import { useSearchImageQuery } from "../redux/api/products/flickerAPI";
import ImageCard from "../components/ImageCard/Imagecard";
import "./style.css";
import "./search.css";
import { ScreenContainer } from "../layouts";
import { Chip, Grid, Pagination, Stack } from "@mui/material";
import { Loader } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { RoutePaths } from "../routes/route-path.enum";
import SearchIcon from "@mui/icons-material/Search";
import debounce from "lodash.debounce";

const searchChips = ["cat", "car", "bus", "nature", "landscape"];

export const Search: FC = () => {
  const { tag } = useParams();
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState<string>(tag ?? "dog");
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSearchImageQuery(
    {
      tags: searchText ?? tag,
      page,
    },
    {
      refetchOnFocus: false,
    }
  );

  const searchHandler = useMemo(
    () =>
      debounce(
        (searchQuery) => {
          const text = !!searchQuery ? searchQuery : tag ?? "dog";
          navigate(RoutePaths.search + "/" + text);
        },
        1000,
        {
          leading: false,
          trailing: true,
        }
      ),
    []
  );

  useEffect(() => {
    return () => {
      searchHandler.cancel();
    };
  }, [searchHandler]);

  useEffect(() => {
    setSearchText(tag ?? "dog");
  }, [tag]);

  useEffect(() => {
    setPage(data?.photos.page || 1);
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ScreenContainer>
      <Grid
        container
        spacing={2}
        mt={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          item
          md={10}
          xs={11}
          sm={11}
          lg={7}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <div className="search-container">
            <input
              className="search-input"
              onChange={(e) => {
                searchHandler(e.target.value);
              }}
              placeholder="Search here"
            />
            <SearchIcon fontSize="large" color="primary" />
          </div>
        </Grid>
        <Grid
          item
          md={12}
          xs={12}
          lg={6}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            direction="row"
            spacing={2}
            alignSelf={"center"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {searchChips.map((tag) => (
              <Chip
                label={tag}
                style={{ marginRight: 4, textTransform: "capitalize" }}
                onClick={() => {
                  navigate(RoutePaths.search + "/" + tag);
                }}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        {data?.photos.photo.map((image) => {
          return (
            <Grid item md={3} xs={12}>
              <ImageCard image={image} />
            </Grid>
          );
        })}
      </Grid>
      <Grid
        item
        md={3}
        xs={12}
        spacing={2}
        mt={4}
        mb={4}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Stack spacing={1}>
          <Pagination
            style={{
              margin: 5,
              alignSelf: "center",
            }}
            count={data?.photos.pages}
            variant="outlined"
            color="primary"
            page={page}
            onChange={(e, selectedPage) => {
              setPage(selectedPage);
            }}
          />
        </Stack>
      </Grid>
    </ScreenContainer>
  );
};
