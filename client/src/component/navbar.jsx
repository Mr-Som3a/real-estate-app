import { useDispatch } from "react-redux";
import { isLoading, logoutUser } from "../store/slices/auth";

const Navbar = ({ setOpen ,authUser}) => {
  const dispatch=useDispatch()
   
  const handeNavigate = (e) => {
    window.location.href = `${e.target.name}`;
  };
  const handleLogout = ()=>{

    dispatch(isLoading(true))
    dispatch(logoutUser())
  }
  return (
    <>
      <div className="navbar z-100 px-10 lg:px-20 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <button
            name="/"
            onClick={(e) => handeNavigate(e)}
            className=" flex items-end justify-between cursor-pointer font-bold text-xl"
          >
            <img className="w-[2rem]" src="/realState.svg" alt="" />
            Real State
          </button>
        </div>
        <div className="navbar-center hidden md:flex items-end h-[2rem]">
          <ul className=" flex space-x-6 w-3/5">
            <li>
              <div className="hover:translate-0.5 duration-100 ease-in-out cursor-pointer">
                Contact
              </div>
            </li>
            <li>
              <div className="hover:translate-0.5 duration-100 ease-in-out cursor-pointer">
                Agents
              </div>
            </li>
            <li>
              <div className="hover:translate-0.5 duration-100 ease-in-out cursor-pointer">
                About
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-end   md:flex items-end">
          <button
            onClick={() => setOpen((state) => !state)}
            className="btn btn-ghost rounded-full md:hidden  "
          >
            <img className="w-[1.8rem]" src="/menu.svg" alt="" />
          </button>
          {authUser? (
            <div className=" hidden md:block dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={authUser.imgUrl}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <button
                onClick={(e) => handeNavigate(e)}
                name="login"
                className="btn hidden md:block w-[7rem] mx-4 bg-transparent"
              >
                Log in
              </button>
              <button
                onClick={(e) => handeNavigate(e)}
                name="signup"
                className="btn hidden md:block  w-[7rem] mx-4 bg-amber-200"
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
