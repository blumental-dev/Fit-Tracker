import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import GridView from "./containers/topics";
import { TopicType, TopicTypeEnum } from "./util/appIcons";
import withCatalogType from "./hoc/withCatalogType";
import BaseCatalog from "./components/card/components/exerciseBacklogCard/components/Catalog";
import { BodyPartEnum } from "./util/enums";

const arr = [TopicTypeEnum.INSIGHTS, TopicTypeEnum.GRAPH] as TopicType[];

const EnhancedCatalog = withCatalogType(BaseCatalog);
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
        path: "exercises-backlog/",
        element: (
          <GridView content={TopicTypeEnum.EXERCISE_BACKLOG as TopicType} />
        ),
        children: [
          {
            path: `/exercises-backlog/${BodyPartEnum.BACK}`,
            index: true,
            element: <EnhancedCatalog BodyPartType={BodyPartEnum.BACK} />,
          },
          {
            path: `/exercises-backlog/${BodyPartEnum.CHEST}`,
            element: <EnhancedCatalog BodyPartType={BodyPartEnum.CHEST} />,
          },
          {
            path: `/exercises-backlog/${BodyPartEnum.LEGS}`,
            element: <EnhancedCatalog BodyPartType={BodyPartEnum.LEGS} />,
          },
          {
            path: `/exercises-backlog/${BodyPartEnum.SHOULDERS}`,
            element: <EnhancedCatalog BodyPartType={BodyPartEnum.SHOULDERS} />,
          },
          {
            path: `/exercises-backlog/${BodyPartEnum.ARMS}`,
            element: <EnhancedCatalog BodyPartType={BodyPartEnum.ARMS} />,
          },
        ],
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
