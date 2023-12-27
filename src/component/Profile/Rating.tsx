import React, { useState, useEffect } from 'react';

interface StarRatingProps {
  outOf?: number;
  onChange?: (newRating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ outOf, onChange }) => {
  const [stars, setStars] = useState<number[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [hovered, setHovered] = useState<number>(0);
  const selectedIcon = "★";
  const deselectedIcon = "☆";

  useEffect(() => {
    const starsArray: number[] = [];
    const totalStars = outOf ? outOf : 5;

    for (let i = 0; i < totalStars; i++) {
      starsArray.push(i + 1);
    }

    setStars(starsArray);
  }, [outOf]);

  const changeRating = (newRating: number) => {
    setRating(newRating);

    if (onChange) {
      onChange(newRating);
    }
  };

  const hoverRating = (rating: number) => {
    setHovered(rating);
  };

  return (
    <div>
      <div className="rating">
        {stars.map((star) => (
          <span
            key={star}
            style={{ cursor: 'pointer' }}
            onClick={() => changeRating(star)}
            onMouseEnter={() => hoverRating(star)}
            onMouseLeave={() => hoverRating(0)}
          >
            {rating < star ? (hovered < star ? deselectedIcon : selectedIcon) : selectedIcon}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StarRating;