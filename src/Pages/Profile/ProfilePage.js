import React, { useState } from "react";
import dpPlaceholdeImg from "../../Assets/Images/dp-placeholder.jpg";
// import SettingComponent from "./SettingComponent";
// import BillingComponent from "./BillingComponent";
import SettingComponent from "./SettingComponent";
import BillingComponent from "./BillingComponent";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  return (
    <>
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="user-record">
                <img src={dpPlaceholdeImg} alt="" />
                <div class="user-edit">
                  <h3>
                    Username_123 <span class="HEADING">FIRST LAST</span>
                  </h3>
                  <div class="email-record">
                    <h6>email@site.com</h6>
                    <p>ID:3165825</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 mt-auto text-right">
              <div class="cs-pro">
                <span class="span-star">
                  <i class="fas fa-star"></i> CS-PRO
                </span>
                <p>MEMBER SINCE 4/12/21</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <ul class="navbar-nav ml-auto header-bar">
          {["Dashboard", "Favorites", "Bookmarks", "Billing", "Settings"].map(
            (item, i) => {
              return (
                <li
                  class="nav-item "
                  key={i}
                  onClick={() => setActiveTab(item)}
                >
                  <a
                    class={`nav-link hover-effect ${
                      activeTab === item && "active"
                    } `}
                    href="#"
                  >
                    {item}
                  </a>
                </li>
              );
            }
          )}
        </ul>
      </div>
      {activeTab==="Settings"?<SettingComponent/> :  activeTab==="Billing"?<BillingComponent/>:"Nothing"}
    </>
  );
};

export default ProfilePage;
