import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import DestinationLayout from "./pages/DestinationLayout";
import CrewPage from "./pages/CrewPage";
import TechnologyPage from "./pages/TechnologyPage";
import MoonPage from "./pages/destinations/MoonPage";
import MarsPage from "./pages/destinations/MarsPage";
import EuropaPage from "./pages/destinations/EuropaPage";
import TitanPage from "./pages/destinations/TitanPage";
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
            { path: "moon", element: <MoonPage /> },
            { path: "mars", element: <MarsPage /> },
            { path: "europa", element: <EuropaPage /> },
            { path: "titan", element: <TitanPage /> },
          ],
        },
        { path: "/crew", element: <CrewPage /> },
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
