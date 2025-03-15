import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "./ReviewCard"; // Import the updated ReviewCard component

export default function SliderRoutine() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      review:
        "This product exceeded my expectations! The quality is outstanding and the customer service was excellent.",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 4,
      review:
        "Great value for money. Would definitely recommend to others looking for a reliable solution.",
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 5,
      review:
        "Absolutely love it! The features are exactly what I needed, and it's so easy to use.",
    },
    {
      id: 4,
      name: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 4,
      review:
        "Very impressed with the quality and attention to detail. A fantastic product overall.",
    },
    {
        id: 5,
        name: "James Wilson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
        rating: 3,
        review:
          "Very impressed with the quality and attention to detail. A fantastic product overall.",
      },
      {
        id: 6,
        name: "James Wilson",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
        rating: 4,
        review:
          "Very impressed with the quality and attention to detail. A fantastic product overall.",
      },
  ];

  const settings = {
    infinite: true,
    speed: 10000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    dots: false,
    responsive: [
        {
          breakpoint: 768, // Below 768px (Mobile)
          settings: {
            slidesToShow: 1,
            slidesToScroll:  1,
          },
        },
      ],
  };

  return (
    <div className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-title">What Our Customers Say</h2>
        <Slider {...settings}>
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              avatar={review.avatar}
              name={review.name}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
}
