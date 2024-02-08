import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ListPage from "./ListPage";
import PhotoPage from "./PhotoPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { index: true, element: <ListPage /> },
      { path: "photo/:id", element: <PhotoPage /> },
    ],
  },
]);
