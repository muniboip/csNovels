import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faBook } from "@fortawesome/free-solid-svg-icons";
import "../Styles/clientStyles.css";
import React, { useEffect, useState } from "react";
import CI from "./../Assets/Images/Categories Icon.svg";
import CCI from "./../Assets/Images/Chapter Count Icon.svg";
import Cover from "./../Assets/Images/cover.png";
import * as actions from '../store/actions/actions';
// import * as types from '../store/actions/actions'
import {connect} from 'react-redux';
function MostWantedNovelsMapper({ item,fav_book,lib_book}) {
  // const [data, setData] = useState();

  return (
    <div
      className="most-popular-books mb-5"
      onClick={() => {
        fav_book(item._id).then(()=>lib_book(item))
        // lib_book(item)
        // console.log(item._id)
      }}
    >
      <div className="mp-image-and-text-container">
        <img src={Cover} className="mp-book-cover" />
      </div>

      <div className="book-details">
        <p className="mp-book-title">
          {window.screen.width <= 768
            ? `${item.title.substring(0, 30)}`
            : item.title.length > 50
            ? `${item.title.substring(0, 50)}`
            : item.title}
        </p>

        <div className="mp-book-category">
          <img src={CI} className="mp-book-cat-icon" />
          <p className="mp-book-category-tag">urban</p>
          <p className="mp-book-status">Ongoing</p>
        </div>
        <p className="mp-book-description">
          {item.description.length > 70
            ? `${item.description.substring(0, 70)}`
            : item.description}
        </p>

        {/* <div className="mp-book-chapters">
          <img src={CCI} className="mp-book-chapter-icon" />
          <p className="mp-book-chapter-number">3471 Chapters</p>
          <svg
            className="mp-favorite-heart-unfilled"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
        </div> */}
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
            class={item.isFavorite? ("mp-favorite-heart2"):("mp-favorite-heart")}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
          <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
          </svg>
        </div>
      </div>
      {/* <div className="mp-image-and-text-container">
        <img src={item.image} className="mp-book-image" />
        <p className="mp-cs-text">CS</p>
        <p className="mp-book-status">{item.status} </p>
        <p className="mp-book-heading">{item.heading} </p>
      </div>
    <div className="col-lg-4 col-md-6 col-sm-6 most-popular-books">
      <img src={item.image} className="mp-book-image" />
      <div className="book-details">
        <p className="mp-book-title">
          {window.screen.width <= 768
            ? `${item.title.substring(0, 30)}...`
            : item.title.length > 50
            ? `${item.title.substring(0, 50)}...`
            : item.title}
        </p>
        <div className="mp-book-category">
          <svg class="svg-inline-mp-cat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18px 18px">
                            <path class="st0" d="M2.3,0h3.1c1.3,0,2.3,1.1,2.3,2.3v3.1c0,1.3-1.1,2.3-2.3,2.3H2.3C1.1,7.8,0,6.8,0,5.5V2.3C0,1.1,1.1,0,2.3,0z"/>
	                        <path class="st0" d="M12.5,0h3.1C16.9,0,18,1.1,18,2.3v3.1c0,1.3-1.1,2.3-2.3,2.3h-3.1c-1.3,0-2.3-1.1-2.3-2.3V2.3 C10.2,1.1,11.2,0,12.5,0z"/>
	                        <path class="st0" d="M2.3,10.2h3.1c1.3,0,2.3,1.1,2.3,2.3v3.1c0,1.3-1.1,2.3-2.3,2.3H2.3C1.1,18,0,16.9,0,15.7v-3.1 C0,11.2,1.1,10.2,2.3,10.2z"/>
	                        <path class="st0" d="M12.5,10.2h3.1c1.3,0,2.3,1.1,2.3,2.3v3.1c0,1.3-1.1,2.3-2.3,2.3h-3.1c-1.3,0-2.3-1.1-2.3-2.3v-3.1 C10.2,11.2,11.2,10.2,12.5,10.2z"/>
          </svg> 
          <p className="mp-book-category-tag">{item.category}</p>
          <p className="mp-book-status">{item.status} </p>
        </div>
        <p className="mp-book-description">
          {item.description.length > 150
            ? `${item.description.substring(0, 150)}...`
            : item.description}
        </p>
        <p className="mp-book-chapters">
          <FontAwesomeIcon icon={faBook} /> {`${item.chapters} Chapters`}
        </p>
      </div> */}
      {/* <div className="mp-book-chapters">
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
      </div> */}
    </div>
    // </div>
  );
}
const mapstatetoprops = ({books_reducer,library_reducer})=>{
  return {books_reducer,library_reducer};
} 
export default connect(mapstatetoprops,actions)(MostWantedNovelsMapper);
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faThLarge, faBook } from "@fortawesome/free-solid-svg-icons";

// import React from "react";

// function MostWantedNovelsMapper({ item, onClick }) {
//   return (
//     <div className="col-lg-4 col-md-6 col-sm-6 most-wanted-books">
//       <div className="mp-image-and-text-container">
//         <img src={item.image} className="mp-book-image" />
//         <p className="mp-cs-text">CS</p>
//         <p className="mp-book-status">{item.status} </p>
//         <p className="mp-book-heading">{item.heading} </p>
//       </div>
//       <div className="book-details">
//         <p className="mp-book-title">
//           {window.screen.width <= 768
//             ? `${item.title.substring(0, 30)}...`
//             : item.title.length > 50
//             ? `${item.title.substring(0, 50)}...`
//             : item.title}
//         </p>
//         <p className="mp-book-category">
//           <FontAwesomeIcon icon={faThLarge} /> {item.category}
//         </p>
//         <p className="mp-book-description">
//           {item.description.length > 70
//             ? `${item.description.substring(0, 70)}...`
//             : item.description}
//         </p>
//         <p className="mp-book-chapters">
//           <FontAwesomeIcon icon={faBook} /> {`${item.chapters} Chapters`}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default MostWantedNovelsMapper;
