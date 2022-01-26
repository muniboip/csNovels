import moment from "moment";
import React, { useEffect } from "react";
import { useState } from "react";
import USER_IMG from "../../Assets/Images/dp-placeholder.jpg";
import FavoritesComp from "../../Components/FavoritesComp";
import BookmarksComp from "../../Components/BookmarksComp";
import BOOK_CARD from "../../Assets/Images/book-card.png";
import CS_PRO from "../../Assets/Images/cs-pro.png";
import CS_PLUS from "../../Assets/Images/cs-plus.png";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import FreeBookComp from "../../Components/FreeBookComp";
import MostWantedNovelsMapper from "../../Components/MostWantedNovelsMapper";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfilePage() {
  const [headerSelection, setHeaderSelection] = useState(1);

  // Edit Profile States
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [changePassword, setChangePassword] = useState("");

  // Account Features States
  const [onsiteAds, setOnsiteAds] = useState(false);
  const [readingStyle, setReadingStyle] = useState(false);
  const [betaChapters, setBetaChapters] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(false);

  //Subscription States
  const [toggleAutomaticRenewel, setToggleAutomaticRenewel] = useState(false);

  // Edit Profile Save Button
  const _onPressSaveChangesEditProfile = () => {
    console.log("Saved");
  };

  // Edit Profile Account Button
  const _onPressSaveChangesAccountFeatures = () => {
    console.log("Saved");
  };

  // Change Plan Handler
  const _onPressChangePlan = () => {
    console.log("Change Plan");
  };

  // Change Method Handler
  const _onPressChangeMethod = () => {
    console.log("Change Method");
  };

  // Cancel Subscription Handler
  const _onPressCancelSubscription = () => {
    console.log("Cancel Subscription");
  };

  return (
    <div>
      <Header />
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="user-record">
                <img src={USER_IMG} alt="" />
                <div className="user-edit">
                  <h3>
                    Username_123 <span className="HEADING">FIRST LAST</span>
                  </h3>
                  <div className="email-record">
                    <h6>email@site.com</h6>
                    <p>ID:3165825</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mt-auto text-right">
              <div className="cs-pro">
                <span className="span-star">
                  <i className="fas fa-star"></i> CS-PRO
                </span>
                <p>MEMBER SINCE 4/12/21</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <ul className="navbar-nav ml-auto header-bar">
          <li className="nav-item " onClick={() => setHeaderSelection(1)}>
            <a
              className={`nav-link hover-effect ${
                headerSelection === 1 && "active"
              }`}
              href="#"
            >
              Dashboard
            </a>
          </li>
          <li className="nav-item" onClick={() => setHeaderSelection(2)}>
            <a
              className={`nav-link hover-effect ${
                headerSelection === 2 && "active"
              }`}
              href="#"
            >
              Favorites
            </a>
          </li>
          <li className="nav-item" onClick={() => setHeaderSelection(3)}>
            <a
              className={`nav-link hover-effect ${
                headerSelection === 3 && "active"
              }`}
              href="#"
            >
              Bookmarks
            </a>
          </li>
          <li className="nav-item" onClick={() => setHeaderSelection(4)}>
            <a
              className={`nav-link hover-effect ${
                headerSelection === 4 && "active"
              }`}
              href="#"
            >
              Billing
            </a>
          </li>
          <li className="nav-item" onClick={() => setHeaderSelection(5)}>
            <a
              className={`nav-link hover-effect ${
                headerSelection === 5 && "active"
              }`}
              href="#"
            >
              Settings
            </a>
          </li>
        </ul>

        {headerSelection === 1 && (
          <>
            <FreeBookComp />
            <div className="package-info-div">
              <img src={CS_PRO} style={{ marginRight: "50px" }} />
              <img src={CS_PLUS} />
            </div>
            <FavoritesComp title="RECENTLY READ" />
            <div className="section-div most_popular">
              <div className="mp-books-header">
                <p className="mp-books-header-title">LAST FAVORITED</p>
              </div>

              <div className="row center-most-popular-in-mobile spacing-adjust">
                {favorites.map((item, idx) => (
                  <MostWantedNovelsMapper
                    key={idx}
                    item={item}
                    onClick={() => console.log("Book Card")}
                  />
                ))}
              </div>
            </div>
          </>
        )}

        {headerSelection === 2 && <FavoritesComp />}

        {headerSelection === 3 && <BookmarksComp />}

        {headerSelection === 4 && (
          <>
            <div className="sec-3">
              <h1>Subscription</h1>

              <div className="subscription">
                <div className="row feature-border">
                  <div className="col-lg-3">
                    <div className="sub-method">
                      <h6>YOUR CURRENT PLAN</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="sub-method">
                      <p> CS Pro, $9 per month</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="sub-method">
                      <h5 onClick={() => _onPressChangePlan()}>Change plan</h5>
                    </div>
                  </div>
                </div>
                <div className="row feature-border">
                  <div className="col-lg-3">
                    <div className="sub-method">
                      <h6>BILLING CYCLE</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="sub-method">
                      <p>your will be charge $9 on Feb 12 2022</p>
                      <div className="sub-check">
                        <input
                          type="checkbox"
                          id="check-5"
                          checked={toggleAutomaticRenewel}
                          onChange={() =>
                            setToggleAutomaticRenewel(!toggleAutomaticRenewel)
                          }
                        />
                        <label for="check-5">Enable automatic renewel</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="sub-method"></div>
                  </div>
                </div>
                <div className="row feature-border">
                  <div className="col-lg-3">
                    <div className="sub-method">
                      <h6>PAYMENT INFORMATION</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="sub-method">
                      <span>
                        <i className="fab fa-cc-visa"></i> visa ending in 123
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="sub-method">
                      <h5 onClick={() => _onPressChangeMethod()}>
                        Change Method
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="row feature-border">
                  <div className="col-lg-3">
                    <div className="sub-method">
                      <h6>CANCEL</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="sub-method">
                      <p>Cancel at the ending of billing period</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="sub-method">
                      <h5 onClick={() => _onPressCancelSubscription()}>
                        Cancel Subscription
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="sec-4">
              <h1>History</h1>

              <div className="history">
                <table className="history-edit">
                  <tr className="head-edit">
                    <th>INVOICE</th>
                    <th>AMOUNT</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                  </tr>
                  {dummyHistoryData?.map((e) => (
                    <tr>
                      <td>{`#${e.id}`}</td>
                      <td>{`${e.amount} USD$`}</td>
                      <td>{e.status}</td>
                      <td>{moment(e.date).format("MMM DD,YYYY")}</td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </>
        )}

        {headerSelection === 5 && (
          <>
            <div className="sec-1">
              <h1>Edit Profile</h1>

              <div className="profile-edit">
                <form action="">
                  <div className="row profile-sec">
                    <div className="col-lg-3 my-auto">
                      <div className="profile">
                        <h6>FULL NAME</h6>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="profile">
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="profile">
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row profile-sec">
                    <div className="col-lg-3 my-auto">
                      <div className="profile ">
                        <h6>USER NAME</h6>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="profile input-icon">
                        <span className="input-font">
                          <i className="fas fa-user"></i>
                        </span>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          placeholder="Username"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row profile-sec">
                    <div className="col-lg-3 my-auto">
                      <div className="profile">
                        <h6>EMAIL ADDRESS</h6>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="profile input-icon">
                        <span className="input-font">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row profile-sec">
                    <div className="col-lg-3 my-auto">
                      <div className="profile">
                        <h6>CHANGE PASSWORD</h6>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="profile input-icon">
                        <span className="input-font">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                        <input
                          type="password"
                          placeholder="enter new password"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <div className="profile-button">
                        <button
                          onClick={() => _onPressSaveChangesEditProfile()}
                        >
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="sec-2">
              <h1>Accounts Features </h1>

              <div className="accounts-features">
                <div className="row feature-border">
                  <div className="col-lg-3">
                    <div className="feature">
                      <h6>READING STYLE</h6>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="feature">
                      <div className="check-lable">
                        <input
                          type="checkbox"
                          checked={readingStyle}
                          onChange={() => setReadingStyle(!readingStyle)}
                          id="check-1"
                        />
                        <span className="lock">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                        <label for="check-1">
                          Enable infinite scroll on book pages
                        </label>
                      </div>

                      <p>
                        Checking this box will enable an infinite scroll reading
                        experience <br />
                        YOU MUST BE A CS PLUS MEMBER TO ENABLE THIS FEATURE{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row feature-border">
                  <div className="col-lg-3">
                    <div className="feature">
                      <h6>ONSITE ADS</h6>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="feature">
                      <div className="check-lable">
                        <input
                          type="checkbox"
                          id="check-2"
                          checked={onsiteAds}
                          onChange={() => setOnsiteAds(!onsiteAds)}
                        />
                        <span className="lock">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                        <label for="check-2">
                          Enable ad free reading experience
                        </label>
                      </div>

                      <p>
                        Checking this box will all ads from the website for you{" "}
                        <br />
                        YOU MUST BE A CS PLUS MEMBER TO ENABLE THIS FEATURE
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row feature-border">
                  <div className="col-lg-3">
                    <div className="feature">
                      <h6> BETA CHAPTERS</h6>
                    </div>
                  </div>

                  <div className="col-lg-8">
                    <div className="feature">
                      <div className="check-lable">
                        <input
                          type="checkbox"
                          id="check-3"
                          checked={betaChapters}
                          onChange={() => setBetaChapters(!betaChapters)}
                        />
                        <span className="lock">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                        <label for="check-3">
                          Enable beta chapters for books
                        </label>
                      </div>

                      <p>
                        Checking this box will allow you to see beta/stockpiled
                        chapters that are in the works
                        <br />
                        YOU MUST BE A CS PLUS MEMBER TO ENABLE THIS FEATURE{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row feature-border">
                  <div className="col-lg-3">
                    <div className="feature">
                      <h6>EMAIL NOTIFICATIONS</h6>
                    </div>
                  </div>

                  <div className="col-lg-8 check-col">
                    <div className="feature">
                      <div className="check-lable">
                        <input
                          type="checkbox"
                          id="check-4"
                          checked={emailNotifications}
                          onChange={() =>
                            setEmailNotifications(!emailNotifications)
                          }
                        />
                        <span className="lock">
                          <i className="fas fa-lock-alt"></i>
                        </span>
                        <label for="check-4">
                          Enable email notifications for new chapters
                        </label>
                      </div>

                      <p>
                        Checking this box will send you emails when new chapters
                        are released on your favorites list{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-lg-12 button-feature">
                  <div className="profile-button">
                    <button
                      onClick={() => _onPressSaveChangesAccountFeatures()}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;

const dummyHistoryData = [
  {
    id: 1456,
    amount: 9,
    status: "paid",
    date: new Date(),
  },
  {
    id: 1456,
    amount: 9,
    status: "paid",
    date: new Date(),
  },
  {
    id: 1456,
    amount: 10,
    status: "paid",
    date: new Date(),
  },
];

let favorites = [
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
];
