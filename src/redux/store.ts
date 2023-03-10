import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/products/authSlice";
import { flickerAPI } from "./api/products/flickerAPI";
import postReducer from "./feature/products/postSlice";

export const store = configureStore({
  reducer: {
    authUser: authReducer,
    [flickerAPI.reducerPath]: flickerAPI.reducer,
    post: postReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({}).concat([flickerAPI.middleware]);
  },
  devTools: true,
});

export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
