import { Link } from "react-router-dom";
import "./listedvans.css";

const ListedVans = (props) => {
  return (
    <div className="dashboard__listed-vans_vanscards">
      <Link key={props.id} to={`/host/vans/${props.id}`}>
        <div key={props.id} className="dashboard__listed-vans_vanscard">
          <div className="vanscard__van-detail">
            <img src={props.imageUrl} alt="van" />
            <div>
              <h3>{props.name}</h3>
              <p>${props.price}/day</p>
            </div>
          </div>
          {props.edit && <p className="edited">{props.edit}</p>}
        </div>
      </Link>
    </div>
  );
};

export default ListedVans;
