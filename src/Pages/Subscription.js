import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Modal } from "react-bootstrap";
import * as actions from "../store/actions/actions";
import { connect, useDispatch } from "react-redux";
import {
  Presubscription,
  getpackage,
  Updatesubscription,
  customSubscription,
  updatecustomSubscription,
} from "../store/actions/actions";
import * as types from "../store/actions/actionType";
import Stripe from "../Components/Stripe";
import { toast } from "react-toastify";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from "react-stripe-checkout";
import auth from "surge/lib/middleware/auth";

function Subscription({ authReducer }) {
  const dispatch = useDispatch();
  const [isopen, setisopen] = useState(false);
  const [stripemodal, setStripemodal] = useState(false);
  const [packages, setpackages] = useState([]);
  const [modalcontent, setmodalcontent] = useState({});
  const [amount, setAmount] = useState("");
  const [interval, setinterval] = useState("one-time");
  const [product, setproduct] = useState("");
  const [load, setload] = useState(true);
  var navigate = useNavigate();

  const [isSubscribe, setisSubscribe] = useState(true);
  useEffect(() => {
    console.log(modalcontent);

    setAmount(modalcontent.amount ? modalcontent.amount : "");
    setproduct(modalcontent ? modalcontent._id : "");
  }, [modalcontent]);

  const openModal = () => {
    setisopen(true);
  };
  const location = useLocation();
  const closeModal = () => {
    setmodalcontent([]);
    setisopen(false);
  };

  // const submit = async () => {
  //   setisopen(false);
  //   setStripemodal(true);
  // };
  function handlechecked() {
    interval == "one-time" ? setinterval("monthly") : setinterval("one-time");
  }
  useEffect(async () => {
    if (!authReducer.isLogin) {
      navigate("/");
    }
    // console.log(JSON.parse(localStorage.getItem("package")), "=========");
    setpackages(await getpackage());
  }, [load]);
  useEffect(async () => {
    if (!authReducer.isLogin) {
      navigate("/");
    }
    // console.log(JSON.parse(localStorage.getItem("package")), "====");
    setpackages(await getpackage());
  }, []);
  useEffect(() => {
    if (
      modalcontent.amount != 9 &&
      modalcontent.amount != 15 &&
      (amount == 9 || amount == 15)
    ) {
      setisSubscribe(false);
    } else {
      setisSubscribe(true);
    }
  }, [amount]);

  // const options = {
  //   clientSecret:
  //     "sk_test_51Kfhd8GAkBzna46j4z8AqKo6pvcSTp7K5i0PVX1sXH6c958hhsEZtXpN02DMoiM2wclh76VnQ9SFshxY0jrgCT2500W6vJgnKu",
  // };
  // const options = {
  //   clientSecret:
  //     "pi_3KflWfGAkBzna46j1H8ZAcqp_secret_60Vmr4FPGE9i26sa3jsdz7KGr",
  //   appearance: { theme: "Dark" },
  // };

  // const stripePromise = loadStripe(
  //   "pk_test_51K7J3zEIGUZHqg4AQXRkFcz3FkVbBOa5MxjLqxY5z3EV5QpgJvDPmP285BvNt82FupjcBc8ZranqwU9rafxLKJTR009XtKs28i"
  // );
  // async function handleToken(token) {
  //   console.log(token);

  //   setkey(token.id);
  //   setStripemodal(false);
  //      Presubscription(
  //     token.id,
  //       interval,
  //     product,
  //     accessToken
  //   )
  //   // const response = await axios.post(
  //   //   "https://ry7v05l6on.sse.codesandbox.io/checkout",
  //   //   { token, product }
  //   // );
  //   // const { status } = response.data;
  //   // console.log("Response:", response.data);
  //   // if (status === "success") {
  //   //   toast("Success! Check email for details", { type: "success" });
  //   // } else {
  //   //   toast("Something went wrong", { type: "error" });
  //   // }
  // }
  async function handleToken(token) {
    var response;
    if (
      !authReducer.userData.package &&
      modalcontent.product != "Custom Product"
    ) {
      console.log("1");
      response = await Presubscription(
        token.id,
        interval,
        product,
        authReducer.accessToken
      );
    } else  if (
      
      modalcontent.product != "Custom Product"
    ) {
      console.log("sa");
      response = await Updatesubscription(
        token.id,
        interval,
        product,
        authReducer.accessToken
      );
    } else if (
      !authReducer.userData.package &&
      modalcontent.product == "Custom Product"
      
    ) {
      console.log("3");
      response = await customSubscription(
        token.id,
        interval,
        amount,
        authReducer.accessToken
      );
      
    } else  if (
      modalcontent.product == "Custom Product" 
    ) {
      response = await updatecustomSubscription(
        token.id,
        interval,
        amount,
        authReducer.accessToken
      );
    }

    console.log(response);
    if (response?.data?.success) {
      // localStorage.setItem("package",JSON.stringify(response.data.data))
      console.log("Data", response?.data.data);
      dispatch({
        type: types.SUBSCRIPTION,
        payload: response?.data.data,
      });
      toast.success(response.data.msg);
      closeModal();
    } else {
      toast.error(response.data.msg);
      closeModal();

      // return response.data
    }
    // if (response?.data?.success) {

    //   // localStorage.setItem("package",JSON.stringify(response.data.data))
    //   console.log("Data",response?.data.data);
    //   dispatch({
    //       type: types.SUBSCRIPTION,
    //       payload: response?.data.data,
    //     });
    //   toast.success(response.data.msg);

    // } else {
    //       toast.error(response.data.msg);
    //   return response.data
    // }

    // dispatch({
    //   type: types.SUBSCRIPTION,
    //   payload: res,
    // });

    setload(!load);

    // setisopen(false);

    // const response = await axios.post(
    //   "https://ry7v05l6on.sse.codesandbox.io/checkout",
    //   { token, product }
    // );
    // const { status } = response.data;
    // console.log("Response:", response.data);
    // if (status === "success") {
    //   toast("Success! Check email for details", { type: "success" });
    // } else {
    //   toast("Something went wrong", { type: "error" });
    // }
  }

  return (
    <>
      <Header />
      <div class="container">
        <div class="subcription">
          <h1>Subscription</h1>
        </div>
        {packages.map((item, index) => {
          console.log(item);
          if ( item.free && location?.state?.signup) {
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
                      setload(!load);
                      navigate("/subscription", { state: { signup: false } });
                    }}
                  >
                    SUBSCRIBE
                  </button>
                  <h1>{item.name.toUpperCase()}</h1>
                </div>
              </div>
            );
          } else if (authReducer.userData.package?.amount == item.amount) {
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
                  <button class="btn1"> SUBSCRIBED</button>
                  <h1>{item.name}</h1>
                </div>
              </div>
            );
          } else if (
            !item.free &&
            authReducer.userData.package?.amount != item.amount
          ) {
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
                    {authReducer.userData.package
                      ? item.amount > authReducer.userData.package.amount
                        ? "UPGRADE"
                        : "DOWNGRADE"
                      : "SUBSCRIBE"}
                  </button>
                  <h1>{item.name}</h1>
                </div>
              </div>
            );
          } else if ( authReducer.userData.package.amount != 9 && authReducer.userData.package.amount != 15) {
            return (
              <div class="sign-up current">
                <div class="free currt">
                  <span class="span1">
                    ${authReducer.userData.package?.amount}{" "}
                  </span>
                </div>
                <div class="free-acc">
                  <h2>
                    Get unlimited access<br></br> to all novels!{" "}
                  </h2>
                  <p>charged monthly OR one time payment for 30 day access</p>
                </div>
                <div class="free-cs ">
                  <button class="btn1"> SUBSCRIBED</button>
                  <h1>Custom</h1>
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
            setmodalcontent({ product: "Custom Product" });
          }}
        >
          CUSTOM{" "}
        </button>
      </div>

      <Footer />

      {/* <Modal
        show={stripemodal}
        onHide={() => {
          closestripeModal();
        }}
      > 
    <Modal.Header class="modal-header">
        

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              onClick={closestripeModal}
            >
              &times;
            </button>
          </Modal.Header>
        <Stripe setkey={setKey} setStripemodal={setStripemodal} interval={interval}
        product={product}
        token={authReducer.accessToken}/>
      </Modal> */}

      <div className="subs-modal">
        <Modal show={isopen} onHide={() => closeModal()} className="Modal">
          <Modal.Header class="modal-header">
            <Modal.Title class="modal-title">
              {!modalcontent.amount ? "Choose Amount" : ""}
            </Modal.Title>

            <button
              type="button"
              className="close"
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
                    <h1>${modalcontent.amount}</h1>
                    <h1>{modalcontent.name}</h1>
                  </div>
                ) : (
                  <>
                    <input
                      type="number"
                      value={amount}
                      placeholder="0"
                      onChange={(e) => {
                        setAmount(e.target.value);
                      }}
                      class="form-control"
                      id="amount"
                    />
                    <span className={!isSubscribe ? "Invalid " : ""}>
                      {!isSubscribe ? "Invalid " : "$"}
                    </span>
                  </>
                )}{" "}
              </div>
            </div>
            {!modalcontent.amount ? (
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
                  <input
                    type="checkbox"
                    style={{
                      height: "16px",
                      width: "16px",
                      marginRight: "10px",
                    }}
                    onClick={handlechecked}
                  ></input>{" "}
                  Subscribe For Monthly
                </label>
              </div>
            </div>
            <div class="row">
              {/* <StripeCheckout
    stripeKey = 'pk_test_51K7J3zEIGUZHqg4AQXRkFcz3FkVbBOa5MxjLqxY5z3EV5QpgJvDPmP285BvNt82FupjcBc8ZranqwU9rafxLKJTR009XtKs28i'
    token={handletoken}
    > */}
              {/* <button
                type="button"
                class="btn us-active-btn last-btn"
                onClick={() => {
                  submit();
                }}
              >
                Continue
              </button> */}
              {isSubscribe ? (
                <StripeCheckout
                  stripeKey="pk_test_51K7J3zEIGUZHqg4AQXRkFcz3FkVbBOa5MxjLqxY5z3EV5QpgJvDPmP285BvNt82FupjcBc8ZranqwU9rafxLKJTR009XtKs28i"
                  token={handleToken}
                  label={"SUBSCRIBE"}
                  className="token"
                />
              ) : null}
              {/* </StripeCheckout> */}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

const mapstatetoprops = ({ authReducer, booksReducer, libraryReducer }) => {
  return { authReducer, booksReducer, libraryReducer };
};
export default connect(mapstatetoprops, actions)(Subscription);

// export default Subscription;
