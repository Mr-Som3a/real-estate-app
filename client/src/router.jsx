import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Posts from "./pages/postsPage";
import PostDetails from "./pages/postDetailsPage";
import Signup from "./pages/signupPage";
import Login from "./pages/loginPage";


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
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"*",
    element:<>404</>
  }
]);


export default router