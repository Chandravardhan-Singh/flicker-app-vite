import React from "react";

type Props = {
  post: string;
};

export const PostItem = (props: Props) => {
  return (
    <div>
      <h2>{props.post}</h2>
    </div>
  );
};
