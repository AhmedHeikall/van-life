import { useLoaderData } from "react-router-dom";
import { getHostVans } from "../../api";
import { requireAuth } from "../../utils";

import ListedVans from "../listedVans/ListedVans";
import "./hostvans.css";

export async function loader() {
  await requireAuth();
  return getHostVans();
}

export const HostVans = () => {
  const vans = useLoaderData();

  return (
    <div className="vanlife__host-vans">
      <h1>Your listed vans</h1>
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
  );
};

export default HostVans;
