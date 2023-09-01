import { useOutletContext } from "react-router-dom";
import "./hostvanInfo.css";

const Details = () => {
  const { van } = useOutletContext();

  return (
    <div className="vanlife__hostvan__detail">
      <h3>
        <span>Name: </span>
        {van.name}
      </h3>
      <h3>
        <span>Category: </span>
        {van.type}
      </h3>
      <h3>
        <span>Description: </span>
        {van.description}
      </h3>
      <h3>
        <span>Visibility: </span>
        public
      </h3>
    </div>
  );
};

export default Details;
