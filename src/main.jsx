import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";

import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import MyList from "./pages/MyList";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "filme/:id", element: <MovieDetails /> },
      { path: "minha-lista", element: <MyList /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);