import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Posts from "./pages/postsPage";
import PostDetails from "./pages/postDetailsPage";
import AuthPage from "./pages/authPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path:"/posts",
    element: <Posts />
  },
  {
    path:"/postDetails",
    element: <PostDetails/>,
  },
  {
    path:"/signup",
    element:<AuthPage/>
  },
  {
    path:"/login",
    element:<AuthPage/>
  },
  {
    path:"*",
    element:<>404</>
  }
]);


export default router