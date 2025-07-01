import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CategorySidebar from '../components/CategorySidebar';
import CartSidebar from '../components/CartSidebar';
import WishlistSidebar from '../components/WishlistSidebar';
import { products } from '../components/products';
import './Home.css';


const Home = () => {
    return (
        <>
            <CategorySidebar />
            <CartSidebar />
            <WishlistSidebar />

            <section class="section ms-hero m-t-30">
                <div class="container">
                    <div class="ms-main-content">
                        <div class="ms-slider-content">
                            <div class="ms-main-slider">
                                <div class="ms-slider swiper-container main-slider-nav main-slider-dot">
                                    <div class="swiper-wrapper">
                                        <div class="ms-slide-item swiper-slide d-flex slide-1" style={{ backgroundImage: 'url("assets/img/product-images/sl1.jpg")', border: '1px solid grey' }}>
                                            <div class="ms-slide-content slider-animation">
                                                <div class="ms-slide-desc">
                                                    <a href="#" class="ms-btn-2">Shop Now <i
                                                        class="msicon msi-angle-double-right" aria-hidden="true"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ms-slide-item swiper-slide d-flex slide-2" style={{ backgroundImage: 'url("assets/img/product-images/sl2.jpg")', border: '1px solid grey' }}>
                                            <div class="ms-slide-content slider-animation">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-pagination swiper-pagination-white"></div>
                                    <div class="swiper-buttons">
                                        <div class="swiper-button-next"></div>
                                        <div class="swiper-button-prev"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ms-banner-content align-self-center">
                            <div class="ms-slider-grid-item grid-img-4" style={{ backgroundImage: 'url("assets/img/product-images/l1.jpg")', border: '1px solid grey', height: '213px' }}>
                                <div class="ms-detail">

                                </div>
                            </div>
                        </div>
                        <div class="ms-banner-content align-self-center">
                            <div class="ms-slider-grid-item grid-img-5" style={{ backgroundImage: 'url("assets/img/product-images/p8.png")', border: '1px solid grey', height: '213px' }}>
                                <div class="ms-detail">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ms-product-tab padding-tb-30 mt-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2>Best <span> Sellers Group</span> Sheets</h2>
                            </div>
                        </div>

                    </div>
                    <div class="row margin-minus-b-15">
                        <div class="col">
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="all">
                                    <div className="row align-items-stretch">
                                        {products.map((product) => (
                                              <div className="col-md-3 col-sm-6 col-xs-6 ms-product-content" key={product.id}>
                                            <Link to={'/productdetail'} style={{textDecoration: 'none', color: 'black'}}>
                                            
                                                <div className="ms-product-inner">
                                                    <div className="ms-pro-image-outer">
                                                        <div className="ms-pro-image">
                                                            <div className="image">
                                                               
                                                                <img className="main-image" src={product.mainImage} alt={product.title} />
                                                                <img className="hover-image" src={product.hoverImage} alt={product.title} />
                                                            </div>
                                                            {product.badge && (
                                                                <span className="flags">
                                                                    <span className={product.badge}>{product.badge.toUpperCase()}</span>
                                                                </span>
                                                            )}
                                                            <div className="ms-pro-actions">
                                                                <a className="ms-btn-group wishlist" title="Wishlist">
                                                                    <img src="assets/img/icons/pro_wishlist.svg" className="svg_img pro_svg" alt="" />
                                                                </a>

                                                                <a href="javascript:void(0)" title="Add To Cart" className="ms-btn-group add-to-cart">
                                                                    <img src="assets/img/icons/pro_cart.svg" className="svg_img pro_svg" alt="" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ms-product-title">{product.title}</div>

                                                    <div className="ms-circulations">
                                                        <h6>Available Circulations:</h6>
                                                        <div className="ms-circulation-item">
                                                            <span>500 pcs</span>
                                                            <span>AED-175</span>
                                                        </div>
                                                        <div className="ms-circulation-item">
                                                            <span>1000 pcs</span>
                                                            <span>AED-225</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                 </Link>

                                            </div>
                                           
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
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
                                        <a href="shop-left-sidebar-col-3.html" class="ms-btn-2">Shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ms-product-tab padding-tb-30">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2>New  <span> Arrival Group</span> Sheets</h2>
                            </div>
                        </div>

                    </div>
                    <div class="row margin-minus-b-15">
                        <div class="col">
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="all">
                                    <div className="row">
                                        {products.map((product) => (
                                             <div className="col-md-3 col-sm-6 col-xs-6 ms-product-content" key={product.id}>
                                            <Link to={'/productdetail'} style={{textDecoration: 'none', color: 'black'}}>
                                            
                                                <div className="ms-product-inner">
                                                    <div className="ms-pro-image-outer">
                                                        <div className="ms-pro-image">
                                                            <div className="image">
                                                               
                                                                <img className="main-image" src={product.mainImage} alt={product.title} />
                                                                <img className="hover-image" src={product.hoverImage} alt={product.title} />
                                                            </div>
                                                            {product.badge && (
                                                                <span className="flags">
                                                                    <span className={product.badge}>{product.badge.toUpperCase()}</span>
                                                                </span>
                                                            )}
                                                            <div className="ms-pro-actions">
                                                                <a className="ms-btn-group wishlist" title="Wishlist">
                                                                    <img src="assets/img/icons/pro_wishlist.svg" className="svg_img pro_svg" alt="" />
                                                                </a>

                                                                <a href="javascript:void(0)" title="Add To Cart" className="ms-btn-group add-to-cart">
                                                                    <img src="assets/img/icons/pro_cart.svg" className="svg_img pro_svg" alt="" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ms-product-title">{product.title}</div>

                                                    <div className="ms-circulations">
                                                        <h6>Available Circulations:</h6>
                                                        <div className="ms-circulation-item">
                                                            <span>500 pcs</span>
                                                            <span>AED-175</span>
                                                        </div>
                                                        <div className="ms-circulation-item">
                                                            <span>1000 pcs</span>
                                                            <span>AED-225</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                 </Link>

                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="ms-offer-section padding-tb-30">
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
                                            href="shop-left-sidebar-col-3.html"
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
                                            href="shop-left-sidebar-col-3.html"
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
            </section>
            <section class="ms-product-tab padding-tb-30">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="section-title">
                                <h2>Top <span> Rated Group</span> Sheets</h2>
                            </div>
                        </div>

                    </div>
                    <div class="row margin-minus-b-15">
                        <div class="col">
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="all">
                                    <div className="row">
                                        {products.map((product) => (
                                         <div className="col-md-3 col-sm-6 col-xs-6 ms-product-content" key={product.id}>
                                            <Link to={'/productdetail'} style={{textDecoration: 'none', color: 'black'}}>
                                            
                                                <div className="ms-product-inner">
                                                    <div className="ms-pro-image-outer">
                                                        <div className="ms-pro-image">
                                                            <div className="image">
                                                               
                                                                <img className="main-image" src={product.mainImage} alt={product.title} />
                                                                <img className="hover-image" src={product.hoverImage} alt={product.title} />
                                                            </div>
                                                            {product.badge && (
                                                                <span className="flags">
                                                                    <span className={product.badge}>{product.badge.toUpperCase()}</span>
                                                                </span>
                                                            )}
                                                            <div className="ms-pro-actions">
                                                                <a className="ms-btn-group wishlist" title="Wishlist">
                                                                    <img src="assets/img/icons/pro_wishlist.svg" className="svg_img pro_svg" alt="" />
                                                                </a>

                                                                <a href="javascript:void(0)" title="Add To Cart" className="ms-btn-group add-to-cart">
                                                                    <img src="assets/img/icons/pro_cart.svg" className="svg_img pro_svg" alt="" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ms-product-title">{product.title}</div>

                                                    <div className="ms-circulations">
                                                        <h6>Available Circulations:</h6>
                                                        <div className="ms-circulation-item">
                                                            <span>500 pcs</span>
                                                            <span>AED-175</span>
                                                        </div>
                                                        <div className="ms-circulation-item">
                                                            <span>1000 pcs</span>
                                                            <span>AED-225</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                 </Link>

                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
