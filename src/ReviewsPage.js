import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ReviewsPage.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([
    { id: 1, rating: 5, comment: "Absolutely love the modern cupboards. Perfect for my space!" },
    { id: 2, rating: 4, comment: "The round dining tables are great for entertaining. Highly recommend!" },
    { id: 3, rating: 5, comment: "Sofas are comfortable and the decorative accessories are stylish. Very happy with my purchase." },
    { id: 4, rating: 4, comment: "Bed frames and pillows are high quality. Sleep has never been better." },
    { id: 5, rating: 5, comment: "Accent chairs add a nice touch to my living room. Good value for the price." },
  ]);

  const history = useHistory();

  const handleGoBack = () => {
    history.push('/');
  };

  return (
    <div className="reviews-page">
      <h1>Customer Reviews</h1>
      <button onClick={handleGoBack} className="back-button">Back to Home</button>
      <ul className="reviews-list">
        {reviews.map((review) => (
          <li key={review.id} className="review-item">
            <div className="rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={`star ${star <= review.rating ? 'filled' : ''}`}>
                  ★
                </span>
              ))}
            </div>
            <p>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsPage;