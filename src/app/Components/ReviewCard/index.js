import { Star } from "lucide-react";

const ReviewCard = ({ avatar, name, rating, review }) => (
  <div className="review-card">
    <div className="review-header">
      <img src={avatar} alt={name} className="review-avatar" />
      <div>
        <h3 className="review-name">{name}</h3>
        <div className="review-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`star-icon ${i < rating ? "star-filled" : "star-empty"}`}
            />
          ))}
        </div>
      </div>
    </div>
    <p className="review-text">{review}</p>
  </div>
);

export default ReviewCard;
