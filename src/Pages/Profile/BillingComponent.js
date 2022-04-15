import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  getpackage,
  Cancelsubs,
  Canceltimesubs,
  getpackagehistory,
} from "../../store/actions/actions";
import * as types from "../../store/actions/actionType";
import * as actions from "../../store/actions/actions";
import { connect, useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";

const BillingComponent = ({ authReducer }) => {
  const [packages, setpackages] = useState([]);
  const [isopen, setisopen] = useState(false);
  const [immediate, setimmediate] = useState(false);
  const [isload, setisload] = useState(true);
  const [date, setdate] = useState("");
  const [histor, sethistor] = useState([]);
  var navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(async () => {
    if (!authReducer.isLogin) {
      navigate("/");
    }
    
    const data = await getpackage();

    data.map((item) => {
      if (item._id == authReducer?.userData?.package?.product._id) {
        setpackages(item);
        Object.assign(packages, authReducer?.userData?.package);
      }
    });

    sethistor(await getpackagehistory(authReducer.accessToken));
  }, [isload]);

  useEffect(() => {}, [isload]);
  const openModal = () => {
    setisopen(true);
  };

  const closeModal = () => {
    setisopen(false);
  };
  const packagecancel = async () => {
    closeModal();

    var response;
    if (immediate) {
      response = Cancelsubs(authReducer.accessToken);
    } else {
      response = Canceltimesubs(authReducer.accessToken);
    }

    if (response.success) {
      toast.success(response.data.msg);
      dispatch({
        type: types.SUBSCRIPTION,
        payload: null,
      });
    } else {
      dispatch({
        type: types.SUBSCRIPTION,
        payload: null,
      });

      toast.error(response.data.msg);
    }

    setisload(!isload);
  };
  return (
    <>
      <div class="container">
        <div class="sec-3">
          <h1>Subscription</h1>
          {authReducer.userData.package ? (
            <div class="subscription">
              <div class="row feature-border">
                <div className="col-lg-8 my_subs_div_1">
                  <div class="col-lg-4">
                    <div class="sub-method">
                      <h6>YOUR CURRENT PLAN</h6>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="sub-method">
                      <p>
                        {" "}
                        {packages.name} , ${packages.amount} per month
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 my_subs_div_2">
                  <div class="col-lg-12">
                    <div class="sub-method">
                      <button
                        type="button"
                        class="btn us-active-btn cancelbtn"
                        onClick={() => {
                          navigate("/subscription");
                        }}
                      >
                        Change plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row feature-border">
                <div className="col-lg-8 my_subs_div_1">
                  <div class="col-lg-4">
                    <div class="sub-method">
                      <h6>BILLING CYCLE</h6>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="sub-method">
                      <p>
                        your will be charge ${packages.amount} on {date}
                      </p>
                      {/* <div class="sub-check">
                      <input type="checkbox" id="check-5" />{" "}
                      <label for="check-5">Enable automatic renewel</label>
                    </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 my_subs_div_2">
                  <div class="col-lg-12">
                    <div class="sub-method"></div>
                  </div>
                </div>
              </div>
              <div class="row feature-border">
                <div className="col-lg-8 my_subs_div_1">
                  <div class="col-lg-6">
                    <div class="sub-method">
                      <h6>PAYMENT INFORMATION</h6>
                    </div>
                  </div>
                  <div class="col-lg-2">
                    <div class="sub-method">
                      <p>Card</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 my_subs_div_2">
                  <div class="col-lg-12">
                    {/* <div class="sub-method">
                    <h5>Change Method</h5>
                  </div> */}
                  </div>
                </div>
              </div>
              <div class="row feature-border">
                <div className="col-lg-8 my_subs_div_1">
                  <div class="col-lg-4">
                    <div class="sub-method">
                      <h6>CANCEL</h6>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="sub-method">
                      <p>Cancel at the ending of billing period</p>
                    </div>
                    <div class="sub-check" style={{ "margin-bottom": "10px" }}>
                      <input
                        type="checkbox"
                        id="check-5"
                        onChange={() => setimmediate(!immediate)}
                      />
                      <label for="check-5">Immediate cancel</label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 my_subs_div_2">
                  <div class="col-lg-12">
                    <div class="sub-method">
                      <button
                        type="button"
                        class="btn us-active-btn cancelbtn"
                        onClick={() => openModal()}
                      >
                        Cancel Subscription
                      </button>
                      <h5>
                        <a href=""> </a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div class="subscription">
              <h1>No Any package Subscribe</h1>
              <p>
                click <Link to="/subscription">here</Link> for subcription
              </p>
            </div>
          )}
        </div>
      </div>
      <div class="container">
        <div class="sec-4">
          <h1>History</h1>
          <div class="history">
            <table class="history-edit">
              <tr class="head-edit">
                <th>INVOICE</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
                <th>START</th>
                <th>END</th>
              </tr>
              {histor.map((item) => {
                return (
                  <tr>
                    <td>#{item._id.slice(item._id.length - 5)}</td>
                    <td>{item.amount} USD$</td>
                    <td>{item.status}</td>
                    <td>{item.start.split("T")[0]}</td>
                    <td>{item.end.split("T")[0]}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
      <Modal show={isopen} onHide={() => closeModal()} className="Modal">
        <Modal.Header className="modal-header canceltext">
          <Modal.Title class="modal-title ">
            Are you sure to cancel Subscription
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="row col-row">
            {/* <p>{packages.interval == "monthly" ? "You cannot subscribe any package until the time of previous subscription in ended":"abc"}</p> */}
          </div>
          <div class="row col-row">
            <div class="col-lg-3 px-3"></div>
            <div class="col-lg-6  subcancelbtn">
              <button
                type="button"
                class="btn us-active-btn cancel"
                onClick={(e) => {
                  packagecancel();
                }}
              >
                Yes
              </button>
              <button
                type="button"
                class="btn us-active-btn cancel"
                onClick={(e) => {
                  closeModal();
                }}
              >
                No
              </button>
            </div>

            <div class="col-lg-3 px-3"></div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

const mapstatetoprops = ({ authReducer, booksReducer, libraryReducer }) => {
  return { authReducer, booksReducer, libraryReducer };
};
export default connect(mapstatetoprops, actions)(BillingComponent);
