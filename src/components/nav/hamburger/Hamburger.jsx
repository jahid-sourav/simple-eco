import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import userImage from "../../../assets/images/men.webp";
import "./Hamburger.css";
export default function Hamburger() {
  return (
    <>
      <div className="drawer-content">
        <label htmlFor="sidebar" className="hamburger">
          <RxHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side z-[999]">
        <label
          htmlFor="sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-2 w-[80%] md:w-80 min-h-full bg-base-200">
          <img src={userImage} alt="Men" className="header-image" />
          <ul>
            <li className="mt-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mt-3">
              <NavLink
                to="/another"
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
              >
                Another Page
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
