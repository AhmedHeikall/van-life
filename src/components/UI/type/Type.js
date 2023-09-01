import { Link } from "react-router-dom";
import "./type.css";

const Type = (props) => {
  return (
    <Link to={props.to} className={`vandetail__type ${props.type}`}>
      {props.children}
    </Link>
  );
};

export default Type;
