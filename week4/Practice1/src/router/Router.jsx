// Router.jsx

import { createBrowserRouter } from "react-router";
import UserDetail from "../pages/UserDetail";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/users/:id",
    Component: UserDetail,
  },
]);

export default router;
