import { useEffect, useState } from "react";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";

function App() {

  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
