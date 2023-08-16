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
          element: <DestinationLayout />,
          errorElement: <ErrorPage />,
          children: [
            { path: "", element: <Navigate to="moon" replace /> },
            { path: "moon", element: <DestinationPage /> },
            { path: "mars", element: <DestinationPage /> },
            { path: "europa", element: <DestinationPage /> },
            { path: "titan", element: <DestinationPage /> },
          ],
        },
        {
          path: "/crew",
          element: <CrewLayout />,
          errorElement: <ErrorPage />,
          children: [
            { path: "", element: <Navigate to="01" replace /> },
            { path: "01", element: <CrewPage /> },
            { path: "02", element: <CrewPage /> },
            { path: "03", element: <CrewPage /> },
            { path: "04", element: <CrewPage /> },
          ],
        },
        { path: "/technology", element: <TechnologyPage /> },
      ],
    },
  ],
  { basename: `/${npmConfig.name}` }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
