import { useParams, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { getVan } from "../../api";
import BackToAll from "../UI/backToAll/BackToAll";
import Type from "../UI/type/Type";

import "./hostvanDetail.css";

export function loader({ params }) {
  return getVan(params.id);
}

const HostVanDetail = () => {
  const params = useParams();
  const van = useLoaderData();
  // const van = vanDetail[0];

  return (
    <div className="vanlife__hostvan-detail">
      <BackToAll to="/host/vans" />
      <div className="hostvan-detail__van-container">
        {/* Start Header */}
        <div className="hostvan-detail__header">
          <div className="hostvan-detail__img-container">
            <img src={van.imageUrl} alt="vanimage" />
          </div>
          <div className="hostvan-detail__info">
            <Type type={van.type}>{van.type}</Type>
            <h3 className="hostvan-detail__name">{van.name}</h3>
            <p className="hostvan-detail__price">
              <span>${van.price}</span>/day
            </p>
          </div>
        </div>
        {/* End Header */}

        {/* Start Navbar */}
        <nav className="hostvan__navbar">
          <ul>
            <li>
              <NavLink
                to="."
                end
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "underline", color: " #161616" }
                    : null
                }
              >
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/host/vans/${params.id}/pricing`}
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "underline", color: " #161616" }
                    : null
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/host/vans/${params.id}/photos`}
                style={({ isActive }) =>
                  isActive
                    ? { textDecoration: "underline", color: " #161616" }
                    : null
                }
              >
                Photos
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* End Navbar */}
        <Outlet context={{ van }} />
      </div>
    </div>
  );
};

export default HostVanDetail;
