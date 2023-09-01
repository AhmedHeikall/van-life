import { useLocation, useLoaderData } from "react-router-dom";

import { getVan } from "../../api";
import PrimaryLink from "../../components/UI/PrimaryLink/PrimaryLink";
import BackToAll from "../../components/UI/backToAll/BackToAll";
import Type from "../../components/UI/type/Type";

import "./vanDetail.css";

export function loader({ params }) {
  return getVan(params.id);
}

function VanDetail(props) {
  const location = useLocation();
  const van = useLoaderData();

  const search = location.state?.search || "";

  return (
    <div className="vanlife__vandetail">
      <div className="vandetail__container">
        <BackToAll to={`..${search}`} type={search.slice(6)} />

        {/******  Van Detail  ******/}
        {van ? (
          <>
            <div className="vandetail__img-container">
              <img src={van.imageUrl} alt="van" className="vandetail__img" />
            </div>
            <Type type={van.type}>{van.type}</Type>
            <h3 className="vandetail__name">{van.name}</h3>
            <p className="vandetail__price">
              <span>${van.price}</span>/day
            </p>
            <p className="vandetail__descrption">{van.description}</p>
          </>
        ) : (
          <div className="vandetail__loading vandetail__name">Loading...</div>
        )}
        {/******  End Van Detail  ******/}

        <PrimaryLink to="#">Rent this van</PrimaryLink>
      </div>
    </div>
  );
}

export default VanDetail;
