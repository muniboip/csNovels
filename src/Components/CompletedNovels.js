import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faBook } from "@fortawesome/free-solid-svg-icons";

function CompletedNovels({ item, onClick }) {
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 completed-books">
      <div className="completed-image-and-text-container">
        <img src={item.image} className="completed-book-image" />
        <p className="mp-cs-text">CS</p>
        <p className="completed-book-status">{item.status} </p>
        <p className="completed-book-heading">{item.heading} </p>
      </div>
      <p className="completed-book-title">
        {window.screen.width <= 768
          ? `${item.title.substring(0, 25)}...`
          : item.title.length > 35
          ? `${item.title.substring(0, 35)}...`
          : item.title}
      </p>
      <div className="mp-book-chapters">
          <svg
            class="mp-book-chapter-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 16"
          >
            <path d="M3,12h8c0.6,0,1-0.4,1-1V1c0-0.6-0.4-1-1-1H2C0.9,0,0,0.9,0,2v11c0,1.7,1.3,3,3,3h8c0.6,0,1-0.4,1-1 s-0.4-1-1-1H3c-0.6,0-1-0.4-1-1S2.4,12,3,12z" />
          </svg>
          <p className="mp-book-chapter-number">{`${item.chapters} Chapters`}</p>
          <svg
            class="mp-favorite-heart"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
        </div>
    </div>
  );
}

export default CompletedNovels;
