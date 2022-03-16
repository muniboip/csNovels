import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Modal } from "react-bootstrap";
import * as actions from "../store/actions/actions";
import { connect } from "react-redux";
import { baseUrl } from "../config";
import {subscription, getpackage} from '../store/actions/actions'
function Subscription({authReducer}) {
  const [isopen, setisopen] = useState(false);
  const [packages, setpackages] = useState([]);
  const openModal = () => {
    setisopen(true);
  };
  const closeModal = () => {
    setisopen(false);
  };
  function submit (){
    subscription({
      token:authReducer.accessToken
           
    })
  }
  useEffect(async ()=>{
    
    setpackages(await getpackage())
  },[])
  console.log(packages);
  console.log(authReducer);
  return (
    <>
      <Header />
      <div class="container">
        <div class="subcription">
          <h1>Subscription</h1>
        </div>
        {
          packages.map((item,index)=>{
            if(item.free){
            return (
              <div class="sign-up">
          <div class="free">free</div>
          <div class="free-acc">
            <h2>
              Create a free account <br></br> to being reading!*
            </h2>
            <p>
              account is required to read novels<br></br>
              *not all novel free to read
            </p>
          </div>
          <div class="free-cs">
            <button class="btn1">SIGN UP</button>
            <h1>CS Free</h1>
          </div>
        </div>
                    )}else if (authReducer.subscription){
              return (
                <div class="sign-up current">
                <div class="free currt">
                  <span class="span1"> ${item.amount}</span>
                </div>
                <div class="free-acc">
                  <h2>
                    Get unlimited access<br></br> to all novels!{" "}
                  </h2>
                  <p>charged monthly OR one time payment for 30 day access</p>
                </div>
                <div class="free-cs">
                  <button class="btn1" onClick={() => openModal()}>
                    {" "}
                    UPGRADE
                  </button>
                  <h1>{item.name}</h1>
                </div>
              </div>
              )
            }else{
              return ( 
                 <div class="sign-up upgrade">
              <div class="free dollar">
                <span class="span1"> ${item.amount}</span>
                
              </div>
              <div class="free-acc upgrade-acc">
                <h2>GAIN EXCLUSIVE ACCESS:</h2>
                <ul class="add">
                  <li>Ad free experiance</li>
                  <li>Infinite scroll when reading</li>
                  <li>
                    Get access to beta/stockpiled chapters and chapter in the edit
                    process
                  </li>
                </ul>
                <p>charged monthly OR one time payment for 30 day access</p>
              </div>
              <div class="free-cs upgrade-cs">
                <button class="btn3" onClick={() => openModal()}>
                  UPGRADE
                </button>
                <h1>{item.name}</h1>
              </div>
            </div>
            
          )}
          })
        }
        
     </div>

      
      <Footer />

      <Modal show={isopen} onHide={closeModal}>
        <Modal.Header class="modal-header">
          <Modal.Title class="modal-title">Choose Amount</Modal.Title>

          <button
            type="button"
            class="close"
            data-dismiss="modal"
            onClick={closeModal}
          >
            &times;
          </button>
        </Modal.Header>

        <Modal.Body>
          <div class="row">
            <div class="form-group us-form">
              <input type="text" class="form-control" id="amount" />

              <span>$</span>
            </div>
          </div>

          <div class="row col-row">
            <div class="col-lg-4 px-4">
              <button type="button" class="btn us-active-btn">
                $5
              </button>
            </div>

            <div class="col-lg-4 px-4">
              <button type="button" class="btn us-active-btn">
                $10
              </button>
            </div>

            <div class="col-lg-4 px-4">
              <button type="button" class="btn us-active-btn">
                $25
              </button>
            </div>
          </div>
          <div class="row col-row">
            <div class="col-lg-4 px-4">
              <button type="button" class="btn us-active-btn">
                $50
              </button>
            </div>
            <div class="col-lg-4 px-4">
              <button type="button" class="btn us-active-btn">
                $100
              </button>
            </div>
            <div class="col-lg-4 px-4">
              <button type="button" class="btn us-active-btn">
                Custom Amount
              </button>
            </div>
          </div>
          <div class="row">
            <div class="form-check-inline">
              <label class="form-check-label">
                <input type="checkbox"></input> Subscribe For Monthly
              </label>
            </div>
          </div>
          <div class="row">
            <button type="button" class="btn us-active-btn last-btn">
              Continue
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


const mapstatetoprops = ({ authReducer, booksReducer, libraryReducer }) => {
  return { authReducer, booksReducer, libraryReducer };
};
export default connect(mapstatetoprops, actions)(Subscription);

// export default Subscription;
