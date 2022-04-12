import React, { useEffect, useState } from "react";
import "../Styles/ReadbookPage.css";
import Header from "../Components/Header";
import BOOK_CARD from "../Assets/Images/book-card.png";
import Logo from "../Assets/Images/csnovels-logo.svg";
import CHECK from "../Assets/Images/check.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InfiniteScroll from "react-infinite-scroll-component";
import $ from "jquery";
import * as actions from "../store/actions/actions";
import {
  faTimes,
  faLock,
  faCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
import { AirplanemodeActiveSharp, BreakfastDining } from "@mui/icons-material";
import { min } from "moment";

function ReadBookPage({
  authReducer,
  booksReducer,
  getChapterContent,
  getChapterTitles,
  getChapterContentforscroller,
}) {
  const [fontSize, setFontSize] = useState(14);
  const [chaptersTitles, setChaptersTitles] = useState(false);
  const isLogin = authReducer?.isLogin;
  const [chapterSets, setChapterSets] = useState(null);
  const [toggleContentAndOptions, setToggleContentAndOptions] = useState("");
  const accessToken = authReducer?.accessToken;
  const location = useLocation();
  const [chaptercontent, setChaptercontent] = useState([]);
  const [idIsSelected, setidIsSelected] = useState(false);
  const [dataOnTop,setDataOnTop] = useState(false)
  // useEffect(() => {

  //   const arr = [...chaptercontent];
  //   for (var i = 0; i < chaptercontent.length; i++) {
  //     if (chaptercontent[i][0].content != booksReducer.chapterContent[0].content) {
  //       arr[arr.length] = booksReducer.chapterContent;
  //       setChaptercontent(arr);
  //       break;
  //     }
  //   }
  // }, [booksReducer.chapterContent]);

  useEffect(() => {
    if(dataOnTop){

      const arr = [...chaptercontent];

      for (var i = chaptercontent.length; i < 1; i++) {
        arr[i] = arr[i-1]
        // if (
        //   chaptercontent[i][0].content != booksReducer.chapterContent[0].content
        // ) {
        //   arr[arr.length] = booksReducer.chapterContent;
        //   setChaptercontent(arr);
        //   break;
        // }
      }
      arr[0] =  booksReducer.chapterContent;
      setChaptercontent(arr);
      setDataOnTop(false)
    }else
    if (idIsSelected) {
      
      // setChaptercontent([])
      
      // const data =booksReducer?.chapterContent
      // console.log(data);
      setChaptercontent([booksReducer?.chapterContent]);
      window.scrollTo(0, 0)
      setidIsSelected(false)
    } else {
      const arr = [...chaptercontent];

      for (var i = 0; i < chaptercontent.length; i++) {
        if (
          chaptercontent[i][0].content != booksReducer.chapterContent[0].content
        ) {
          arr[arr.length] = booksReducer.chapterContent;
          setChaptercontent(arr);
          break;
        }
      }
    }
  }, [booksReducer.chapterContent]);



console.log(chaptercontent);
  const scrollToEnd = async () => {
    var key = "";
    booksReducer?.chaptersTitles.map((e, ind) => {
      if (e.name === chaptercontent[chaptercontent.length - 1][0].content) {
        key = ind;
      }
    });
    
    
    await getChapterContent(
      booksReducer?.chaptersTitles[key + 1]._id,
      bookId,
      accessToken
    );
  };
  const scrollToTop = async()=>{
    var key = "";
    booksReducer?.chaptersTitles.map((e, ind) => {
      if (e.name === chaptercontent[chaptercontent.length - 1][0].content) {
        key = ind;
      }
    });
    if(key>0){
    setDataOnTop(true)
    await getChapterContent(
      booksReducer?.chaptersTitles[key - 1]._id,
      bookId,
      accessToken
    );}
  }
  window.onscroll = function () {
    
    if (
      window.innerHeight + document.documentElement.scrollTop ==
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }else if(document.documentElement.scrollTop == 0){
      scrollToTop()
    }
  };

  const bookId = location.state.bookId;
  const BOOK_IMAGE = location.state.bookImage;
  const [chaptersRange, setChaptersRange] = useState([]);
  const BOOK_NAME = location.state.bookName;
  const [hasMoreData, setHasMoreData] = useState(true);
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedChapterId, setSelectedChapterId] = useState(null);

  useEffect(() => {
    getChapterTitles(bookId, accessToken);
    setChaptercontent([booksReducer.chapterContent]);
  }, []);

  const onPressYellowButton = () => {
    $("body").removeClass("black_bg , white_bg");
    $("body").toggleClass("yellow_bg");
  };

  const onPressBlackButton = () => {
    $("body").removeClass("yellow_bg , white_bg");
    $("body").toggleClass("black_bg");
  };

  const onPressWhiteButton = () => {
    $("body").removeClass("yellow_bg , black_bg");
    $("body").toggleClass("white_bg");
  };

  const _onPressFontSizeHandler = () => {
    if (fontSize < 20 && fontSize > 14) {
      $("body p").css({
        "font-size": fontSize,
      });
    } else {
      $("body p").css({
        "font-size": fontSize,
      });
    }
  };

  const _onPressApplyFont = (fontType) => {
    if (fontType == 1) {
      $("body  p").css("font-family", "Nunito Sans, sans-serif");
    } else {
      $("body  p").css("font-family", "Montserrat");
    }
  };

  useEffect(() => {
    _onPressFontSizeHandler();
  }, [fontSize]);

  useEffect(async () => {
    
    if (booksReducer?.chaptersTitles?.length > 0) {
      const CHAPTERS_LENGTH = booksReducer?.chaptersTitles?.length;
      const CHAPTERS = [...booksReducer?.chaptersTitles];
      const CHAPTERS_SETS = new Array(
        Math.ceil(CHAPTERS_LENGTH / Math.trunc(CHAPTERS_LENGTH / 4))
      )
        .fill()
        .map((_) => CHAPTERS?.splice(0, Math.trunc(CHAPTERS_LENGTH / 4)));
      let RANGE_SETS = [];
      let lastInnerArrLength = 0;
      CHAPTERS_SETS?.map((ele, idx) => {
        RANGE_SETS.push(
          `${lastInnerArrLength + 1}-${lastInnerArrLength + ele?.length}`
        );
        lastInnerArrLength = lastInnerArrLength + ele?.length;
      });
      setChaptersRange(
        RANGE_SETS?.map((ele, idx) => ({ index: idx, set: ele }))
      );
      getChapterContent(
        booksReducer?.chaptersTitles[0]._id,
        bookId,
        accessToken
      );
      setChapterSets(CHAPTERS_SETS);
      setChaptersTitles(CHAPTERS_SETS[0]);
      setSelectedRange({ index: 0, set: RANGE_SETS[0] });
      setSelectedChapterId(booksReducer?.chaptersTitles[0]?._id);
    }
  }, [booksReducer?.chaptersTitles]);

  useEffect(async () => {
    
    
    setidIsSelected(true);
    getChapterContentforscroller(selectedChapterId, bookId, accessToken);

    // setChaptercontent( [booksReducer.chapterContent]);
  }, [selectedChapterId]);

  const getOtherChapters = () => {
    // booksReducer.chaptersTitles.map((l, i) => {
    //   if (data[data.length - 1]) {
    //     if (l.name == data[data.length - 1][0].content) {
    //       getChapterContent(chaptersTitles[i + 1]._id, bookId, accessToken);
    //       return;
    //     }
    //   }
    // });
    // const content = booksReducer?.chapterContent;
    // if(content.length==0 ){
    //   sethasMore(false)
    // }
    // if (content[0].content == data[data.length - 1][0].content) {
    // } else {
    //   const dumb = [...data];
    //   dumb[dumb.length] = content;
    //   setdata(dumb);
    // }
    // setindex(index + 1);
  };

  // useEffect(() => {
  
  //   const content = booksReducer?.chapterContent;

  //   if (data.length > 0) {
  //     if (content[0].content != data[data.length - 1][0].content) {
  //       const dumb = [...data];
  //       dumb[dumb.length] = content;
  //       setdata(dumb);
  //     }
  //   } else {
  //     const dumb = [...data];
  //     dumb[dumb.length] = content;
  //     setdata(dumb);
  //   }
  // }, [booksReducer?.chapterContent]);

  useEffect(() => {
    
    let newList = [];
    chaptersRange?.filter((ele, idx) => {
      if (ele?.index === selectedRange?.index) {
        newList = chapterSets[idx];
      }
    });
    setChaptersTitles(newList);
  }, [selectedRange]);

  const BookReading = (books) => {
    
    return (
      <>
        <h3>{`${books.book[0]?.content}: Title`}</h3>

        {books.book?.map(
          (ele, idx) => idx !== 0 && <p className="mt-2">{ele?.content}</p>
        )}
      </>
    );
  };
  return (
    <>
      <Header />
      <div className="read-book-body">
        <section className="side_bar_func">
          <div className="icons_sidebar">
            <div className="hamburger">
              <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                  setToggleContentAndOptions(
                    toggleContentAndOptions === "display_tables"
                      ? ""
                      : "display_tables"
                  );
                }}
              />
            </div>
            <div className="settings">
              <FontAwesomeIcon
                icon={faCog}
                onClick={() => {
                  setToggleContentAndOptions(
                    toggleContentAndOptions === "display_options"
                      ? ""
                      : "display_options"
                  );
                }}
              />
            </div>
          </div>
        </section>
        <section className="table-"></section>
        <section className="section-1 my_readbook_sec1">
          <div className="row">
            <div className="col-lg-6 left-header">
              <div className="logo">
                <img src={Logo} className="img-fluid" alt="" />
              </div>
              <div className="book-title">
                <h3>{`${BOOK_NAME} / Characters as of ${booksReducer?.chapterContent[0]?.content}`}</h3>
              </div>
            </div>
            <div className=" col-lg-6 right-header">
              {!isLogin && (
                <a href="#" className="btn-sm">
                  SIGN IN
                </a>
              )}
            </div>
          </div>
        </section>

        <section
          className={`chapter-sec my_readbook_sec2 ${
            toggleContentAndOptions === "display_tables"
              ? "display_tables"
              : toggleContentAndOptions === "display_options"
              ? "display_options"
              : ""
          }`}
        >
          <div className="container">
            <div className="book_img">
              <img src={BOOK_IMAGE} className="img-fluid" alt="book-image" />
              <span className="original">Original</span>
            </div>
            <div className="book_text">
              <h3>{BOOK_NAME}</h3>
              {/* <h2>
                Author: <span>easyread</span>
              </h2> */}
              <h4>© CSNovels</h4>
            </div>
            <div className="hr_book">
              <img src={BOOK_IMAGE} className="img-fluid" alt="" />
            </div>

            {/* Book Content Paragraphs  */}
            <div className="chapter_content">
              <InfiniteScroll
                dataLength={booksReducer?.chapterContent?.length}
                scrollThreshold={"200px"}
                // next={() => scrollToEnd()}
                hasMore={hasMoreData}
                inverse={true}
                loader={
                  <div className="mt-3 mb-3 d-flex justify-content-center align-items-center">
                    <Loader
                      type="TailSpin"
                      color="darkgrey"
                      height={40}
                      width={40}
                    />
                  </div>
                }
              >
                {chaptercontent.map((item) => {
                  return <BookReading book={item} />;
                })}
              </InfiniteScroll>
            </div>
            {/* <div className="chapter_content">
              <InfiniteScroll
                dataLength={100} //This is important field to render the next data
                next={getOtherChapters}
                onScroll={getOtherChapters}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                // below props only if you need pull down functionality
                // refreshFunction={this.refresh}
                // pullDownToRefresh
                // pullDownToRefreshThreshold={50}
                // pullDownToRefreshContent={
                //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                // }
                // releaseToRefreshContent={
                //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                // }
              >
                
                 <BookReading book={booksReducer?.chapterContent} />;
                
              </InfiniteScroll>
            </div> */}

            {/* <h3>
                {`${booksReducer?.chapterContent[0]?.content}: ${chaptersTitles?.[0]?.title}`}
              </h3>
              {booksReducer?.chapterContent?.map(
                (ele, idx) =>
                  idx !== 0 && <p className="mt-2">{ele?.content}</p>
              )}
            </div> */}
            {/* </InfiniteScroll> */}
          </div>

          <div className="table_content visible_table">
            <h4>Table of Contents</h4>
            <span className="close">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => {
                  setToggleContentAndOptions("");
                }}
              />
            </span>
            <span> Volume 1</span>
            <ul className="chapter_headings">
              {chaptersTitles?.length > 0 &&
                chaptersTitles?.map((ele, idx) => {
                  return (
                    <li>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setSelectedChapterId(ele?._id);
                        }}
                        style={{
                          color:
                            selectedChapterId === ele?._id ? "#3b66f5" : "#000",
                          textTransform: "capitalize",
                        }}
                      >
                        {`${ele?.name?.match(/(\d+)/)[0]}.`}&nbsp; &nbsp;
                        {`${ele?.title}`}
                      </a>
                    </li>
                  );
                })}
            </ul>
            {/* <ul className="chapter-count">
              <li className="lock">
                <a href="#">Prologue </a>
                <FontAwesomeIcon
                  icon={faLock}
                  onClick={() => {
                    setToggleContentAndOptions("");
                  }}
                />
              </li>
              <li>
                <a href="#">Opening day of The Ancient World</a>
              </li>
              <li>
                <a href="#">The Divine Class </a>
              </li>
              <li>
                <a href="#">Chaos in both worlds</a>
              </li>
              <li>
                <a href="#">Slaying monsters and getting another quest </a>
              </li>
            </ul> */}
            <div className="chapters_range">
              <ul>
                {chaptersRange?.length > 0 &&
                  chaptersRange?.map((ele, idx) => (
                    <li>
                      <a
                        className={
                          selectedRange?.index == ele?.index && "blue-line"
                        }
                        href="#"
                        onClick={(e) => {
                          setSelectedRange(ele);
                          e.preventDefault();
                        }}
                      >
                        {ele.set}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="table_content display_visible">
            <h4>Display Options</h4>
            <span className="close">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => {
                  setToggleContentAndOptions("");
                }}
              />
            </span>
            <span>Background</span>
            <div className="bg-change-main">
              <div
                onClick={() => onPressWhiteButton()}
                className="white-btn bg-changer"
              >
                <img src={CHECK} alt="" className="img-fluid" />
              </div>
              <div
                onClick={() => onPressYellowButton()}
                className="yellow-btn bg-changer"
              >
                <img src={CHECK} alt="" className="img-fluid" />
              </div>
              <div
                onClick={() => onPressBlackButton()}
                className="black-btn bg-changer"
              >
                <img src={CHECK} alt="" className="img-fluid" />
              </div>
            </div>
            <span>Font</span>
            <div className="font-changer">
              <div className="nunito-font" onClick={() => _onPressApplyFont(1)}>
                <p>Nunito Sans</p>
              </div>
              <div className="merri-font" onClick={() => _onPressApplyFont(2)}>
                <p>Merriweather</p>
              </div>
            </div>
            <span>Size</span>
            <div className="size-changer">
              <div
                className="increasing_size"
                onClick={() => {
                  if (fontSize < 20) {
                    setFontSize(fontSize + 1);
                  }
                }}
              >
                A+
              </div>
              <div className="size">{fontSize}</div>
              <div
                className="decreasing_size"
                onClick={() => {
                  if (fontSize >= 14) {
                    setFontSize(fontSize - 1);
                  }
                }}
              >
                A-
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const mapStateToProps = ({ authReducer, booksReducer }) => {
  return {
    authReducer,
    booksReducer,
  };
};

export default connect(mapStateToProps, actions)(ReadBookPage);
