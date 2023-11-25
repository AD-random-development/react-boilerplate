import { createBrowserRouter } from "react-router-dom";
import About from "../components/global/About";
import Dashboard from "../components/global/Dashboard";
import Homepage from "../components/global/Homepage";
import PrivateRouter from "./PrivateRouter";
import Signin from "../components/global/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "",
        element: <Homepage></Homepage>,
      },
      {
        path: "signin",
        element: <Signin></Signin>,
      },
      {
        path: "about",
        element: <PrivateRouter element={<About></About>}></PrivateRouter>,
      },
    ],
  },
]);

export default router;
