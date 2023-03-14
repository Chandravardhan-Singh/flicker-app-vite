import {
  PayloadAction,
  createAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { login, logout } from "./authSlice";

enum gender {
  male = "male",
  female = "female",
}
export interface IPost {
  gender: gender;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;

  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
  };
}

interface IPostProps {
  posts: IPost[];
}

const initialState: IPostProps = {
  posts: [],
};

// const createPost = createAction<string>("createPost");

export const loadPost = createAsyncThunk<
  {
    info: {
      seed: string;
      results: number;
      page: number;
      version: string;
    };
    results: IPost[];
  },
  void
>("post/loadPost", async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  console.log(data);
  return data;
});

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    // createPost: (state, action: PayloadAction<IPost>) => {
    //   const newPost = { post: action.payload.post };
    //   state.posts = [...state.posts, newPost];
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout, (state, action) => {
        state.posts = [];
      })
      .addCase(loadPost.pending, (state, action) => {
        console.log("loading");
      })
      .addCase(loadPost.fulfilled, (state, action) => {
        console.log("-->", action.payload);
        state.posts = action.payload.results;
      })
      .addCase(loadPost.rejected, (state, action) => {
        console.log("error", action.error);
      });
  },
});

export const {} = postSlice.actions;
// ? Export the authSlice.reducer to be included in the store.
export default postSlice.reducer;
