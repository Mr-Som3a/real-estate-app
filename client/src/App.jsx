import { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import Footer from "./component/footer";

function App() {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState(null)
  return (
    <>
      <Navbar setOpen={setOpen} />
      <Sidebar setOpen={setOpen} open={open} />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
