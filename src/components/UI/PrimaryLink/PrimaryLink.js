import { Link } from "react-router-dom";
import "./PrimaryLink.css";

const PrimaryLink = (props) => {
  return (
    <Link
      className={`btn ${props.black ? "black-background" : ""}`}
      to={props.to ? `${props.to}` : `#`}
    >
      {props.children}
    </Link>
  );
};

export default PrimaryLink;
