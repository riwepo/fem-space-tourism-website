import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CrewPage from "./pages/CrewPage";
import DestinationPage from "./pages/DestinationPage";
import TechnologyPage from "./pages/TechnologyPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/crew", element: <CrewPage /> },
      { path: "/destination", element: <DestinationPage /> },
      { path: "/technology", element: <TechnologyPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
