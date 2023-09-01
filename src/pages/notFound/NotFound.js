// import { useRouteError } from "react-router-dom";
import PrimaryLink from "../../components/UI/PrimaryLink/PrimaryLink";
import "./notFound.css";

const NotFound = () => {
  // const error = useRouteError();

  return (
    <div className="vanlife__notfound">
      <h1>Sorry, the page you were looking for was not found.</h1>
      <PrimaryLink to="/" black="black">
        Return to home
      </PrimaryLink>
    </div>
  );
};

export default NotFound;
