import { useOutletContext } from "react-router-dom";
import "./hostvanInfo.css";

const Pricing = () => {
  const { van } = useOutletContext();

  return (
    <div className="vanlife__hostvan__detail">
      <h3>
        <span>{van.price}</span>/day
      </h3>
    </div>
  );
};

export default Pricing;
