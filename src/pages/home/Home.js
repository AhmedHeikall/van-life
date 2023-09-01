import PrimaryLink from "../../components/UI/PrimaryLink/PrimaryLink";
import "./home.css";

const Home = () => {
  console.log("welcome to heikal's vanlife wep app");
  return (
    <div className="home">
      <div className="container">
        <div className="home-container"></div>
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <PrimaryLink to="/vans">Find your vans</PrimaryLink>
      </div>
    </div>
  );
};

export default Home;
