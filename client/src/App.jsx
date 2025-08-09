import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/navbar.jsx";
import Sidebar from "./component/sidebar.jsx";
import Footer from "./component/footer.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "./store/slices/auth.js";
function App() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { authUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAuthUser());
  }, [dispatch]);
  return (
    <>
      <Navbar authUser={authUser} setOpen={setOpen} />
      <Sidebar setOpen={setOpen} open={open} />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
