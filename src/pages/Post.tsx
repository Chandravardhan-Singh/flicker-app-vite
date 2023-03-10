import React, { useState } from "react";
// import "./style.css";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { createPost, loadPost } from "../redux/feature/products/postSlice";
import { Button, InputField, PostItem } from "../components";
type Props = {};

export default (props: Props) => {
  const [post, setPost] = useState<string>("");
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((store) => store.post);

  const onPostSubmitPressed = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    // dispatch(loadPost());
    if (!!post) {
      dispatch(
        createPost({
          post,
        })
      );
      setPost("");
    }
  };
  return (
    <div className="content-container">
      <div className="col-4">
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
      </div>
      <div className="col-8">
        {posts.map((item) => {
          return <PostItem post={item.post} />;
        })}
      </div>
    </div>
  );
};
