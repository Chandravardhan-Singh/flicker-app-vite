import React from "react";
import { IPost } from "../../redux/feature/products/postSlice";

type Props = {
  post: IPost;
};

export const PostItem = (props: Props) => {
  return (
    <div
      style={{
        width: "100%",
        padding: 10,
        margin: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <img
          src={props.post.picture.large}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "100%",
            bottom: 0,
            backgroundColor: "#00000070",
          }}
        >
          <p
            style={{
              paddingLeft: 10,
              color: "#fff",
            }}
          >
            <b>Age: </b>
            {`${props.post?.registered.age}`}
            <br />
            <b>Cell: </b>
            {`${props.post?.cell}`}
            <br />
          </p>
        </div>
      </div>

      <div>
        <h4>{`${props.post?.name?.title} ${props.post?.name?.first} ${props.post?.name?.last}`}</h4>
        <p>
          <b>Email: </b>
          {`${props.post?.email}`}
          <br />
          <b>Gender: </b>
          {`${props.post?.gender}`}
          <br />
          <b>Phone: </b>
          {`${props.post?.phone}`}
          <br />
        </p>
      </div>
      {/* <h4>{`${props.post?.registered.age}`}</h4>
      <h4>{`${props.post?.cell}`}</h4> */}
    </div>
  );
};
