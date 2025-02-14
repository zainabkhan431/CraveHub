import PropTypes from "prop-types";
import "./Rating.css"
const Rating = ({ rating }) => {
 
  // Ensure `rating` is a valid number; if not, default to 0
  const validRating = typeof rating === "number" ? rating : 0;
  const fullStars = Math.floor(validRating);
  const hasHalfStar = validRating % 1 >= 0.5;

  return (
    <div className="rating">
      <div className="rating-value">{validRating.toFixed(1)}</div>
      <div className="stars">
        {Array.from({ length: 5}).map((_, index) => (
          <span key={index}>
            {index < fullStars
              ? "★"
              : index === fullStars && hasHalfStar
              ? "☆"
              : "☆"}
          </span>
        ))}
      </div>
    </div>
  );
};

// Define prop types
Rating.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Rating;
