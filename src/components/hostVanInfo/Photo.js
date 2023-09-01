import { useOutletContext } from "react-router-dom";
import "./hostvanInfo.css";
const Photo = () => {
  const { van } = useOutletContext();

  return (
    <div className="vanlife__hostvan__photos">
      <img src={van.imageUrl} alt="vanphoto" />
    </div>
  );
};

export default Photo;
