import { NavLink, Outlet } from "react-router-dom";
import "./host.css";

const Host = () => {
  /**
   * Acting as Layout, but for me i like to but it here in pages folder
   */
  return (
    <div className="vanlife__host">
      <nav className="host__navbar">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/host"
              end
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/host/income"
            >
              Income
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/host/vans"
            >
              Vans
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/host/reviews"
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Host;
