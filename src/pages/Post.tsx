import React, { useState } from "react";
// import "./style.css";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { loadPost } from "../redux/feature/products/postSlice";
import { Button, InputField, PostItem } from "../components";
import { Grid } from "@mui/material";
type Props = {};

export default (props: Props) => {
  const [post, setPost] = useState<string>("");
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((store) => store.post);

  const onPostSubmitPressed = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    dispatch(loadPost());
  };
  return (
    <div>
      <form>
        <InputField
          type="text"
          label="Write Post"
          placeholder="What's on your mind"
          onChange={(e) => setPost(e.target.value)}
          value={post}
        />
        <Button onClick={onPostSubmitPressed} title="Generate" />
      </form>

      <Grid container spacing={2}>
        {posts?.map((post) => {
          return (
            <Grid item lg={2}>
              <PostItem post={post} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
