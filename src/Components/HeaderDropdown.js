import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import CSGO from "../Assets/Images/Go.png";
function HeaderDropdown({closeDropDown}) {
  const [options, setOptions] = useState([
    {
      id: 1,
      name: "my profile",
    },
    {
      id: 2,
      name: "subscription",
    },
    {
      id: 3,
      name: "favorites",
    },
    {
      id: 4,
      name: "invite friends",
    },
    {
      id: 5,
      name: "contact support",
    },
    {
      id: 6,
      name: "sign out",
    },
  ]);

  return (
    <div className="header-dropdown">
      <div className="dropdown-pointer" />
      {/* User Logged In Div  */}
      <div className="image-and-info-div">
        <div className="user-acc-circle-dropdown" onClick={()=>closeDropDown(false)}>
          <p className="user-acc-label-dropdown">C</p>
        </div>

        <div className="user-acc-info-div">
          <p className="username-dropdown">CannedSplam</p>
          <p className="user-email-dropdown">admin@cannesplam.com</p>
          <div className="d-flex flex-row align-items-center">
            <StarRatings
              starDimension={"12"}
              rating={1}
              starRatedColor="orange"
              numberOfStars={1}
              name="rating"
            />
            <p className="user-acc-type-dropdown">CS PRO</p>
          </div>
        </div>
      </div>
      {/* CS+ Advertisment  */}
      <div className="cs-plus-image-div">
        <img src={CSGO} />
      </div>
      {/* Drop Down Menu Items  */}
      {options.map((ele, idx) => {
        return <p className="dropdown-options-label">{ele.name}</p>;
      })}
    </div>
  );
}

export default HeaderDropdown;
