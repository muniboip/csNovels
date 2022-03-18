import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Modal } from "react-bootstrap";
import * as actions from "../store/actions/actions";
import { connect } from "react-redux";
import { Presubscription, getpackage } from "../store/actions/actions";
import Stripe from "../Components/Stripe";
import { toast } from "react-toastify";

function Subscription({ authReducer }) {
  const [isopen, setisopen] = useState(false);
  const [stripemodal, setStripemodal] = useState(false);
  const [packages, setpackages] = useState([]);
  const [modalcontent, setmodalcontent] = useState({});
  
  const [amount, setAmount] = useState(0);
  const [interval, setinterval] = useState("one-time");
  const [product, setproduct] = useState("");
  var navigate = useNavigate();

  useEffect(() => {
    setAmount(modalcontent ? modalcontent.amount : 0);
    setproduct(modalcontent ? modalcontent._id : "");
  }, [modalcontent]);
  

  async function setKey(id) {
  
    const data = await Presubscription(id, interval, product, authReducer.accessToken);
    toast.success(data.data.msg);
  }

  const openModal = () => {
    setisopen(true);
  };

  const closeModal = () => {
    setmodalcontent([]);
    setisopen(false);
  };

  function closestripeModal() {
    setStripemodal(false);
  }
  const submit = async () => {
    setisopen(false);
    setStripemodal(true);
  };
  function handlechecked() {
    interval == "one-time" ? setinterval("monthly") : setinterval("one-time");
  }

  useEffect(async () => {
    if (!authReducer.isLogin) {
      navigate("/");
    }

    setpackages(await getpackage());
  }, []);
  console.log(authReducer);

  return (
    <>
      <Header />
      <div class="container">
        <div class="subcription">
          <h1>Subscription</h1>
        </div>
        {packages.map((item, index) => {
          if (item.free) {
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
                  <button
                    class="btn1"
                    onClick={() => {
                      openModal();
                      setmodalcontent(item);
                    }}
                  >
                    SIGN UP
                  </button>
                  <h1>{item.name}</h1>
                </div>
              </div>
            );
          } else if (authReducer.userData.package.product._id ==item._id) {
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
                <div class="free-cs ">
                  <button
                    class="btn1"
                    
                  >
                    {" "}
                    Subscribed
                  </button>
                  <h1>{item.name}</h1>
                </div>
              </div>
            );
          } else {
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
                      Get access to beta/stockpiled chapters and chapter in the
                      edit process
                    </li>
                  </ul>
                  <p>charged monthly OR one time payment for 30 day access</p>
                </div>
                <div class="free-cs upgrade-cs">
                  <button
                    class="btn3"
                    onClick={() => {
                      setmodalcontent(item);

                      openModal();
                    }}
                  >
                    UPGRADE
                  </button>
                  <h1>{item.name}</h1>
                </div>
              </div>
            );
          }
        })}

        <button
          type="button"
          class="btn us-active-btn custom"
          onClick={() => {
            openModal();
            setmodalcontent([]);
          }}
        >
          CUSTOM{" "}
        </button>
      </div>

      <Footer />
      <Modal
        show={stripemodal}
        onHide={() => {
          closestripeModal();
        }}
      >
        <Stripe setkey={setKey} setStripemodal={setStripemodal} />
      </Modal>
      <Modal show={isopen} onHide={() => closeModal()} className="Modal">
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
              {modalcontent.amount >= 0 ? (
                <div className="modal-con">
                  <h1>{modalcontent.amount}$</h1>
                  <h1>{modalcontent.name}</h1>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    value={amount}
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    class="form-control"
                    id="amount"
                  />
                  <span>$</span>
                </>
              )}{" "}
            </div>
          </div>
          {!modalcontent.amount && modalcontent.amount != 0 ? (
            <>
              <div class="row col-row">
                <div class="col-lg-4 px-4">
                  <button
                    type="button"
                    class="btn us-active-btn"
                    onClick={(e) => {
                      setAmount(5);
                    }}
                  >
                    $5
                  </button>
                </div>

                <div class="col-lg-4 px-4">
                  <button
                    type="button"
                    class="btn us-active-btn"
                    onClick={(e) => {
                      setAmount(10);
                    }}
                  >
                    $10
                  </button>
                </div>

                <div class="col-lg-4 px-4">
                  <button
                    type="button"
                    class="btn us-active-btn"
                    onClick={(e) => {
                      setAmount(25);
                    }}
                  >
                    $25
                  </button>
                </div>
              </div>
              <div class="row col-row">
                <div class="col-lg-4 px-4">
                  <button
                    type="button"
                    class="btn us-active-btn"
                    onClick={(e) => {
                      setAmount(50);
                    }}
                  >
                    $50
                  </button>
                </div>
                <div class="col-lg-4 px-4">
                  <button
                    type="button"
                    class="btn us-active-btn"
                    onClick={(e) => {
                      setAmount(100);
                    }}
                  >
                    $100
                  </button>
                </div>
                <div class="col-lg-4 px-4">
                  <button
                    type="button"
                    class="btn us-active-btn"
                    onClick={(e) => {
                      setAmount(250);
                    }}
                  >
                    Custom Amount
                  </button>
                </div>
              </div>
            </>
          ) : null}
          <div class="row">
            <div class="form-check-inline">
              <label class="form-check-label">
                <input type="checkbox" onClick={handlechecked}></input>{" "}
                Subscribe For Monthly
              </label>
            </div>
          </div>
          <div class="row">
            {/* <StripeCheckout
    stripeKey = 'pk_test_51K7J3zEIGUZHqg4AQXRkFcz3FkVbBOa5MxjLqxY5z3EV5QpgJvDPmP285BvNt82FupjcBc8ZranqwU9rafxLKJTR009XtKs28i'
    token={handletoken}
    > */}
            <button
              type="button"
              class="btn us-active-btn last-btn"
              onClick={() => {
                submit();
              }}
            >
              Continue
            </button>
            {/* </StripeCheckout> */}
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
