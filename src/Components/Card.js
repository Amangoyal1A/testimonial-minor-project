import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import "./Cards.css"; // Import the CSS file

const Card = (props) => {
  let review = props.review;
  return (
    <div className> {/* Add the className to the outermost div */}
      <div>
        <img src={review.image} />
      </div>

      <div>
        <p>{review.name} </p>
      </div>
      <div>
        <p>{review.job}</p>
      </div>
      <div>
        <FaQuoteLeft className="quote-left" /> {/* Add className to the icons */}
      </div>
      <div>{review.text}</div>
      <div>
        <FaQuoteRight className="quote-right" />
      </div>

    </div>
  );
};

export default Card;
