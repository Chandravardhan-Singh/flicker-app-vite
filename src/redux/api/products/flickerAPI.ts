import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  IExifResponse,
  IImageInfo,
  IPopularPhotosResponse,
  IResponse,
  IUserInfo,
} from "./types";

const API_KEY = "d6f7740d619f909081376555b7857ee3";

export const flickerAPI = createApi({
  reducerPath: "flickerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.flickr.com/services/rest",
  }),
  tagTypes: ["Image"],
  endpoints: (builder) => ({
    searchImage: builder.query<IResponse, { tags: string; page: number }>({
      query: (data) =>
        `/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&tags=${data.tags}&page=${data.page}&per_page=8`,
      providesTags: ["Image"],
    }),
    imageExif: builder.query<IExifResponse, string>({
      query: (photo_id) =>
        `?method=flickr.photos.getExif&api_key=${API_KEY}&format=json&nojsoncallback=1&photo_id=${photo_id}`,
    }),
    imageInfo: builder.query<IImageInfo, string>({
      query: (photo_id) =>
        `/?method=flickr.photos.getInfo&api_key=${API_KEY}&format=json&nojsoncallback=1&photo_id=${photo_id}`,
    }),
    userInfo: builder.query<IUserInfo, string>({
      query: (user_id) =>
        `/?method=flickr.profile.getProfile&api_key=${API_KEY}&format=json&nojsoncallback=1&user_id=${user_id}`,
    }),
    popularPhotos: builder.query<IPopularPhotosResponse, string>({
      query: (user_id) =>
        `/?method=flickr.photos.getPopular&api_key=${API_KEY}&format=json&nojsoncallback=1&user_id=${user_id}&per_page=8`,
    }),
  }),
});

export const {
  useSearchImageQuery,
  useImageExifQuery,
  useImageInfoQuery,
  useUserInfoQuery,
  usePopularPhotosQuery,
} = flickerAPI;
