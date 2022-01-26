import React, { useState } from "react";
import Logo from "../Assets/Images/csnovels-logo.svg";
import CS from "../Assets/Images/cs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faSortDown } from "@fortawesome/free-solid-svg-icons";
import HeaderSearch from "./HeaderSearch";
import HeaderDropdown from "./HeaderDropdown";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const [text, setText] = useState("");
  const [showDropdown, setShowDropdown] = useState("");
  const navigate = useNavigate();
  return (
    <div className="container-fluid header-bg">
      <div className="container">
        <div className="row header-items ">
          <div className="myitem col-md-3" onClick={() => navigate("/")}>
            <img src={Logo} className="header-logo" />
            <img src={CS} className="small-logo" />
          </div>

          <div className="myitem col-md-2 mt-2">
            <div className="cat-label">
              <svg
                class="svg-inline-header-cat-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24px 24px"
              >
                <path
                  class="st0"
                  d="M3,0h4.2c1.7,0,3.1,1.5,3.1,3.1v4.2c0,1.7-1.5,3.1-3.1,3.1H3c-1.6,0.1-3.1-1.2-3.1-2.9V3.1C-0.1,1.5,1.4,0,3,0 z"
                />
                <path
                  class="st0"
                  d="M16.7,0h4.2c1.7,0,3.2,1.5,3.2,3.1v4.2c0,1.7-1.5,3.1-3.1,3.1h-4.2c-1.7,0-3.1-1.5-3.1-3.1V3.1 C13.6,1.5,14.9,0,16.7,0z"
                />
                <path
                  class="st0"
                  d="M3,13.7h4.2c1.7,0,3.1,1.5,3.1,3.1v4.2c0,1.7-1.5,3.1-3.1,3.1H3c-1.6,0.1-3.1-1.3-3.1-2.9v-4.2 C-0.1,15,1.4,13.7,3,13.7z"
                />
                <path
                  class="st0"
                  d="M16.7,13.7h4.2c1.7,0,3.1,1.5,3.1,3.1v4.2c0,1.7-1.5,3.1-3.1,3.1h-4.2c-1.7,0-3.1-1.5-3.1-3.1v-4.2 C13.6,15,14.9,13.7,16.7,13.7z"
                />
              </svg>
              
              <p className="cat-label-text" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Categories </p>
              <FontAwesomeIcon className="mb-1" icon={faSortDown} />
                <div class="category dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Urban
                  </a>
                  <a class="dropdown-item" href="#">
                    Eastern
                  </a>
                  <a class="dropdown-item" href="#">
                    Sci-Fi
                  </a>
                  <a class="dropdown-item" href="#">
                    View All
                  </a>
                </div>
              </div>
              
          
          </div>
          <div className="myitem col-md-5">
            <HeaderSearch setText={setText} text={text} />
          </div>
          <div className="myitem col-md-2 comunity-and-user-icon">
            <a
              href="https://discord.gg/HwMzcdJ"
              target="_blank"
              className="community-link"
            >
              community
            </a>
            <div
              className="user-acc-circle"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <p className="user-acc-label">C</p>
              {showDropdown && (
                <HeaderDropdown closeDropDown={setShowDropdown} />
              )}
            </div>
          </div>
          <div className="col-sm-12 col-12 tabs-header">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ongoing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Finished
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">New</a>
              </li>
            </ul>
          </div>
        </div>

        {/* {showDropdown && <HeaderDropdown closeDropDown={setShowDropdown} />} */}
      </div>
    </div>
  );
}

export default Header;
