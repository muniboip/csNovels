import React from "react";
import Header from "../Components/Header";
import { useState } from "react";
import Logo from "../Assets/Images/csnovels-logo.svg";
import google_img from "../Assets/Images/google.png";
// import facebook_img from "../Assets/Images/facebook.png";
// import discord_img from "../Assets/Images/discord.png";
import email_img from "../Assets/Images/email (2).png"
import discord_img2 from "../Assets/Images/discord (2).png";
import twitter_img from "../Assets/Images/twitter.png";
import mail_img from "../Assets/Images/mail.png";
import huawei_img from "../Assets/Images/huawei.png";

import {
  faThLarge,
  faBook,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import BOOK_CARD from "../Assets/Images/book-card.png";
import MostWantedNovelsMapper from "../Components/MostWantedNovelsMapper";
import OngoingNovelsMapper from "../Components/OngoingNovelsMapper";
import Top10Mapper from "../Components/Top10Mapper";
import SliderComp from "../Components/SliderComp";
// import Modal from "../Components/Modal";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";
import Modal from "react-modal";
import {connect} from 'react-redux';
import * as actions from '../store/actions/actions';

import THREE_LINES from "../Assets/Images/three-lines.png";
import BOOK1 from "../Assets/Images/top10/1.png";
import BOOK2 from "../Assets/Images/top10/2.png";
import BOOK3 from "../Assets/Images/top10/3.png";
import BOOK4 from "../Assets/Images/top10/4.png";
import BOOK5 from "../Assets/Images/top10/5.png";
import BOOK6 from "../Assets/Images/top10/6.png";
import BOOK7 from "../Assets/Images/top10/7.png";
import BOOK8 from "../Assets/Images/top10/8.png";
import BOOK9 from "../Assets/Images/top10/9.png";
import BOOK10 from "../Assets/Images/top10/10.png";
import BOOK11 from "../Assets/Images/top10/11.png";
import BOOK12 from "../Assets/Images/top10/12.png";
import URBAN from "../Assets/Images/urban.png";
import SCIFI from "../Assets/Images/scifi.png";
import FANTASY from "../Assets/Images/fantasy.png";
import Countdown from "react-countdown";
import SLIDE_IMAGE_1 from "../Assets/Images/slide-image.png";
import SLIDE_IMAGE_2 from "../Assets/Images/slide-image2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import CompletedNovels from "../Components/CompletedNovels";

import cs from "../Assets/Images/backgroung-image.png";
import "../Styles/Mirza.css";
import DiscordOauth2 from "discord-oauth2";

// console.log(DiscordOauth2, "-------------------------------------------");
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const HomePage = ({books_reducer,library_reducer}) => {
  // const [dateDiscord, setDateBegin] = useState(new Date.now())
  // const datee = new Date().getMilliseconds()
  // var dateDiscord = datee
  const freeBookOfWeek = {
    _id: 1,
    title:
      "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test Two Lines Even Test Test Test Test Test Test Test",
    category: "urban",
    heading: "great marshal",
    chapters: 3471,
    status: "completed",
    image: BOOK_CARD,
    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
  };

  const [mostPopular, setMostPopular] = useState(books_reducer.books);

  const [ongoing, setOngoing] = useState([
    {
      _id: 1,
      status: "completed",
      heading: "great marshal",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 2,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 3,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 4,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 5,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 6,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Two Lines Even Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
  ]);

  const [completed, setCompleted] = useState([
    {
      _id: 1,
      status: "completed",
      heading: "great marshal",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 2,
      heading: "great marshal",
      status: "completed",
      title: "Book Title Goes Here",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 3,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 4,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 5,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test Two",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 6,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test Two",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 7,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test Two",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 8,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test Two",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
  ]);

  const [completedDesktop, setCompletedDesktop] = useState([
    {
      _id: 3,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 4,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 5,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test Two",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 6,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test Two",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 7,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test Two",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
    {
      _id: 8,
      heading: "great marshal",
      status: "completed",
      title:
        "Book Title Goes Here On Even Two Lines Test Test Test Test Test Test Test Two",
      category: "urban",
      chapters: 3471,
      image: BOOK_CARD,
      description:
        "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available  Lorem ipsum may be used as a placeholder before final copy is available..",
    },
  ]);
  const [top10, setTop10] = useState([
    {
      _id: 1,
      name: "my vampie system",
      genre: "fantasy",
      rating: 4.6,
      image: BOOK1,
    },
    {
      _id: 2,
      name: "supreme magus",
      genre: "fantasy",
      rating: 4.8,
      image: BOOK2,
    },
    {
      _id: 3,
      name: "cultivation online",
      genre: "video games",
      rating: 4.6,
      image: BOOK3,
    },
    {
      _id: 4,
      name: "my three wives are beautiful",
      genre: "fantasy",
      rating: 4.9,
      image: BOOK4,
    },
    {
      _id: 5,
      name: "my maids are all antagonis",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK5,
    },
    {
      _id: 6,
      name: "blood warlock: succubus panetric",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK6,
    },
    {
      _id: 7,
      name: "my three wives are beautiful",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK7,
    },
    {
      _id: 8,
      name: "complete martial arts attribution",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK7,
    },
    {
      _id: 9,
      name: "top tier proviene, secrtely",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK8,
    },
    {
      _id: 10,
      name: "my girlfriend from turquios",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK9,
    },
  ]);

  const [recent, setRecent] = useState([
    {
      _id: 1,
      name: "birth of the demonic sword",
      genre: "fantasy",
      rating: 4.6,
      image: BOOK8,
    },
    {
      _id: 2,
      name: "my vampie system",
      genre: "fantasy",
      rating: 4.6,
      image: BOOK1,
    },
    {
      _id: 3,
      name: "dual cultivation",
      genre: "video games",
      rating: 4.6,
      image: BOOK11,
    },
    {
      _id: 4,
      name: "my three wives are beautiful",
      genre: "fantasy",
      rating: 4.9,
      image: BOOK4,
    },
    {
      _id: 5,
      name: "farming inside the dungeon",
      genre: "fantasy",
      rating: 3.9,
      image: BOOK12,
    },
  ]);
  const [chapterUpdates, setChapterUpdates] = useState([
    {
      _id: 1,
      name: "the amazing son in law",
      chapters: 2504,
      date: new Date(),
    },
    { _id: 2, name: "No. 1 supreme warrior", chapters: 4335, date: new Date() },
    {
      _id: 3,
      name: "the amazing son in law",
      chapters: 2212,
      date: new Date(),
    },
    { _id: 4, name: "No. 1 supreme warrior", chapters: 3422, date: new Date() },
  ]);

  const [images, setImages] = useState([
    {
      _id: 1,
      image: SLIDE_IMAGE_1,
    },
    {
      _id: 2,
      image: SLIDE_IMAGE_1,
    },
    {
      _id: 3,
      image: SLIDE_IMAGE_1,
    },
  ]);
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [signupmodalIsOpen, setSignupIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    console.log("object");
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const clientId =
  //   "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com";

  const responseGoogle = (response) => {
    console.log(response);
  };
  const oauth = new DiscordOauth2();

  const dscrd_auth = async () => {
    let headerss = new Headers();

    headerss.append("Access-Control-Allow-Origin", "http://localhost:3000");
    headerss.append("Access-Control-Request-Headers", "Content-Type");
    headerss.append("Content-Type", "application/x-www-form-urlencoded");
    headerss.append("Access-Control-Allow-Headers", "Accept");
    // try {
    //   const res = await oauth
    //   // client_id=923179004788355082
    //   // &redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F
    //   // &response_type=code
    //   // &scope=email
    //     .tokenRequest({
    //       clientId: "923191410671378522",
    //       redirectUri: "http://localhost:3000",
    //       response_type: "OAuth2",
    //       scope: "ahmed.mirza@oip.com.pk",
    //       grantType: "authorization_code",
    //       clientSecret: "_QyJxP33Rx9LNMSNlW5aLkzy5SjoNOwP",
    //       access_token:"OTIxMzU4NjIwNzI4MzY5MTYy.YcMOoA.hZ19Xuo8ABL7p3B8UR7C_b4drpQ",
    //     })
    //     .then(console.log);
    // } catch (error) {
    //   console.log(error);
    // }
    //  var unique = Math.random()
    const data = {
      clientId: "923179004788355082",
      clientSecret: "_QyJxP33Rx9LNMSNlW5aLkzy5SjoNOwP",
      access_token:
        "OTIxMzU4NjIwNzI4MzY5MTYy.YcMOoA.hZ19Xuo8ABL7p3B8UR7C_b4drpQ",
      code: "standard OAuth2",
      scope: "email identify connections",
      grantType: "authorization_code",
      redirectUri: `http://localhost:3000/`,
    };
    const URL =
      "https://discord.com/api/oauth2/authorize?client_id=923179004788355082&redirect_uri=http://localhost:3000/&response_type=code&scope=email identify connections";
    fetch(
      `http://discord.com/api/oauth2/authorize?client_id=${data.clientId}&redirect_uri=${data.redirectUri}&response_type=code&scope=${data.scope}`,
      {
        mode: "cors",
        headers: headerss,
        method: "GET",
      }
    )
      .then(function (res) {
        console.log(res);
      })
      .catch(function (res) {
        console.log(res);
      });
  };
  return (
    <>
      {/* <div className="App"> */}
      <Header />
      {/* Slider  */}
      <SliderComp images={images} />
      <div className="container">
        {/* Most Popular  */}
        <div className="section-div most_popular">
          <div className="mp-books-header">
            <p className="mp-books-header-title">Most Popular</p>
            <p className="mp-books-view-all">
              VIEW ALL {<FontAwesomeIcon icon={faAngleRight} />}
            </p>
          </div>
          {/* <div className="section-heading-div">
            <p className="section-heading">MOST POPULAR</p>
            <p className="view-all">
              VIEW ALL <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </div> */}
          {/* </div> */}
          <div className="row center-most-popular-in-mobile spacing-adjust">
            {mostPopular.map((item, idx) => (
              <MostWantedNovelsMapper
                key={idx}
                item={item}
                onClick={() => console.log("Book Card")}
              />
            ))}
          </div>
        </div>

        {/* Ongoing Novels  */}
        <div className="section-div ongoing_novel">
          <div className="section-heading-div">
            <p className="section-heading">ONGOING NOVELS</p>
            <p className="view-all">
              VIEW ALL <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </div>

          {/* </div> */}
          <div className="row row-425 spacing-adjust">
            {ongoing.map((item, idx) => (
              <OngoingNovelsMapper
                key={idx}
                item={item}
                onClick={() => console.log("Book Card")}
              />
            ))}
          </div>
        </div>

        {/* Top Ranking */}
        <div className="section-div top-10-section top_ranking">
          <p className="section-heading">TOP 10 RANKING</p>
          <hr style={{ height: "1px", backgroundColor: "rgba(0,0,0,0.02)" }} />

          {/* Top 10 & Recent Arrivals  */}
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <p className="section-heading-inner">TOP 10.</p>
              <div className="books-container">
                {top10.map((ele, idx) => (
                  <Top10Mapper
                    key={idx}
                    item={ele}
                    index={idx}
                    onClick={() => console.log("Top 10")}
                  />
                ))}
              </div>
            </div>

            <div className="col-md-4">
              <p className="section-heading-inner">RECENT ARRIVALS</p>

              <div className="row-425 row-426 recent-width recent-books-container">
                {recent.map((ele, idx) => (
                  <Top10Mapper
                    key={idx}
                    item={ele}
                    index={idx}
                    onClick={() => console.log("Top 10")}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Free Book  */}
        <div className="free-book-section" style={{ position: "relative" }}>
          <p className="free-book-label">Free Book of The Week</p>
          <div className="gradient-border">
            <div className="free-book-rectangle grounded-radiants">
              <div className="timer-and-free-book-details">
                {/* Timer  */}
                <div className="timer-div">
                  <p className="count-label">00</p>
                  <p className="day-label">D</p>
                  <p className="count-label">00</p>
                  <p className="day-label">H</p>
                  <p className="count-label">00</p>
                  <p className="day-label">M</p>
                </div>
                {/* Book details  */}
                <div className="d-flex flex-row">
                  <span className="gradient-blue-ball" />
                  <span className="gradient-green-ball" />
                  <span className="gradient-red-ball" />
                  <div className="three-lines">
                    <img src={THREE_LINES} className="three-lines-image" />
                  </div>
                  <div className="free-book-image">
                    <div>
                      <p className="free-book-status">
                        {freeBookOfWeek.status}{" "}
                      </p>
                      <p className="free-book-heading">
                        {freeBookOfWeek.heading}
                      </p>
                      <p className="mp-cs-text">CS</p>
                    </div>
                    <img
                      src={freeBookOfWeek.image}
                      className="free-book-image"
                    />
                  </div>

                  <div className="free-book-details">
                    <p className="free-book-title">
                      {window.screen.width <= 768
                        ? `${freeBookOfWeek.title.substring(0, 30)}...`
                        : freeBookOfWeek.title.length > 50
                        ? `${freeBookOfWeek.title.substring(0, 50)}...`
                        : freeBookOfWeek.title}
                    </p>
                    <p className="free-book-category">
                      <FontAwesomeIcon icon={faThLarge} />{" "}
                      {freeBookOfWeek.category}
                    </p>
                    <p className="free-book-description">
                      {freeBookOfWeek.description.length > 150
                        ? `${freeBookOfWeek.description.substring(0, 150)}...`
                        : freeBookOfWeek.description}
                    </p>
                    <div className="free-chapters-div">
                      <p className="free-book-chapters">
                        <FontAwesomeIcon icon={faBook} />{" "}
                        {`${freeBookOfWeek.chapters} Chapters`}
                      </p>
                      <div className="read-div mt-1">
                        <p className="text-center read-p">READ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories  */}
        <div className="book-categories-section">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div
                style={{
                  background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${URBAN})`,
                }}
                className="book-category-image"
              >
                <p className="book-category-label">urban</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div
                style={{
                  background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${SCIFI})`,
                }}
                className="book-category-image"
              >
                <p className="book-category-label">Sci-Fi</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div
                style={{
                  background: `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${FANTASY})`,
                }}
                className="book-category-image"
              >
                <p className="book-category-label">Fantasy</p>
              </div>
            </div>
          </div>
        </div>

        {/* Completed Novels  */}
        <div className="section-div complete_novels">
          <div className="section-heading-div">
            <p className="section-heading">COMPLETED NOVELS</p>
            <p className="view-all">
              VIEW ALL <FontAwesomeIcon icon={faAngleRight} />
            </p>
          </div>
          {/* </div> */}
          <div className="row">
            {window.screen.width > 1024
              ? completedDesktop.map((item, idx) => (
                  <CompletedNovels
                    key={idx}
                    item={item}
                    onClick={() => console.log("Book Card")}
                  />
                ))
              : completed.map((item, idx) => (
                  <CompletedNovels
                    key={idx}
                    item={item}
                    onClick={() => console.log("Book Card")}
                  />
                ))}
          </div>
        </div>
        <div>
          <button onClick={openModal}>Open Modal</button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="border"><p></p></div>
            <div className="modal-css" onClick={closeModal}>
              <svg
                data-dismiss="modal"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 64 64"
              >
                <line
                  x1="9.37"
                  x2="54.63"
                  y1="9.37"
                  y2="54.63"
                  fill="none"
                  stroke="#010101"
                  stroke-miterlimit="10"
                  stroke-width="4"
                />
                <line
                  x1="9.37"
                  x2="54.63"
                  y1="54.63"
                  y2="9.37"
                  fill="none"
                  stroke="#010101"
                  stroke-miterlimit="10"
                  stroke-width="4"
                />
              </svg>
              <img src={Logo} className="header-logo" />
              <h2 style={{ color: "black", marginTop: "30px" }}>
                Welcome To Canned Splam
              </h2>
              <p class="modal1text">Sign in or create an account to begin reading!</p>
              <GoogleLogin
                clientId="85172365095-krm5hqh707fq8o6p5ovs7vla5d8r5q2r.apps.googleusercontent.com"
                buttonText="Login"
                onRequest={() => {
                  console.log("login......................");
                }}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={(renderProps) => {
                  console.log(renderProps, "::::::::::::::");
                  return (
                    <div
                      className="google-logIn-div"
                      onClick={() => renderProps.onClick()}
                    >
                      <img
                        className="google-Icon"
                        src={google_img}
                        style={{ width: "35px", height: "auto" }}
                      />
                      <p className="google-logIn-p">LOG IN WITH GOOGLE</p>
                    </div>
                  );
                }}
                // cookiePolicy={"single_host_origin"}
              />
              
              {/* <div

                onClick={() => {
                  console.log("object");
                  // dscrd_auth();
                }}
                className="facebook-logIn-div"
              >
                <span className="facebook-Icon">
                  <img
                    src={facebook_img}
                    style={{ width: "35px", height: "auto" }}
                  />
                </span> */}
              {/* <a href="https://discord.com/api/oauth2/authorize?client_id=923179004788355082&redirect_uri=http://localhost:3000/&response_type=code&scope=email identify connections" >    <p className="facebook-logIn-p">LOG IN WITH FACEBOOK</p></a> */}
              {/* <p className="facebook-logIn-p">LOGIN WITH FACEBOOK</p>
              </div> */}
              <div
                onClick={() => {
                  console.log("object");
                  dscrd_auth();
                }}
                className="discord-logIn-div"
              >
                <span className="discord-Icon">
                  <img
                    src={discord_img2}
                    style={{ width: "35px", height: "auto" }}
                  />
                </span>

                <p className="discord-logIn-p">
                  <a href="https://discord.com/api/oauth2/authorize?client_id=923179004788355082&redirect_uri=http://localhost:3000/&response_type=code&scope=email identify connections">
                    LOGIN WITH DISCORD
                  </a>
                </p>
              </div>
              <div
                onClick={() => {
                  console.log("object");
                  
                }}
                className="email-logIn-div"
              >
                <span className="email-Icon">
                  <img
                    src={email_img}
                    style={{ width: "35px", height: "auto" }}
                  />
                </span>
                <p className="email-login-p">
                    LOGIN WITH EMAIL
                </p>
              </div>
              {/*               
              <div className="signIn-logos">
                <img
                  src={twitter_img}
                  style={{ width: "50px", height: "50px" }}
                />
                <img src={mail_img} style={{ width: "50px", height: "50px" }} />
                <span className="huawei-Icon">
                  <img
                    class
                    src={huawei_img}
                    style={{ width: "40px", height: "40px" }}
                  />
                </span>
              </div> */}
              <hr
                style={{
                  color: "grey",
                  backgroundColor: "grey",
                  height: 0.5,
                  width: "60%",
                  marginTop: "30px",
                }}
              />
              <div className="text-color">
                <p>Don't have an account? </p>
              </div>
              {/* <p style={{ color: "blue" }}>Create Account</p> */}
              <div
                onClick={() => {
                  console.log("object");
                  
                }}
                className="create-account-div"
              >
                <p className="create-account-p">
                    CREATE ACCOUNT
                </p>
              </div>
            </div>

            {/* <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form> */}
          </Modal>
        </div>

        <div>
          <button onClick={()=>setSignupIsOpen(true)}>Open Modal</button>
          <Modal
            isOpen={signupmodalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={()=>setSignupIsOpen(false)}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="border"><p></p></div>
            <div className="modal-css" onClick={()=>setSignupIsOpen(false)}>
              <svg
                data-dismiss="modal"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 64 64"
              >
                <line
                  x1="9.37"
                  x2="54.63"
                  y1="9.37"
                  y2="54.63"
                  fill="none"
                  stroke="#010101"
                  stroke-miterlimit="10"
                  stroke-width="4"
                />
                <line
                  x1="9.37"
                  x2="54.63"
                  y1="54.63"
                  y2="9.37"
                  fill="none"
                  stroke="#010101"
                  stroke-miterlimit="10"
                  stroke-width="4"
                />
              </svg>
             
             <h1 className="signup-top"><i class="fas fa-arrow-left"></i> Sign in with Email</h1>
             <form action="/action_page.php" className="poppup-2">
              <div class="form-group popup-form">
                <label for="email">EMAIL ADDRESS:</label>
                <input type="email" class="form-control" id="email"></input> 
              </div>
              <div class="form-group popup-form">
                <label for="pwd">PASSWORD:</label>
                <input type="password" class="form-control" id="pwd"></input>
              </div>
           
            <button type="submit" class="btn btn-primary">SIGN IN</button>
          </form>
          <div className="forget">
            <a href=""><span className="forgot-pass">FORGOT PASSWORD?</span></a>
            <a href=""><span className="tap-here">TAP HERE</span></a>
          </div>

              {/*               
              <div className="signIn-logos">
                <img
                  src={twitter_img}
                  style={{ width: "50px", height: "50px" }}
                />
                <img src={mail_img} style={{ width: "50px", height: "50px" }} />
                <span className="huawei-Icon">
                  <img
                    class
                    src={huawei_img}
                    style={{ width: "40px", height: "40px" }}
                  />
                </span>
              </div> */}
              <hr
                style={{
                  color: "grey",
                  backgroundColor: "grey",
                  height: 0.5,
                  width: "60%",
                  marginTop: "30px",
                }}
              />
              <div className="text-color">
                <p>Don't have an account? </p>
              </div>
              {/* <p style={{ color: "blue" }}>Create Account</p> */}
              <div
                onClick={() => {
                  console.log("object");
                  
                }}
                className="create-account-div"
              >
                <p className="create-account-p">
                    CREATE ACCOUNT
                </p>
              </div>
            </div>

            {/* <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form> */}
          </Modal>
        </div>

        {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
          Open modal
        </button>

      
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Modal Heading</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                Modal body..
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div> */}

        {/* Recent Chapter Updates  */}
        <p className="recent-updates-label">Recent Chapter Updates</p>

        <div className="books-table mt-3 mb-5">
          <table className="table recent-update-table table-striped">
            <thead className="table-header">
              <tr>
                <th
                  scope="col"
                  className="pl-4 border-0 table-header-labels th-1"
                >
                  Book
                </th>
                <th scope="col" className="border-0 table-header-labels th-2">
                  Chapter
                </th>
                <th scope="col" className="border-0 table-header-labels th-2">
                  Time
                </th>
                <th scope="col" className="border-0"></th>
              </tr>
            </thead>
            <tbody>
              {chapterUpdates.map((item, idx) => (
                // <tr key={idx} className={(idx % 2 !== 0 && "color-border"}>
                <tr key={idx} className={`${idx % 2 !== 0 && "color-border"}`}>
                  <td className="border-0 ">
                    <p className="table-labels pl-4">{item.name} </p>
                  </td>
                  <td className="border-0 ">
                    <p className="table-labels">{item.chapters} </p>
                  </td>
                  <td className="border-0 ">
                    <p className="table-labels">
                      {moment(item.date).fromNow()}{" "}
                    </p>
                  </td>
                  <td className="border-0 read-div">
                    <p className="text-center read-p">READ</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
      {/* </div> */}
    </>
  );
};

const mapstatetoprops = ({books_reducer,library_reducer})=>{
  return {books_reducer,library_reducer};
} 
  export default connect(mapstatetoprops,actions)(HomePage);
