import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";
import ListedVans from "../listedVans/ListedVans";

import star from "../../assets/Icon/star.svg";
import "./dashboard.css";

export async function loader() {
  await requireAuth();
  return getHostVans();
}

const Dashboard = () => {
  const vans = useLoaderData();

  return (
    <div className="vanlife__dashboard">
      {/* Income Section */}
      <div className="dashboard__income">
        <h1 className="dashboard__income-welcome">Welcome!</h1>
        <div className="dashboard__income-details">
          <p>
            income last <span>30dsys</span>
          </p>
          <p>Details</p>
        </div>
        <p className="dashboard__total-mony">$2,260</p>
      </div>
      {/* Reviews Section */}
      <div className="dashboard__reviews">
        <div className="dashboard__reviews-score">
          <p>Review Score</p>
          <img src={star} alt="starticon" />
          <p>5.0/5</p>
        </div>
        <p>Details</p>
      </div>
      {/* Vans Section */}
      <div className="dashboard__listed-vans">
        <div className="dashboard__listed-vans-text">
          <h3>Your listed vans</h3>
          <p>
            <Link to="/host/vans">View All</Link>
          </p>
        </div>
        <div className="host-vans__listed-vans">
          {vans.map((van) => (
            <ListedVans
              key={van.id}
              id={van.id}
              imageUrl={van.imageUrl}
              name={van.name}
              price={van.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
