import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Topics from "./containers/topics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>Error</>,
    children: [
      {
        path: "/",
        index: true,
        element: <Topics />,
      },
      {
        path: "weight/",
        element: <>ADASDADSD</>,
      },
      {
        path: "weight/",
        element: <>ADASDADSD</>,
      },
      {
        path: "settings/",
        element: <>Settings Page</>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
