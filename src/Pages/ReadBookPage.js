import React from "react";
import Header from "../Components/Header";
import "../Styles/ReadbookPage.css";
import BOOK_CARD from "../Assets/Images/book-card.png";
import Logo from "../Assets/Images/csnovels-logo.svg";

export const ReadBookPage = () => {
  const onPressYellowButton = () => {
    $("body").removeClass("black_bg , white_bg");
    $("body").toggleClass("yellow_bg");
    // console.log("22")
  };

  const onPressBlackButton = () => {
    $("body").toggleClass("black_bg");
    $("body").removeClass("yellow_bg, white_bg");
    // console.log("2dfds2")
  };

  const onPressWhiteButton = () => {
    $("body").removeClass("yellow_bg , black_bg");
    $("body").toggleClass("white_bg");
    $("body").removeClass("yellow_bg , black_bg");
    // console.log("221321313")
  };

  return (
    <>
      <Header />
      <div className="read-book-body">
      <section class="side_bar_func">
        <div class="icons_sidebar">
          <div class="hamburger">
            <i
              onClick={() => {
                $(".chapter-sec").toggleClass("display_tables");
              }}
              class="fa fa-bars"
              aria-hidden="true"
            ></i>
          </div>
          <div class="settings">
            <i
              onClick={() => {
                $(".chapter-sec").toggleClass("display_options");
              }}
              class="fa fa-cog"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </section>
      <section class="table-"></section>
      <section class="section-1">
        <div class="row">
          <div class="col-lg-6 left-header">
            <div class="logo">
              <img src={Logo} class="img-fluid" alt="" />
            </div>
            <div class="book-title">
              <h3>The Ancients World / Characters as of chapter 41</h3>
            </div>
          </div>
          <div class=" col-lg-6 right-header">
            <a href="#" class="btn-sm">
              SIGN IN
            </a>
          </div>
        </div>
      </section>
      <section class="chapter-sec">
        <div class="container">
          <div class="book_img">
            <img src={BOOK_CARD} class="img-fluid" alt="" />
            <span class="original">Original</span>
          </div>
          <div class="book_text">
            <h3>The Ancients World</h3>
            <h2>
              Author: <span>easyread</span>
            </h2>
            <h4>© Webnovel</h4>
          </div>
          <div class="hr_book">
            <img src={BOOK_CARD} class="img-fluid" alt="" />
          </div>
          <div class="chapter_content">
            <h3> Characters as of chapter 41</h3>
            <p>
              (Cera Adamo) - The son of Violet Adamo and Christian Adamo. Cera
              is the main character of the story and returned 5 years into the
              past after using a world item in Ancients World. Cera used his
              meta knowledge to take the best offensive and defensive class in
              Ancients World. His class is called The Son of Arch-Angel Michael.
              The lore behind the class is you are the long lost son of Amelia,
              a human woman, and Arch-Angel Michael. The grade of the class is
              divine which is the highest possible level. Cera used a reward
              that he got from a mission called a guild token and sold it, the
              benefits of legacy and higher classes are incredible. They do come
              with downsides however, Cera's class receives half exp and takes
              twice as long to level up. He also is unable to join guilds, which
              is why he sold the guild token for a ridiculous amount of money.
              His family was falling apart slowly because of crippling debt, now
              they can live there life however they please. Cera is on his way
              to find The Hermit Flint at this point in the story, he intends to
              use the exp from the rewards to make up for lost time in the city
              of eclipse and the trial of Sword Saint Monrell.
            </p>
            <p>
              Cera is the one responsible for reviving the fairy kingdom and
              awaking The Holy Willow Tree. He also awoke Fenrir by proxy, the
              history of Fenrir can be read in Chapter 22. Cera also retrieved a
              legendary item from the Ancient Ruins of the Dryads in a quest to
              help the rebellion in the country of Zenith. The legendary item
              didn't fit his class and he had no intention to actually keep it.
              All of this can be read between chapters 10 and 15. After his time
              in his starting city. Blue Grass, was complete he made his way to
              the country of Vedersfall and the city of eclipse. Here he took
              the trial of Sword Saint Monrell and received 2 powerful skills
              and an incredible legendary sword called The Witness. All of this
              can be read between chapters 30 and 38. Cera is now searching for
              the mysterious hermit Flint.
            </p>
            <p>
              (Christian Adamo) - The father of Cera and husband of Violet.
              Christian Adamo is a hard working man who worked from dawn to dusk
              to keep his family afloat. He worked at a factory everyday since
              the first born child, Hailey Adamo, came into there lives.
              Christian never bothered Cera about how much he gamed and spent
              time in his room because Cera always found a way to help
              financially. This is a trait missing his his favorite child
              Hailey, he clearly spoiled her a little to much and now there is
              conflict between Violet and Hailey. Christian no longer works
              anymore since the guild token Cera sold set them up for life, he
              now spends all his time with his wife making up for lost time
              between the two of them. They have already paid off there debt and
              are moving to a bigger house in a better neighborhood.
            </p>
            <p>
              (Violet Adamo) - The mother of Cera and wife of Christian. Violet
              Adamo is a loving and hardworking mother despite working full time
              just like her husband to provide for the family. Violet loved
              being a mother when Hailey was first born, but her favorite of the
              three children she has is Cera. Violet and Hailey are at war right
              now because Hailey refuses to clean up her act and start acting
              like an adult. After Cera successfully sold his guild token Violet
              no longer knows what to do with her life. All financial
              responsibilities are gone because they are filthy rich now. Cera
              was very adamant to both his parents to splurge money beyond
              anything they ever dreamed. However they are still adjusting to
              the new life style and are still trying to budget, old habits die
              hard they say.
            </p>
          </div>
        </div>
        <div class="table_content visible_table">
          <h4>Table of Contents</h4>
          <span class="close">
            {" "}
            <i
              onClick={() => {
                $(".chapter-sec").removeClass("display_tables");
              }}
              class="fas fa-times"
            ></i>
          </span>
          <span> Volume 0:Auxiliary Volume</span>
          <ul class="chapter_headings">
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
          <ul class="chapter-count">
            <li class="lock">
              <a href="#">Prologue </a>
              <i class="fa fa-lock" aria-hidden="true"></i>
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
          <div class="chapters_range">
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
        <div class="table_content display_visible">
          <h4>Display Options</h4>
          <span class="close">
            {" "}
            <i
              onClick={() => {
                $(".chapter-sec").removeClass("display_options");
              }}
              class="fas fa-times"
            ></i>
          </span>
          <span>Background</span>
          <div class="bg-change-main">
            <div
              onClick={() => onPressWhiteButton()}
              class="white-btn bg-changer"
            >
              <img src="assets/check.png" alt="" class="img-fluid" />
            </div>
            <div
              onClick={() => onPressYellowButton()}
              class="yellow-btn bg-changer"
            >
              <img src="assets/check.png" alt="" class="img-fluid" />
            </div>
            <div
              onClick={() => onPressBlackButton()}
              class="black-btn bg-changer"
            >
              <img src="assets/check.png" alt="" class="img-fluid" />
            </div>
          </div>
          <span>Font</span>
          <div class="font-changer">
            <div class="nunito-font">
              <a href="#">Nunito Sans</a>
            </div>
            <div class="merri-font">
              <a href="#">Merriweather</a>
            </div>
          </div>
          <span>Size</span>
          <div class="size-changer">
            <div class="increasing_size">A+</div>
            <div class="size">14</div>
            <div class="decreasing_size">A-</div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};
