import { FC, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RoutePaths } from "./route-path.enum";
import ProtectedRoutes from "./ProtectedRoutes";
import LazyLoaded from "./LazyLoader";
import { Login, Home, Search } from "../pages";
import PublicRoutes from "./PublicRoutes";

const About = lazy(() => import("../pages/About"));
const Post = lazy(() => import("../pages/Post"));
const ImageDetails = lazy(() => import("../pages/ImageDetails"));

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={RoutePaths.Login} element={<PublicRoutes />}>
        <Route index element={<Login />} />
      </Route>
      <Route caseSensitive path={RoutePaths.Root} element={<ProtectedRoutes />}>
        <Route index element={<Home />} />
        <Route path={RoutePaths.search + "/:tag"} element={<Search />} />
        <Route
          path={RoutePaths.About}
          element={
            <LazyLoaded>
              <About />
            </LazyLoaded>
          }
        />
        <Route
          path={RoutePaths.ImageDetails + "/:id"}
          element={
            <LazyLoaded>
              <ImageDetails />
            </LazyLoaded>
          }
        />
        <Route
          path={RoutePaths.Post}
          element={
            <LazyLoaded>
              <Post />
            </LazyLoaded>
          }
        />
      </Route>
    </>
  )
);

const AppRoutes: FC = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRoutes;
