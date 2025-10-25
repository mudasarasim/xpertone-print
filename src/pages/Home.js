import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CategorySidebar from '../components/CategorySidebar';
import BestSellerProducts from '../components/BestSellerProducts';
import NewArrivalProducts from '../components/NewArrivalProducts';
import TopRatedProducts from "../components/TopRatedProducts";
import BestSeller from "../components/BestSeller";



import './Home.css';


const Home = () => {
    return (
        <>
            <CategorySidebar />

  <section className="section ms-hero m-t-30">
  <div className="ms-slider-content">
    <div className="ms-main-slider">
      <div className="ms-slider swiper-container main-slider-nav main-slider-dot">
        <div className="swiper-wrapper">

          {/* Slide 1 */}
          <div
            className="ms-slide-item swiper-slide d-flex slide-1"
            style={{
              backgroundImage: 'url("assets/2.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "1px solid grey",
              minHeight: "70vh", // responsive height
              width: "100%"
            }}
          >
          </div>
          <div
            className="ms-slide-item swiper-slide d-flex slide-1"
            style={{
              backgroundImage: 'url("assets/4.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "1px solid grey",
              minHeight: "70vh", // responsive height
              width: "100%"
            }}
          >
          </div>
          <div
            className="ms-slide-item swiper-slide d-flex slide-1"
            style={{
              backgroundImage: 'url("assets/3.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "1px solid grey",
              minHeight: "70vh", // responsive height
              width: "100%"
            }}
          >
          </div>

          {/* Slide 2 */}
          <div
            className="ms-slide-item swiper-slide d-flex slide-2"
            style={{
              backgroundImage: 'url("assets/1.jpeg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              border: "1px solid grey",
              minHeight: "70vh",
              width: "100%"
            }}
          >
            <div className="ms-slide-content slider-animation"></div>
          </div>

        </div>

        {/* Pagination & Navigation */}
        <div className="swiper-pagination swiper-pagination-white"></div>
        <div className="swiper-buttons">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </div>
  </div>
</section>

  <section className="ms-product-tab padding-tb-30">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-title">
          
          <h2>Safety <span> Vest</span> Products</h2>
        </div>
      </div>
    </div>

    {/* Use dynamic products here */}
    <NewArrivalProducts />
  </div>
</section>
        

            <section class="ms-banner padding-tb-30">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="ms-animated-banner" style={{ background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url("assets/img/bc.jpg")' }}>
                                <h2 class="d-none">Offers</h2>
                                <div class="ms-bnr-detail">
                                    <div class="ms-bnr-info">
                                        <h2 style={{ color: 'white' }}>Bussiness Cards <br />For Your Bussiness</h2>
                                        <h3 style={{ color: 'white' }}>30% off sale <span style={{ color: 'white' }}>Hurry up!!!</span></h3>
                                        <a href="/category/business-cards" class="ms-btn-2">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

 <section className="ms-product-tab padding-tb-30 mt-4">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-title">
          <h2>
            Pant &  <span>Shirts/Coveralls</span> Products
          </h2>
        </div>
      </div>
    </div>

    <BestSellerProducts />
  </div>
</section>

            {/* <section class="ms-offer-section padding-tb-30">
                <div class="container" data-animation="fadeIn">
                    <div class="row">

                        <div className="col-md-6 mb-4">
                            <div className="ms-ofr-banners">
                                <div
                                    className="ms-bnr-body"
                                    style={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: '10px',
                                        height: '300px',
                                        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('assets/img/papers.jpg') center center / cover no-repeat`
                                    }}
                                >
                                    <span
                                        className="lbl"
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            background: 'black',
                                            color: 'white',
                                            padding: '5px 10px',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        40% Off
                                    </span>

                                    <div
                                        className="ms-bnr-detail"
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: 'white',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <h5 style={{ color: 'white' }}>Official & Commercial Papers</h5>
                                        <p style={{ color: 'white' }}>The design of something special</p>
                                        <a
                                            href="/category/official-papers"
                                            className="ms-btn-2"
                                            style={{
                                                background: 'white',
                                                marginLeft: '30px',
                                                color: 'black',
                                                padding: '8px 20px',
                                                borderRadius: '4px',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="ms-ofr-banners">
                                <div
                                    className="ms-bnr-body"
                                    style={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: '10px',
                                        height: '300px',
                                        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('assets/img/shoppingbag.jpg') center center / cover no-repeat`
                                    }}
                                >
                                    <span
                                        className="lbl"
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            background: 'black',
                                            color: 'white',
                                            padding: '5px 10px',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        30% Off
                                    </span>

                                    <div
                                        className="ms-bnr-detail"
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: 'white',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <h5 style={{ color: 'white' }}>Shopping Bags</h5>
                                        <p style={{ color: 'white' }}>The design of something special</p>
                                        <a
                                            href="/category/shopping-bags"
                                            className="ms-btn-2"
                                            style={{
                                                marginLeft: '30px',
                                                background: 'white',
                                                color: 'black',
                                                padding: '8px 20px',
                                                borderRadius: '4px',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
           <section className="ms-product-tab padding-tb-30">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-title">
          <h2>Business <span>Cards</span></h2>
        </div>
      </div>
    </div>
    <TopRatedProducts />
  </div>
</section>
  {/* <section class="ms-offer-section padding-tb-30">
                <div class="container" data-animation="fadeIn">
                    <div class="row">

                        <div className="col-md-6 mb-4">
                            <div className="ms-ofr-banners">
                                <div
                                    className="ms-bnr-body"
                                    style={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: '10px',
                                        height: '300px',
                                        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('assets/img/papers.jpg') center center / cover no-repeat`
                                    }}
                                >
                                    <span
                                        className="lbl"
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            background: 'black',
                                            color: 'white',
                                            padding: '5px 10px',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        40% Off
                                    </span>

                                    <div
                                        className="ms-bnr-detail"
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: 'white',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <h5 style={{ color: 'white' }}>Official & Commercial Papers</h5>
                                        <p style={{ color: 'white' }}>The design of something special</p>
                                        <a
                                            href="/category/official-papers"
                                            className="ms-btn-2"
                                            style={{
                                                background: 'white',
                                                marginLeft: '30px',
                                                color: 'black',
                                                padding: '8px 20px',
                                                borderRadius: '4px',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-6">
                            <div className="ms-ofr-banners">
                                <div
                                    className="ms-bnr-body"
                                    style={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: '10px',
                                        height: '300px',
                                        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('assets/img/shoppingbag.jpg') center center / cover no-repeat`
                                    }}
                                >
                                    <span
                                        className="lbl"
                                        style={{
                                            position: 'absolute',
                                            top: '10px',
                                            left: '10px',
                                            background: 'black',
                                            color: 'white',
                                            padding: '5px 10px',
                                            borderRadius: '4px'
                                        }}
                                    >
                                        30% Off
                                    </span>

                                    <div
                                        className="ms-bnr-detail"
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: 'white',
                                            textAlign: 'center'
                                        }}
                                    >
                                        <h5 style={{ color: 'white' }}>Shopping Bags</h5>
                                        <p style={{ color: 'white' }}>The design of something special</p>
                                        <a
                                            href="/category/shopping-bags"
                                            className="ms-btn-2"
                                            style={{
                                                marginLeft: '30px',
                                                background: 'white',
                                                color: 'black',
                                                padding: '8px 20px',
                                                borderRadius: '4px',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            Shop Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section> */}
 {/* <section className="ms-product-tab padding-tb-30 mt-4">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="section-title">
          <h2>
            Best <span> Sellers Group</span> Sheets
          </h2>
        </div>
      </div>
    </div>

    <BestSeller />
  </div>
</section> */}
            <section class="ms-news-section padding-tb-30">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="ms-newsletter">
                                <div class="ms-newsletter-detail">
                                    <div class="ms-detail">
                                        <h4>Subscribe For Join Us!</h4>
                                        <p>Get in touch and get the future update. </p>
                                    </div>
                                    <div class="ms-newsletter-form">
                                        <form>
                                            <input type="email" id="nemail" name="nemail" placeholder="Email Address" /><br />
                                            <button class="ms-btn-2" type="submit" value="Submit"><img
                                                src="assets/img/icons/send.svg" class="svg_img" alt="send" /></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ms-service-section padding-tb-30">
                <div class="container">
                    <div class="row m-tb-minus-12">
                        <div class="ms-ser-content ms-ser-content-1 col-sm-6 col-md-6 col-lg-3 p-tp-12">
                            <div class="ms-ser-inner">
                                <div class="ms-service-image">
                                    <img src="assets/img/service/1.png" class="svg_img" alt="" />
                                </div>
                                <div class="ms-service-desc">
                                    <h3>Free Shipping</h3>
                                    <p>Free shipping on all Dubai order or order above AED500</p>
                                </div>
                            </div>
                        </div>
                        <div class="ms-ser-content ms-ser-content-2 col-sm-6 col-md-6 col-lg-3 p-tp-12">
                            <div class="ms-ser-inner">
                                <div class="ms-service-image">
                                    <img src="assets/img/service/2.png" class="svg_img" alt="" />
                                </div>
                                <div class="ms-service-desc">
                                    <h3>24X7 Support</h3>
                                    <p>Contact us 24 hours a day, 7 days a week</p>
                                </div>
                            </div>
                        </div>
                        <div class="ms-ser-content ms-ser-content-3 col-sm-6 col-md-6 col-lg-3 p-tp-12">
                            <div class="ms-ser-inner">
                                <div class="ms-service-image">
                                    <img src="assets/img/service/3.png" class="svg_img" alt="" />
                                </div>
                                <div class="ms-service-desc">
                                    <h3>30 Days Return</h3>
                                    <p>Simply return it within 30 days for an exchange</p>
                                </div>
                            </div>
                        </div>
                        <div class="ms-ser-content ms-ser-content-4 col-sm-6 col-md-6 col-lg-3 p-tp-12">
                            <div class="ms-ser-inner">
                                <div class="ms-service-image">
                                    <img src="assets/img/service/4.png" class="svg_img" alt="" />
                                </div>
                                <div class="ms-service-desc">
                                    <h3>Payment Secure</h3>
                                    <p>Contact us 24 hours a day, 7 days a week</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;
