import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-white.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/Provider";

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
    }

  return (
    <div className="">
      <div className="navbar bg-transparent text-white mt-3 flex justify-between">
        <div className="mr-10">
          <img src={logo} alt="" className="w-24 text-white" />
        </div>
        <ul className="flex gap-11">
          <li>
            <div className="form-control">
              <input
                type="text"
                placeholder="Search Your Destination"
                className="input w-24 md:w-72 rounded-md bg-slate-400 bg-opacity-20 text-white py-1"
              />
            </div>
          </li>
          <li><NavLink to="/">News</NavLink></li>
          <li><NavLink to="/destination">Destination</NavLink></li>
          <li><NavLink to="/registration">Registration</NavLink></li>
          {
            user && <li><NavLink to="/contact">Contact</NavLink></li>
          }
          <li>
            {
                user? <button 
                onClick={handleLogout}
                className="btn px-5 py-2 border-none bg-yellow-500 rounded-md font-mono">
                  Log out
                </button> :
                <Link to="/login">
                <button className="btn px-5 py-2 border-none bg-yellow-500 rounded-md font-mono">
                  Login
                </button>
                </Link>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
