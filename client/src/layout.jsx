import Navbar from "./component/navbar.jsx";
import Sidebar from "./component/sidebar.jsx";
import Footer from "./component/footer.jsx";import { Outlet } from 'react-router-dom'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthUser } from "./store/slices/auth.js";

const Layout = () => {
      const [open, setOpen] = useState(false);
  const { authUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthUser());
  }, [dispatch]);
  return (
    <div>
        <Navbar authUser={authUser} setOpen={setOpen} />
        <Sidebar setOpen={setOpen} open={open} />
        <div className="md:w-11/12 mx-auto">
            <Outlet  />
        </div>
        <Footer />
    </div>
  )
}

export default Layout