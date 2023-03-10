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
  rememberMe: boolean
}
const user  = JSON.parse(localStorage.getItem("userData")!)
const initialState: AuthState = user?{
  user,
  isAuthenticated: true,
  rememberMe: JSON.parse(localStorage.getItem("rememberMe")!).rememberMe || false
}:{
  user: null,
  isAuthenticated: false,
  rememberMe:false
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState:(()=>{ console.log("initialSet"); return initialState})(),
  reducers: {
    // ? Logout the user by returning the initial state
    login: (state, action: PayloadAction<IUser & { rememberMe: boolean }>) => {
      const { email, password } = action.payload;
      if (!email || !password) {
        return
      }
        if (action.payload.rememberMe) {
          localStorage.setItem("userData", JSON.stringify({ email, password }));
          localStorage.setItem("rememberMe",  JSON.stringify(action.payload.rememberMe));
        }
        state.user = {email:action.payload.email, password:action.payload.password};
        state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("userData");
      localStorage.removeItem("rememberMe");
    },
    // Save the user's info
    userInfo: (state, action: PayloadAction<AuthState>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.user = action.payload.user;
    }
  },
});

export const { login, logout, userInfo } = authSlice.actions;
// ? Export the authSlice.reducer to be included in the store.
export default authSlice.reducer;
