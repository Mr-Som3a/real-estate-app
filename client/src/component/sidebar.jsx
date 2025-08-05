import React from "react";

const Sidebar = ({open,setOpen}) => {
  return (
    <>
    {/* Blurred Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-base-100  backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          open ? "opacity-50 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      {/* Side Bar */}
    <div className={`fixed shadow-2xl z-50 top-0 right-0 w-[16rem] h-screen bg-base-200 transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
      <button className="btn bg-transparent border-none absolute right-0 top-2" onClick={()=>setOpen(state=>!state)}><img className="w-[2.5rem]" src="/cross.svg"/></button>
        
       <div className="h-screen mt-20">
         <ul className="menu items-center gap-8  text-2xl h-4/6 w-full  rounded-box">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Agents</li>
            <li>login</li>
            <li>sign up</li>
        </ul>
       </div>

    </div>
    </>
  );
};

export default Sidebar;
