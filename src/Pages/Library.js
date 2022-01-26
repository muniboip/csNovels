import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import BOOK_CARD from "../Assets/Images/book-card.png";
import MostWantedNovelsMapper from "../Components/MostWantedNovelsMapper";
import LibraryNovelsMapper from "../Components/LibraryNovelsMapper";
import {connect} from 'react-redux';
import * as actions from '../store/actions/actions';
// import { books_reducer } from "../store/reducers/books_reducer";


const Library = ({library_reducer}) => {
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    setLibrary(library_reducer);
    console.log(library_reducer,"ooooooooo",library)
    // console.log(library)
    // alert("SAD")
    // console.log("SAD")
    // console.log(books_reducer, "books_reducer",library_reducer,"library_reducer action")
  }, [library_reducer]);
  // console.log(library_reducer)
  return (
    <>
      <Header />
      <div className="heading-div">
        <p className="heading">Library</p>
        <div className="sub-headings">
          <p className="sh-1 mb-0">Library</p>
          <p className="sh-2 mb-0">History</p>
          <i
            className="fas fa-paint-brush"
            style={{ color: "#3b66f5", marginLeft: "700px", marginTop: "40px" }}
          ></i>
          <p className="sh-3">Edit</p>
          <p className="sh-4">Recently read</p>
        </div>
      </div>
      <div className="container">
        <div className="row">
            {library.map((item, idx) => (
              // console.log(item)
              <LibraryNovelsMapper
                key={idx}
                item={item}
                onClick={() => console.log("Book Card")}
              />
            ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

const mapstatetoprops = ({books_reducer,library_reducer})=>{
  return {books_reducer,library_reducer};
}
export default connect(mapstatetoprops,actions)(Library);
