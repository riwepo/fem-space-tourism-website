import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import DestinationLayout from "./pages/DestinationLayout";
import DestinationPage from "./pages/DestinationPage";
import CrewLayout from "./pages/CrewLayout";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import ErrorPage from "./pages/ErrorPage";

import npmConfig from "../package.json";

import DesignSystemPage from "./pages/DesignSystemPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/destination",
          element: <DestinationPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/crew",
          element: <CrewPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/technology",
          errorElement: <ErrorPage />,
          element: <TechnologyPage />,
        },
      ],
    },
  ],
  { basename: `/${npmConfig.name}` }
);

const designSystemRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [{ path: "/", element: <DesignSystemPage /> }],
    },
  ],
  { basename: `/${npmConfig.name}` }
);

function App() {
  return <RouterProvider router={designSystemRouter} />;
}

export default App;
