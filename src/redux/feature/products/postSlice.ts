import {
  PayloadAction,
  createAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { login, logout } from "./authSlice";

interface IPost {
  post: string;
}

interface IPostProps {
  posts: IPost[];
}

const initialState: IPostProps = {
  posts: [],
};

// const createPost = createAction<string>("createPost");

export const loadPost = createAsyncThunk("post/loadPost", async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (error) {
    throw Error(`${error}`);
  }
});

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    createPost: (state, action: PayloadAction<IPost>) => {
      const newPost = { post: action.payload.post };
      state.posts = [...state.posts, newPost];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout, (state, action) => {
        state.posts = [];
      })
      .addCase(login, (state, action) => {
        state.posts = [
          {
            post: "User Default Post",
          },
        ];
      })
      .addCase(loadPost.pending, (state, action) => {
        console.log("loading");
      })
      .addCase(loadPost.fulfilled, (state, action) => {
        console.log("-->", action.payload);
        state.posts = action.payload;
      })
      .addCase(loadPost.rejected, (state, action) => {
        console.log("error", action.error);
      });
  },
});

export const { createPost } = postSlice.actions;
// ? Export the authSlice.reducer to be included in the store.
export default postSlice.reducer;
