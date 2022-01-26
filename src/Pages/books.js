import React from "react";
import Loader from "react-loader-spinner";
import Header from "../Components/Header";
import book from "../Assets/Images/book-card.png";
import { Book } from "@mui/icons-material";
import Footer from "../Components/Footer";

function books() {
  return (
    <>
    <Header />
    <div className="book-page">
        <div className="container">
            <div className="book-desc-box">
                <div className="row">
                    <div className="col-md-3 book-img-col">
                        <img src="/static/media/book-card.38056e30.png" class="book-image"></img>
                    </div>
                    <div className="col-md-9">
                        <h1 className="book-head">Book Title Goes Here With Two Lines with a longer title</h1>
                        <div className="row">
                            <div className="col-md-9 box-desc-row">
                                <div className="urban">
                                    <span><svg class="svg-inline-header-cat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24px 24px"><path class="st0" d="M3,0h4.2c1.7,0,3.1,1.5,3.1,3.1v4.2c0,1.7-1.5,3.1-3.1,3.1H3c-1.6,0.1-3.1-1.2-3.1-2.9V3.1C-0.1,1.5,1.4,0,3,0 z"></path><path class="st0" d="M16.7,0h4.2c1.7,0,3.2,1.5,3.2,3.1v4.2c0,1.7-1.5,3.1-3.1,3.1h-4.2c-1.7,0-3.1-1.5-3.1-3.1V3.1 C13.6,1.5,14.9,0,16.7,0z"></path><path class="st0" d="M3,13.7h4.2c1.7,0,3.1,1.5,3.1,3.1v4.2c0,1.7-1.5,3.1-3.1,3.1H3c-1.6,0.1-3.1-1.3-3.1-2.9v-4.2 C-0.1,15,1.4,13.7,3,13.7z"></path><path class="st0" d="M16.7,13.7h4.2c1.7,0,3.1,1.5,3.1,3.1v4.2c0,1.7-1.5,3.1-3.1,3.1h-4.2c-1.7,0-3.1-1.5-3.1-3.1v-4.2 C13.6,15,14.9,13.7,16.7,13.7z"></path></svg></span>
                                    <span class="head">urban</span>
                                </div>
                                <div className="day">
                                    <span><i class="fas fa-pencil-alt"></i><span className="head">5 CH. / Day </span><i class="fas fa-question-circle"></i></span>
                                </div>
                                <div className="chapter">
                                <span>  <svg class="mp-book-chapter-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M3,12h8c0.6,0,1-0.4,1-1V1c0-0.6-0.4-1-1-1H2C0.9,0,0,0.9,0,2v11c0,1.7,1.3,3,3,3h8c0.6,0,1-0.4,1-1 s-0.4-1-1-1H3c-0.6,0-1-0.4-1-1S2.4,12,3,12z"></path></svg></span>
                                <span className="head">3471 Chapters</span>
                                </div>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="desc-box-ratings">
                            <span className="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </span>
                            <span className="rate">4.2</span>
                            <span className="rating">24 RATINGS</span>
                        </div>
    
                        <div className="read-buttons">
                            <button className="read-btn"><a href="#">Read now</a></button>
                            <span className="heart"><i class="far fa-heart"></i></span>
                        </div>
                    </div>
                
                    <ul class="nav nav-tabs book-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#toc">Table of contents</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div class="tab-content a-t_content">
                <div class="tab-pane fade active show about_content" id="about">
                    <h1 className="description-head">description</h1>
                    <p className="description-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <div className="books">
                        <h1 className="books-head">Recommended Reads</h1>
                        <img src="/static/media/book-card.38056e30.png" class="book"></img>                  
                    </div>

                    <div className="review">
                        <h1 className="review-head">reviews</h1>
                        <div className="row review-row">
                            <div className="col-md-6 revoew-col">
                                <h1 className="review-head">Rate this Novel</h1>
                                <div className="stars stars-2">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                                <h3 className="review-subhead">110 Reviews (4.2)</h3>
                            </div>
                            <div className="col-md-6">
                                <form action="" method="">
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="Leave a review with a comment..." rows="3" id="comment" required></textarea>
                                    </div>
                                    <button type="submit" className="review-btn">send</button> 
                                </form>
                            </div>
                        </div>
                        <ul class="nav nav-tabs review-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="tab" href="#Liked">Liked</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#Newest">Newest</a>
                            </li>
                        </ul>
                        <div class="tab-content liked-content">
                            <div class="tab-pane fade active show" id="Liked">
                                <div className="comment-box">
                                    <div className="row">
                                       <div className="col-md-1 col-2">
                                            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="profile-image"></img>
                                       </div>
                                       <div className="col-md-11 col-9">
                                           <h3 className="comment-box-head">ImNotNarcissistic <span><img className="comment-head-img" src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png"></img> <img className="comment-head-img" src="https://cdn-icons.flaticon.com/png/512/2566/premium/2566494.png?token=exp=1641277749~hmac=35dffb9fd4f99b007132ef425f322f44"></img></span></h3>
                                           <span className="stars stars-3">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </span>
                                            <p className="comment">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </p>
                                            <div className="row comment-row">
                                                <div className="col-lg-5 col-md-6">
                                                    <ul className="comment-list">
                                                        <li>The Strongest Son-in-Law (城中餐厅)</li>
                                                        <li>The Strongest Son-in-Law (城中餐厅)</li>
                                                        <li>The Strongest Son-in-Law (城中餐厅)</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <span className="more-comment">
                                                        <a href="#"><i class="fas fa-chevron-down"></i></a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="row comment-row-2">
                                                <div className="col-md-4 col-3">
                                                    <span className="time">9mth</span>
                                                </div>
                                                <div className="col-md-7 col-8">
                                                    <span className="like">
                                                        <i class="far fa-thumbs-up"></i>
                                                        149 
                                                    </span>
                                                    <span className="comment">
                                                        <i class="far fa-comment"></i>
                                                    </span>
                                                    <span><a href="#" className="dots">...</a></span>
                                                </div>
                                            </div>
                                            <span className="replies"><i class="fas fa-comment"></i> VIEW 40 REPLIES</span>
                                       </div>
                                    </div>

                                </div> 
                                <div className="comment-box">
                                    <div className="row">
                                       <div className="col-md-1 col-2">
                                        <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 " class="profile-image"></img>
                                       </div>
                                       <div className="col-md-11 col-9">
                                           <h3 className="comment-box-head">ImNotNarcissistic <span><img className="comment-head-img" src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png"></img> <img className="comment-head-img" src="https://cdn-icons.flaticon.com/png/512/2566/premium/2566494.png?token=exp=1641277749~hmac=35dffb9fd4f99b007132ef425f322f44"></img></span></h3>
                                           <span className="stars stars-3">
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                                <i class="fas fa-star"></i>
                                            </span>
                                            <p className="comment">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </p>
                                            <div className="row comment-row">
                                                <div className="col-md-5">
                                                    <ul className="comment-list">
                                                        <li>The Strongest Son-in-Law (城中餐厅)</li>
                                                        <li>The Strongest Son-in-Law (城中餐厅)</li>
                                                        <li>The Strongest Son-in-Law (城中餐厅)</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <span className="more-comment">
                                                        <a href="#"><i class="fas fa-chevron-down"></i></a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="row comment-row-2">
                                                <div className="col-md-4 col-3">
                                                    <span className="time">9mth</span>
                                                </div>
                                                <div className="col-md-7 col-8">
                                                    <span className="like">
                                                        <i class="far fa-thumbs-up"></i>
                                                        149 
                                                    </span>
                                                    <span className="comment">
                                                        <i class="far fa-comment"></i>
                                                    </span>
                                                    <span><a href="#" className="dots">...</a></span>
                                                </div>
                                            </div>
                                            <span className="replies"><i class="fas fa-comment"></i> VIEW 40 REPLIES</span>
                                       </div>
                                    </div>

                                </div>  
                            </div>
                            <div class="tab-pane fade" id="Newest">...</div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade toc_content" id="toc">
                    <div className="row toc-top-row">
                        <div className="col-md-8 col-10">
                             <span className="l-r-head">Latest Release:</span>   
                             <span className="l-r-head l-r-headcolor">Chapter 627: Receiving An Invitation Again</span>   
                             <span className="l-r-head l-r-subhead">2h</span>   
                        </div>
                        <div className="col-md-3 col-2">
                            <a href="#" className="indenticon"><i class="fas fa-indent"></i></a>
                        </div>
                    </div>

                    <h3 className="a-t-subhead">Volume 1</h3>

                    <div className="row a-t_row">
                        <div className="row">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">1</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">2</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row bg-color">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">3</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row bg-color">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">4</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">5</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">6</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row bg-color">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">7</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row bg-color">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">8</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">9</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">10</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row bg-color">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">11</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row bg-color">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">12</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">13</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1 col-1">
                                <span className="numbercount">14</span>
                            </div>
                            <div className="col-lg-11 col-md-10 col-10">
                                <h1 className="volume-head">Take your Back to Washington DC</h1>
                                <h3 className="volume-time">9mth</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
    <Footer />
     </>
    
  );
}

export default books;
