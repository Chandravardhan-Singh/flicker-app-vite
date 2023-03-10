import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { flickerAPI } from "../../api/products/flickerAPI";

export interface IImage {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export interface FlickerProps {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: IImage[];
}

const initialState: FlickerProps = {
  page: 0,
  pages: 0,
  perpage: 0,
  photo: [],
  total: 0,
};

export const flickerSlice = createSlice({
  name: "flickerSlice",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const {} = flickerSlice.actions;
export default flickerSlice.reducer;
