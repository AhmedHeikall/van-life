import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";
import Van from "../../components/van/Van";
import "./vans.css";

export function loader() {
  return getVans("/api/vans");
}

const Vans = () => {
  const [searchParams] = useSearchParams();
  const vans = useLoaderData();

  const typeFilter = searchParams.get("type");

  const displayedVans = typeFilter
    ? vans.filter((van) => {
        return van.type === typeFilter;
      })
    : vans;

  return (
    <div className="vans">
      <div className="container">
        <h1>Explore our van options</h1>

        <div className="filter">
          <div className="tags">
            <Link to="?type=simple" className="simple">
              Simple
            </Link>
            <Link to="?type=luxury" className="luxury">
              Luxury
            </Link>
            <Link to="?type=rugged" className="rugged">
              Rugged
            </Link>
          </div>
          {typeFilter && (
            <Link to="." relative="path" className="clear-filter">
              Clear filters
            </Link>
          )}
        </div>

        <div className="vans-container">
          {displayedVans.map((van) => {
            return (
              <Van
                searchParams={`?${searchParams.toString()}`}
                key={van.id}
                id={van.id}
                imageUrl={van.imageUrl}
                name={van.name}
                price={van.price}
                type={van.type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vans;
