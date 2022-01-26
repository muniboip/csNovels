import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Header from "../Components/Header";
import book from "../Assets/Images/book-card.png";
import { Book } from "@mui/icons-material";
import Footer from "../Components/Footer";

function SearchPage() {
  const [activeGenreOfNovels, setActiveGenreOfNovels] = useState("");
  const [activeContentType, setActiveContentType] = useState("");
  const [activeContentStatus, setActiveContentStatus] = useState("");
  const [activeSortBy, setActiveSortBy] = useState("");
  const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(dummyCards);

  useEffect(() => {
    console.log({ activeGenreOfNovels });
    console.log({ activeContentType });
    console.log({ activeContentStatus });
    console.log({ activeSortBy });
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [
    activeGenreOfNovels,
    activeContentType,
    activeContentStatus,
    activeSortBy,
    isLoading,
  ]);
useEffect(() => {
  console.log(data)

}, [data])
  return (
    <>
      <Header />
      <div className="search-page">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="side-bar">
                <h1 className="sidebar-heading">Genre of Novels</h1>
                <div className="row">
                  <div className="col-md-12">
                    <ul className="nav nav-pills nav-stacked side-bar-tabs">
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("all");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "all" && "darkgrey",

                            color: activeGenreOfNovels == "all" && "white",
                          }}
                          className={`nav-link `}
                          href="#"
                        >
                          All
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("urban");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "urban" && "darkgrey",

                            color: activeGenreOfNovels == "urban" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Urban
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("eastern");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "eastern" && "darkgrey",

                            color: activeGenreOfNovels == "eastern" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Eastern
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("games");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "games" && "darkgrey",

                            color: activeGenreOfNovels == "games" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Games
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("fantasy");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "fantasy" && "darkgrey",

                            color: activeGenreOfNovels == "fantasy" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Fantasy
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("sci-fi");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "sci-fi" && "darkgrey",

                            color: activeGenreOfNovels == "sci-fi" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Sci-fi
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("horror");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "horror" && "darkgrey",

                            color: activeGenreOfNovels == "horror" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Horror
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("sports");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "sports" && "darkgrey",

                            color: activeGenreOfNovels == "sports" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Sports
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("action");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "action" && "darkgrey",

                            color: activeGenreOfNovels == "action" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Action
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("war");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "war" && "darkgrey",

                            color: activeGenreOfNovels == "war" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          War
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("realistic");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "realistic" && "darkgrey",

                            color:
                              activeGenreOfNovels == "realistic" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Realistic
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("history");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "history" && "darkgrey",

                            color: activeGenreOfNovels == "history" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          History
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveGenreOfNovels("acg");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeGenreOfNovels == "acg" && "darkgrey",

                            color: activeGenreOfNovels == "acg" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          ACG
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="search-page-content">
                <h1 className="filter-heading top-main-head">Filter By</h1>
                <div className="row top-row">
                  <div className="col-lg-7 top-col">
                    <h3 className="top-heading content-type">Content Type</h3>
                    <ul className="nav nav-pills search-top-tab serach-tabs content-type-tabs">
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveContentType("all");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeContentType == "all" && "darkgrey",

                            color: activeContentType == "all" && "white",
                          }}
                          className="nav-link active"
                          href="#"
                        >
                          All
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveContentType("translate");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeContentType == "translate" && "darkgrey",

                            color: activeContentType == "translate" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Translate
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveContentType("original");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeContentType == "original" && "darkgrey",

                            color: activeContentType == "original" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Original
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveContentType("mtl");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeContentType == "mtl" && "darkgrey",

                            color: activeContentType == "mtl" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          MTl (Machine Translate)
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-5 top-col">
                    <h3 className="top-heading content-status">
                      Content Status
                    </h3>
                    <ul className="nav nav-pills search-top-tab serach-tabs">
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveContentStatus("all");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeContentStatus == "all" && "darkgrey",

                            color: activeContentStatus == "all" && "white",
                          }}
                          className="nav-link active"
                          href="#"
                        >
                          All
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveContentStatus("completed");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeContentStatus == "completed" && "darkgrey",

                            color:
                              activeContentStatus == "completed" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Completed
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveContentStatus("ongoing");
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeContentStatus == "ongoing" && "darkgrey",

                            color: activeContentStatus == "ongoing" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Ongoing
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*----- filter top ---*/}

                <h1 className="sort-heading top-main-head">Sort By</h1>
                <div className="row">
                  <div className="col-12">
                    <ul className="nav nav-pills sorting serach-tabs">
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveSortBy("popular");
                          setIsLoading(true);
                        }}
                      >
                        <a
                          style={{
                            background: activeSortBy == "popular" && "darkgrey",

                            color: activeSortBy == "popular" && "white",
                          }}
                          className="nav-link active"
                          href="#"
                        >
                          Popular
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveSortBy("recommended");
                          setIsLoading(true);
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeSortBy == "recommended" && "darkgrey",

                            color: activeSortBy == "recommended" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Recommended
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveSortBy("rating");
                          setIsLoading(true);
                        }}
                      >
                        <a
                          style={{
                            background: activeSortBy == "rating" && "darkgrey",

                            color: activeSortBy == "rating" && "white",
                          }}
                          className="nav-link"
                          href="#"
                        >
                          Rating
                        </a>
                      </li>
                      <li
                        className="nav-item"
                        onClick={() => {
                          setActiveSortBy("time-updated");
                          setIsLoading(true);
                        }}
                      >
                        <a
                          style={{
                            background:
                              activeSortBy == "time-updated" && "darkgrey",

                            color: activeSortBy == "time-updated" && "white",
                          }}
                          className="nav-link"
                        >
                          Time Updated
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sorting-content">
                  <div className="row">
                    {isLoading ? (
                      <div className="loader">
                        <Loader
                          type="TailSpin"
                          color="darkgrey"
                          height={100}
                          width={100}
                        />
                      </div>
                    ) : (
                      dummyCards.map((item, index) => {
                        // console.log(item);
                        return (
                          <div key={index} className="col-lg-6"
                          onClick={() => {
                            setData({...data,...item.isFavorite=!item.isFavorite});
                          }}>
                            <div className="novel-box">
                              <div className="row">
                                <div className="col-4">
                                  <a href="">
                                    <img
                                      className="featured-img"
                                      src={book}
                                      alt=""
                                    ></img>
                                  </a>
                                </div>
                                <div className="col-8">
                                  <a href="#">
                                    <h1 className="novel-heading">
                                      {item.title}
                                    </h1>
                                  </a>
                                  <p className="novel-excerpt">
                                    {item.description}
                                  </p>
                                  <div className="row rating-chapter">
                                    <div className="col-10">
                                      <span className="rating">
                                        <i className="fas fa-star"></i>
                                        {item.rating}
                                      </span>
                                      <span className="chapter">
                                        <svg
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          className="mr4 fs16"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M4 2h10l6 6v14H4V2zm4 4h4v2H8V6zm8 6v-2H8v2h8z"
                                            fill="#000"
                                          ></path>
                                        </svg>{" "}
                                        {`${item.chapters} Chapters`}
                                      </span>
                                    </div>
                                    {item.isFavorite ? (
                                      <div className="col-2 star">
                                        <i className="fas fa-heart"></i>
                                      </div>
                                    ) : (
                                      <div className="col-2 star">
                                        <i class="far fa-heart"></i>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SearchPage;

const dummyCards = [
  {
    _id: 1,
    image: Book,
    title: "My Vampire System",
    description:
      "The human Race is at war with the Vicious Dalki and when they needed help more than ever, THEY started to come forward.",
    rating: 4.63,
    chapters: 1331,
    isFavorite: false,
  },
  {
    _id: 2,
    image: Book,
    title: "My Vampire System",
    description:
      "The human Race is at war with the Vicious Dalki and when they needed help more than ever, THEY started to come forward.",
    rating: 4.63,
    chapters: 1331,
    isFavorite: false,
  },
  {
    _id: 3,
    image: Book,
    title: "My Vampire System",
    description:
      "The human Race is at war with the Vicious Dalki and when they needed help more than ever, THEY started to come forward.",
    rating: 4.63,
    chapters: 1331,
    isFavorite: false,
  },
  {
    _id: 4,
    image: Book,
    title: "My Vampire System",
    description:
      "The human Race is at war with the Vicious Dalki and when they needed help more than ever, THEY started to come forward.",
    rating: 4.63,
    chapters: 1331,
    isFavorite: false,
  },
  {
    _id: 5,
    image: Book,
    title: "My Vampire System",
    description:
      "The human Race is at war with the Vicious Dalki and when they needed help more than ever, THEY started to come forward.",
    rating: 4.63,
    chapters: 1331,
    isFavorite: false,
  },
  {
    _id: 6,
    image: Book,
    title: "My Vampire System",
    description:
      "The human Race is at war with the Vicious Dalki and when they needed help more than ever, THEY started to come forward.",
    rating: 4.63,
    chapters: 1331,
    isFavorite: false,
  },
  {
    _id: 7,
    image: Book,
    title: "My Vampire System",
    description:
      "The human Race is at war with the Vicious Dalki and when they needed help more than ever, THEY started to come forward.",
    rating: 4.63,
    chapters: 1331,
    isFavorite: false,
  },
  {
    _id: 8,
    image: Book,
    title: "My Vampire System",
    description:
      "The human Race is at war with the Vicious Dalki and when they needed help more than ever, THEY started to come forward.",
    rating: 4.63,
    chapters: 1331,
    isFavorite: false,
  },
  {
    _id: 9,
    image: Book,
    title: "My Vampire System",
    description:
      "The human Race is at war with the Vicious Dalki and when they needed help more than ever, THEY started to come forward.",
    rating: 4.63,
    chapters: 1331,
    isFavorite: false,
  },
  {
    _id: 10,
    image: Book,
    title: "My Vampire System",
    description:
      "The human Race is at war with the Vicious Dalki and when they needed help more than ever, THEY started to come forward.",
    rating: 4.63,
    chapters: 1331,
    isFavorite: true,
  },
];
