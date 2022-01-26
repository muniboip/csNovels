import React from "react";
import StarRatings from "react-star-ratings";

function Top10Mapper({ item, index, onClick }) {
  return (
    <div className="top10Books">
      <img src={item.image} className="top10-image" />
      <p className={`top10BookColor_${index + 1}`}>
        {index + 1 < 10 ? `0${index + 1}` : index + 1}
      </p>
      <div className="top10Books-details">
        <p className="top10-book-title">{item.name}</p>
        <p className="top10-book-genre">{item.genre}</p>
        <div className="star-and-rating">
          <StarRatings
            starDimension={"12"}
            rating={item.rating}
            starRatedColor="gray"
            numberOfStars={1}
            name="rating"
          />
          <p className="top10-book-rating">{item.rating}</p>
        </div>
      </div>
    </div>
  );
}

export default Top10Mapper;
