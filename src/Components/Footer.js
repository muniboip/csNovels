import React, { useState } from "react";
import LOGO from "../Assets/Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import FooterLinksMapper from "./FooterLinksMapper";

function Footer() {
  const [categories, setCategories] = useState([
    {
      _id: 1,
      label: "urban",
    },
    {
      _id: 2,
      label: "eastern",
    },
    {
      _id: 3,
      label: "sci-fi",
    },
    {
      _id: 4,
      label: "romance",
    },
  ]);

  const [popular, setPopular] = useState([
    {
      _id: 1,
      label: "the amazing set",
    },
    {
      _id: 2,
      label: "no. 1 supreme ",
    },
    {
      _id: 3,
      label: "billionare goldern",
    },
    {
      _id: 4,
      label: "my billionaire",
    },
  ]);

  const [contact, setContact] = useState([
    {
      _id: 1,
      label: "contact us",
    },
    {
      _id: 2,
      label: "support",
    },
    {
      _id: 3,
      label: "discord",
    },
  ]);

  return (
      <>
    <div className="container-fluid footer-parent pt-5">
          <div className="ml-3 mr-3">
      <div className="row">
        {/* 1st column  */}
        <div className="col-lg-4 col-md-4 col-sm-3">
          <div className="footer-1st-col">
            <img src={LOGO} className="footer-logo" />
            <div className="copyrights-and-social">
              <div className="social-icons-div">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="social-icon"
                />
                <FontAwesomeIcon icon={faDiscord} className="social-icon" />
              </div>
              <p className="copyright-cs">Copyright © 2021 CannedSplam</p>
              <p className="privacy-terms">privacy policy • terms of service</p>
            </div>
          </div>
        </div>
        {/* 2nd column  */}
        <div className="col-lg-2 col-md-2 col-sm-3">
          <div className="links-container">
          <p className="links-heading">categories</p>
            {categories.map((ele, idx) => (
              <FooterLinksMapper
                item={ele}
                key={idx}
                onClick={() => {
                  console.log("test");
                }}
              />
            ))}
          </div>
        </div>

        {/* 3rd column  */}
        <div className="col-lg-2 col-md-2 col-sm-3">
          <div className="links-container">
          <p className="links-heading">popular</p>
            {popular?.map((ele, idx) => (
              <FooterLinksMapper
                item={ele}
                key={idx}
                onClick={() => {
                  console.log("test");
                }}
              />
            ))}
          </div>
        </div>
        
        {/* 4th column  */}
        <div className="col-lg-2 col-md-2 col-sm-3">
          <div className="links-container">
          <p className="links-heading">contact</p>
            {contact?.map((ele, idx) => (
              <FooterLinksMapper
                item={ele}
                key={idx}
                onClick={() => {
                  console.log("test");
                }}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Footer;
