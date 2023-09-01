import { Link } from "react-router-dom";
import Type from "../UI/type/Type";
import "./van.css";

const Van = (props) => {
  return (
    <Link to={props.id} state={{ search: props.searchParams }}>
      <div className="van-card">
        <img src={props.imageUrl} alt="vanphoto" />
        <div className="card-info">
          <div className="card-text">
            <h3>{props.name ? props.name : "Modest Explorer"}</h3>
            <p className="price">{props.price ? `$${props.price}` : `$60`}</p>
          </div>
          <p className="day">/day</p>
          <Type type={props.type}>{props.type}</Type>
        </div>
      </div>
    </Link>
  );
};

export default Van;
