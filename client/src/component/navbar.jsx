const Navbar = ({setOpen}) => {
    
  return (
      <>
    <div className="navbar px-4 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <button className=" flex items-end justify-between cursor-pointer font-bold text-xl"><img className="w-[2rem]" src="/realState.svg" alt="" />Real State</button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <button>Item 1</button>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <button>Submenu 1</button>
                </li>
                <li>
                  <button>Submenu 2</button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <button>Item 3</button>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={()=>setOpen(state=>!state)} className="btn btn-ghost rounded-full  "><img className="w-[1.8rem]" src="/menu.svg" alt="" /></button>
      </div>
    </div>
    </>
  );
};

export default Navbar;
