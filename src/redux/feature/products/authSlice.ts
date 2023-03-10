import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUser {
  // _id: string;
  // name: string;
  email: string;
  password: string;
  // photo: string;
  // role: string;
  // provider?: string;
  // active?: boolean;
  // verified?: boolean;
  // createdAt: Date;
  // updatedAt: Date;
  // __v: number;
  // id: string;
}

interface AuthState {
  user?: IUser | null;
  isAuthenticated: boolean;
  rememberMe: boolean;
}

const initialState: AuthState = {
  user: {},
  isAuthenticated: false,
  rememberMe: false,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    // ? Logout the user by returning the initial state
    login: (state, action: PayloadAction<IUser & { rememberMe: boolean }>) => {
      const { email, password } = action.payload;
      if (!!email && !!password) {
        if (action.payload.rememberMe) {
          localStorage.setItem("userData", JSON.stringify({ email, password }));
        }
        console.log(action.payload);
        state.user = action.payload;
        state.isAuthenticated = true;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("userData");
    },
    // Save the user's info
    userInfo: (state, action: PayloadAction<AuthState>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload.user;
    },
    authenticate: (state) => {
      const userDataString = localStorage.getItem("userData");

      if (!!userDataString) {
        const userData = JSON.parse(localStorage.getItem("userData") ?? "");

        if (!!userData && userData?.email && userData?.password) {
          state.isAuthenticated = true;
          state.user.email = userData?.email;
          state.user.password = userData?.password;
        }
      }
    },
  },
});

export const { login, logout, userInfo, authenticate } = authSlice.actions;
// ? Export the authSlice.reducer to be included in the store.
export default authSlice.reducer;
