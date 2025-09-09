import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Posts from "./pages/postsPage";
import PostDetails from "./pages/postDetailsPage";
import AuthPage from "./pages/authPage";
import Layout from "./layout";
import NotFoundPage from "./component/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/postDetails",
        element: <PostDetails />,
      },
      {
        path: "/signup",
        element: <AuthPage />,
      },
      {
        path: "/login",
        element: <AuthPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage/>,
  },
]);

export default router;
