import React, { useEffect, useState } from "react";
import "../Styles/ReadbookPage.css";
import Header from "../Components/Header";
import BOOK_CARD from "../Assets/Images/book-card.png";
import Logo from "../Assets/Images/csnovels-logo.svg";
import CHECK from "../Assets/Images/check.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import $ from "jquery";

import {
  faTimes,
  faLock,
  faCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
export const ReadBookPage = () => {
  const [fontSize, setFontSize] = useState(14);
  const [toggleContentAndOptions, setToggleContentAndOptions] = useState("");

  const onPressYellowButton = () => {
    $("body").removeClass("black_bg , white_bg");
    $("body").toggleClass("yellow_bg");
  };

  const onPressBlackButton = () => {
    $("body").removeClass("yellow_bg, white_bg");
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
  return (
    <>
      <Header />
      <div className="read-book-body" style={{ backgroundColor: "red" }}>
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
        <section className="section-1">
          <div className="row">
            <div className="col-lg-6 left-header">
              <div className="logo">
                <img src={Logo} className="img-fluid" alt="" />
              </div>
              <div className="book-title">
                <h3>The Ancients World / Characters as of chapter 41</h3>
              </div>
            </div>
            <div className=" col-lg-6 right-header">
              <a href="#" className="btn-sm">
                SIGN IN
              </a>
            </div>
          </div>
        </section>
        <section
          className={`chapter-sec ${
            toggleContentAndOptions === "display_tables"
              ? "display_tables"
              : toggleContentAndOptions === "display_options"
              ? "display_options"
              : ""
          }`}
        >
          <div className="container">
            <div className="book_img">
              <img src={BOOK_CARD} className="img-fluid" alt="" />
              <span className="original">Original</span>
            </div>
            <div className="book_text">
              <h3>The Ancients World</h3>
              <h2>
                Author: <span>easyread</span>
              </h2>
              <h4>© Webnovel</h4>
            </div>
            <div className="hr_book">
              <img src={BOOK_CARD} className="img-fluid" alt="" />
            </div>
            <div className="chapter_content">
              <h3> Characters as of chapter 41</h3>
              <p>
                (Cera Adamo) - The son of Violet Adamo and Christian Adamo. Cera
                is the main character of the story and returned 5 years into the
                past after using a world item in Ancients World. Cera used his
                meta knowledge to take the best offensive and defensive class in
                Ancients World. His class is called The Son of Arch-Angel
                Michael. The lore behind the class is you are the long lost son
                of Amelia, a human woman, and Arch-Angel Michael. The grade of
                the class is divine which is the highest possible level. Cera
                used a reward that he got from a mission called a guild token
                and sold it, the benefits of legacy and higher classes are
                incredible. They do come with downsides however, Cera's class
                receives half exp and takes twice as long to level up. He also
                is unable to join guilds, which is why he sold the guild token
                for a ridiculous amount of money. His family was falling apart
                slowly because of crippling debt, now they can live there life
                however they please. Cera is on his way to find The Hermit Flint
                at this point in the story, he intends to use the exp from the
                rewards to make up for lost time in the city of eclipse and the
                trial of Sword Saint Monrell.
              </p>
              <p>
                Cera is the one responsible for reviving the fairy kingdom and
                awaking The Holy Willow Tree. He also awoke Fenrir by proxy, the
                history of Fenrir can be read in Chapter 22. Cera also retrieved
                a legendary item from the Ancient Ruins of the Dryads in a quest
                to help the rebellion in the country of Zenith. The legendary
                item didn't fit his class and he had no intention to actually
                keep it. All of this can be read between chapters 10 and 15.
                After his time in his starting city. Blue Grass, was complete he
                made his way to the country of Vedersfall and the city of
                eclipse. Here he took the trial of Sword Saint Monrell and
                received 2 powerful skills and an incredible legendary sword
                called The Witness. All of this can be read between chapters 30
                and 38. Cera is now searching for the mysterious hermit Flint.
              </p>
              <p>
                (Christian Adamo) - The father of Cera and husband of Violet.
                Christian Adamo is a hard working man who worked from dawn to
                dusk to keep his family afloat. He worked at a factory everyday
                since the first born child, Hailey Adamo, came into there lives.
                Christian never bothered Cera about how much he gamed and spent
                time in his room because Cera always found a way to help
                financially. This is a trait missing his his favorite child
                Hailey, he clearly spoiled her a little to much and now there is
                conflict between Violet and Hailey. Christian no longer works
                anymore since the guild token Cera sold set them up for life, he
                now spends all his time with his wife making up for lost time
                between the two of them. They have already paid off there debt
                and are moving to a bigger house in a better neighborhood.
              </p>
              <p>
                (Violet Adamo) - The mother of Cera and wife of Christian.
                Violet Adamo is a loving and hardworking mother despite working
                full time just like her husband to provide for the family.
                Violet loved being a mother when Hailey was first born, but her
                favorite of the three children she has is Cera. Violet and
                Hailey are at war right now because Hailey refuses to clean up
                her act and start acting like an adult. After Cera successfully
                sold his guild token Violet no longer knows what to do with her
                life. All financial responsibilities are gone because they are
                filthy rich now. Cera was very adamant to both his parents to
                splurge money beyond anything they ever dreamed. However they
                are still adjusting to the new life style and are still trying
                to budget, old habits die hard they say.
              </p>
            </div>
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
            <span> Volume 0:Auxiliary Volume</span>
            <ul className="chapter_headings">
              <li>
                <a href="#">Characters as of chapter 41</a>
              </li>
              <li>
                <a href="#">Information about the leveling system, class...</a>
              </li>
              <li>
                <a href="#">I have come up with a great idea!!</a>
              </li>
              <li>
                <a href="#">I've changed the cover picture</a>
              </li>
              <li>
                <a href="#">Read this if you want</a>
              </li>
              <li>
                <a href="#">Story is back and with a new writing style!</a>
              </li>
            </ul>
            <ul className="chapter-count">
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
            </ul>
            <div className="chapters_range">
              <ul>
                <li>
                  <a href="#">1-100</a>
                </li>
                <li>
                  <a href="#">101-200</a>
                </li>
                <li>
                  <a href="#">201-300</a>
                </li>
                <li>
                  <a href="#">301-383</a>
                </li>
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
};
