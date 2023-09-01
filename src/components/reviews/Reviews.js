import React from "react";
import star from "../../assets/Icon/star.svg";
import "./reviews.css";

const Reviews = () => {
  return (
    <div className="vanlife__reviews">
      <div className="reviews_your-reviews">
        <h1>Your reviews</h1>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <div className="reviews_overall-rating">
        <div className="reviews_overall-rating_heading">
          <h3 className="overall-rating_number">5.0</h3>
          <img src={star} alt="staricom" />
          <p className="overall-rating_text">overall rating</p>
        </div>
        <div className="reviews_overall-rating_diagrams">
          <div className="reviews_overall-rating_diagram">
            <p className="stars">5 stars</p>
            <div className="fill"></div>
            <p className="percentage">100%</p>
          </div>
          <div className="reviews_overall-rating_diagram">
            <p className="stars">4 stars</p>
            <div></div>
            <p className="percentage">0%</p>
          </div>
          <div className="reviews_overall-rating_diagram">
            <p className="stars">3 stars</p>
            <div></div>
            <p className="percentage">0%</p>
          </div>
          <div className="reviews_overall-rating_diagram">
            <p className="stars">3 stars</p>
            <div></div>
            <p className="percentage">0%</p>
          </div>
          <div className="reviews_overall-rating_diagram">
            <p className="stars">1 stars</p>
            <div></div>
            <p className="percentage">0%</p>
          </div>
        </div>
      </div>
      <div className="reviews_testimonials">
        <h1 className="reviews_testimonials-heading">Reviews (2)</h1>
        <div className="testimonials">
          <div className="stars">
            <img src={star} alt="staricom" />
            <img src={star} alt="staricom" />
            <img src={star} alt="staricom" />
            <img src={star} alt="staricom" />
            <img src={star} alt="staricom" />
          </div>
          <div className="person-details">
            <p className="name">Keko</p>
            <p className="date">December 1, 2023</p>
          </div>
          <p className="person-review">
            The beach bum is such as awesome van! Such as comfortable trip. We
            had it for 2 weeks and there was not a single issue. Super clean
            when we picked it up and the host is very comfortable and
            understanding. Highly recommend!
          </p>
        </div>
        <div className="testimonials">
          <div className="stars">
            <img src={star} alt="staricom" />
            <img src={star} alt="staricom" />
            <img src={star} alt="staricom" />
            <img src={star} alt="staricom" />
            <img src={star} alt="staricom" />
          </div>
          <div className="person-details">
            <p className="name">A-Heikal</p>
            <p className="date">May 23, 2023</p>
          </div>
          <p className="person-review">
            This is our third time using the Modest Explorer for our travels and
            we love it! No complaints, absolutely perfect!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
