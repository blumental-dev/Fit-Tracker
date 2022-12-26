import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GridView from "./containers/topics";
import { TopicType, TopicTypeEnum } from "./util/appIcons";

const arr = [TopicTypeEnum.INSIGHTS, TopicTypeEnum.GRAPH] as TopicType[];

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <>Error</>,
    children: [
      {
        path: "/",
        index: true,
        element: <GridView content={arr} />,
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
        element: <GridView content={TopicTypeEnum.SETTINGS as TopicType} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
