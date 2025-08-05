import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import LandingPage from "./component/landingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path:"/postDetails",
    element: <postDetails/>,
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
]);


export default router