import AppLayout from "../components/layout/AppLayout";
import { HomePage } from "./RouteConstants";
import Home from "../pages/homePage/Home";
import { useRoutes } from "react-router-dom";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          path: HomePage,
          element: <Home />,
        },
        // {
        //   path: EVENTS,
        //   element: <AppLayout />,
        // },
        // {
        //   path: EVENT,
        //   element: <AppLayout />,
        // },
        // {
        //   path: ANNOUNCEMENTS,
        //   element: <AppLayout />,
        // },
        // {
        //   path: DEALERS,
        //   element: <AppLayout />,
        // },
      ],
    },
  ]);
  return routes;
}
