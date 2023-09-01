import { Link } from "react-router-dom";
import { about } from "../../assets/index";
import "./about.css";

const About = () => {
  return (
    <div className="vanlife__about">
      <div className="vanlife__about-image">
        <img src={about} alt="about" className="about-image" />
      </div>
      <div className="vanlife__about-container">
        <h1 className="vanlife__about-header">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="vanlife__about-descrption m-bottom">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="vanlife__about-descrption">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      {/* box container */}
      <div className="vanlife__about-box">
        <h1 className="vanlife__about-box__text">
          Your destination is waiting. Your van is ready.
        </h1>
        <Link to="/vans" className="vanlife__about-box__btn-link">
          Explore our vans
        </Link>
      </div>
    </div>
  );
};

export default About;
