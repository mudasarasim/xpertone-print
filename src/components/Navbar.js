// components/Navbar.js
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    return (
        <>
            <header class="ms-header">
                <div class="header-top">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col text-left header-top-left d-none d-lg-block">
                                <div class="header-top-social">
                                    <ul class="mb-0">
                                        <li class="list-inline-item">
                                            <a href="javascript:void(0)"><i class="msicon msi-phone"></i></a>+971 52 635 3298
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="javascript:void(0)"><i class="msicon msi-whatsapp"></i></a>+971 52 635 3298
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col text-center header-top-center">
                                <div class="header-top-message">
                                    World's Fastest Online Printing Destination
                                </div>
                            </div>
                            <div class="col header-top-right d-none d-lg-block">
                                <div class="header-top-right-inner d-flex justify-content-end">
                                    <div class="header-top-lan-curr header-top-lan dropdown">
                                        <button class="dropdown-toggle" data-bs-toggle="dropdown">English <i
                                            class="msicon msi-angle-down" aria-hidden="true"></i></button>
                                        <ul class="dropdown-menu">
                                            <li class="active"><a class="dropdown-item" href="#">English</a></li>
                                            <li><a class="dropdown-item" href="#">Italiano</a></li>
                                        </ul>
                                    </div>
                                    <div class="header-top-lan-curr header-top-curr dropdown">
                                        <button class="dropdown-toggle" data-bs-toggle="dropdown">AED <i
                                            class="msicon msi-angle-down" aria-hidden="true"></i></button>
                                        <ul class="dropdown-menu">
                                            <li class="active"><a class="dropdown-item" href="#">USD $</a></li>
                                            <li><a class="dropdown-item" href="#">AED</a></li>
                                        </ul>
                                    </div>
                                    <a class="ms-help" href="faq.html">Help?</a>
                                    
                                </div>
                            </div>
                            <div class="col header-top-res d-lg-none">
                                <div class="ms-header-bottons">
                                    <div class="col ms-category-icon-block">
                                        <div class="ms-category-menu">
                                            <div class="ms-category-toggle">
                                                <img src="assets/img/icons/category-icon.svg" class="svg_img header_svg svg_cat" alt="icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="right-icons">
                                        <a href="login.html" class="ms-header-btn ms-header-user">
                                            <div class="header-icon"><img src="assets/img/icons/user.svg" class="svg_img header_svg" alt="" /></div>
                                        </a>
                                        <a href="javascript:void(0)" class="ms-header-btn ms-wish-toggle">
                                            <div class="header-icon"><img src="assets/img/icons/wishlist.svg" class="svg_img header_svg" alt="" /></div>
                                            <span class="ms-header-count ms-wishlist-count">3</span>
                                        </a>
                                        <a href="javascript:void(0)" class="ms-header-btn ms-cart-toggle">
                                            <div class="header-icon"><img src="assets/img/icons/pro_cart.svg" class="svg_img header_svg" alt="" />
                                                <span class="main-label-note-new"></span>
                                            </div>
                                            <span class="ms-header-count ms-cart-count">3</span>
                                        </a>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="ms-header-bottom d-none d-lg-block">
                    <div class="container position-relative">
                        <div class="row">
                            <div class="ms-flex">
                                <div class="align-self-center ms-header-logo">
                                    <div class="header-logo">
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="Site Logo" /></a>
                                    </div>
                                </div>
                                <div class="align-self-center ms-header-search">
                                    <div class="header-search">
                                        <form class="ms-search-group-form" action="#">
                                            <div class="ms-search-select-inner">
                                                <select class="ms-search-cat selectpicker" multiple data-live-search="true" data-live-search-placeholder="Search category" data-actions-box="true">
                                                    <option>Dairy Products</option>
                                                    <option>Fast Food</option>
                                                    <option>Bakery</option>
                                                    <option>veg</option>
                                                    <option>Non-veg</option>
                                                </select>
                                            </div>
                                            <input class="form-control ms-search-bar" placeholder="Search Products..." type="text" />
                                            <button class="search_submit" type="submit"><img src="assets/img/icons/search.svg"
                                                class="svg_img search_svg" alt="" /></button>
                                        </form>
                                    </div>
                                </div>

                                <div class="align-self-center">
                                    <div class="ms-header-bottons">
                                        <div class="ms-acc-drop">
                                            <a href="javascript:void(0)" class="ms-header-btn ms-header-user dropdown-toggle ms-user-toggle" title="Account">
                                                <div class="header-icon">
                                                    <img src="assets/img/icons/user.svg" class="svg_img header_svg" alt="" />
                                                </div>
                                                <div class="ms-btn-desc">
                                                    <span class="ms-btn-title">Account</span>
                                                    <span class="ms-btn-stitle">Login</span>
                                                </div>
                                            </a>
                                            <ul class="ms-dropdown-menu">
                                                <li><Link class="dropdown-item" to={'/login'}>Login</Link></li>
                                                <li><Link class="dropdown-item" to={'/signup'}>Register</Link></li>
                                            </ul>
                                        </div>
                                        <a href="javascript:void(0)" class="ms-header-btn ms-wish-toggle" title="Wishlist">
                                            <div class="header-icon">
                                                <img src="assets/img/icons/wishlist.svg" class="svg_img header_svg" alt="" />
                                            </div>
                                            <div class="ms-btn-desc">
                                                <span class="ms-btn-title">Wishlist</span>
                                                <span class="ms-btn-stitle"><b class="ms-wishlist-count">3</b>-items</span>
                                            </div>
                                        </a>
                                        <a href="javascript:void(0)" class="ms-header-btn ms-cart-toggle" title="Cart">
                                            <div class="header-icon">
                                                <img src="assets/img/icons/cart_5.svg" class="svg_img header_svg" alt="" />
                                                <span class="main-label-note-new"></span>
                                            </div>
                                            <div class="ms-btn-desc">
                                                <span class="ms-btn-title">Cart</span>
                                                <span class="ms-btn-stitle"><b class="ms-cart-count">3</b>-items</span>
                                            </div>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ms-header-cat d-none d-lg-block">
                    <div class="container position-relative">
                        <div class="row justify-content-between">

                            <div class="col ms-category-icon-block">
                                <div class="ms-category-menu">
                                    <div class="ms-category-toggle">
                                        <img src="assets/img/icons/category-icon.svg" class="svg_img header_svg svg_cat" alt="icon" />
                                    </div>
                                </div>
                            </div>

                            <div id="ms-main-menu-desk" class="d-none d-lg-block sticky-nav">
                                <div class="position-relative nav-desk">
                                    <div class="row">
                                        <div class="col-md-12 align-self-center">
                                            <div class="ms-main-menu">
                                                <ul>
                                                    <li class="non-drop"><Link to={'/'}>Home</Link></li>

                                                    <li class="dropdown drop-list">
                                                        <a href="javascript:void(0)" class="dropdown-arrow">
                                                            Categories <i class="msicon msi-angle-right"></i>
                                                        </a>
                                                        <ul class="sub-menu">
                                                            <li><a href="/category/business-cards">Business Cards</a></li>
                                                            <li><a href="/category/premium-business-cards">Premium Business Cards</a></li>
                                                            <li><a href="/category/official-papers">Official and Commercial Papers</a></li>
                                                            <li><a href="/category/brochures">Brochures</a></li>
                                                            <li><a href="/category/flyers">Flyers</a></li>
                                                            <li><a href="/category/envelopes">Envelopes</a></li>
                                                            <li><a href="/category/table-mat">Table Mat</a></li>
                                                            <li><a href="/category/shopping-bags">Shopping Bags</a></li>
                                                            <li><a href="/category/fast-food-boxes">Fast Food Boxes</a></li>
                                                            <li><a href="/category/die-cutting-products">Die Cutting Products</a></li>
                                                            <li><a href="/category/sticker">Sticker</a></li>
                                                            <li><a href="/category/menu">Menu</a></li>
                                                            <li><a href="/category/luxury-products">Luxury Products</a></li>
                                                            <li><a href="/category/car-mat">Car Mat</a></li>
                                                        </ul>
                                                    </li>

                                                   <li class="non-drop"><Link to={'/about'}>About Us</Link></li>
                                                    <li class="non-drop"><Link to={'/contact'}>Contact Us</Link></li>
                                                   
                                                    <li class="non-drop"><a href="discover.html"><img src="assets/img/icons/discover.svg" class="svg_img" alt="discover" />Discover</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col ms-location-block">
                                <div class="ms-location-menu">
                                    <div class="ms-location-toggle">
                                        <img src="assets/img/icons/location.svg" class="svg_img header_svg svg_loc" alt="icon" />
                                        <span class="ms-location-title d-1199 ms-location" id="ms_location"></span>
                                        <i class="msicon msi-angle-down d-1199" aria-hidden="true"></i>
                                    </div>
                                    <div class="ms-location-content">
                                        <div class="ms-location-dropdown">
                                            <div class="row ms-location-wrapper">
                                                <ul class="loc-grid">
                                                    <li class="loc-list current">
                                                        <img src="assets/img/icons/location.svg" class="svg_img header_svg svg_loc" alt="icon" /><span class="ms-detail-current">current Location</span>
                                                    </li>
                                                    <li class="loc-list"><img src="assets/img/icons/location.svg" class="svg_img header_svg svg_loc" alt="icon" /><span class="ms-detail">rajkot, in</span></li>
                                                    <li class="loc-list"><img src="assets/img/icons/location.svg" class="svg_img header_svg svg_loc" alt="icon" /><span class="ms-detail">Mountain View, us</span></li>
                                                    <li class="loc-list"><img src="assets/img/icons/location.svg" class="svg_img header_svg svg_loc" alt="icon" /><span class="ms-detail">Birmingham, UK</span></li>
                                                    <li class="loc-list"><img src="assets/img/icons/location.svg" class="svg_img header_svg svg_loc" alt="icon" /><span class="ms-detail">Jakarta, id</span></li>
                                                    <li class="loc-list"><img src="assets/img/icons/location.svg" class="svg_img header_svg svg_loc" alt="icon" /><span class="ms-detail">lima, pe</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="ms-mobile-menu-overlay"></div>
                <div id="ms-mobile-menu" class="ms-mobile-menu">
                    <div class="ms-menu-title">
                        <span class="menu_title">My Menu</span>
                        <button class="ms-close-menu">×</button>
                    </div>
                    <div class="ms-menu-inner">
                        <div class="ms-menu-content">
                            <div class="ms-mobile-search">
                                <form>
                                    <input type="text" name="search" placeholder="Search.." />
                                    <button class="search_submit" type="submit"><img src="assets/img/icons/search.svg"
                                        class="svg_img search_svg" alt="" /></button>
                                </form>
                            </div>
                            <ul>
                                <li><a href="index.html">Home</a></li>

                                <li><a href="javascript:void(0)">Categories</a>
                                    <ul class="sub-menu">
                                        <li>
                                            <a href="javascript:void(0)">Classic Variation</a>
                                            <ul class="sub-menu">
                                                <li><a href="shop-left-sidebar-col-3.html">Left sidebar 3 column</a></li>
                                                <li><a href="shop-left-sidebar-col-4.html">Left sidebar 4 column</a></li>
                                                <li><a href="shop-right-sidebar-col-3.html">Right sidebar 3 column</a></li>
                                                <li><a href="shop-right-sidebar-col-4.html">Right sidebar 4 column</a></li>
                                                <li><a href="shop-full-width.html">Full width 4 column</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Classic Variation</a>
                                            <ul class="sub-menu">
                                                <li><a href="shop-banner-left-sidebar-col-3.html">Banner left sidebar 3
                                                    column</a></li>
                                                <li><a href="shop-banner-left-sidebar-col-4.html">Banner left sidebar 4
                                                    column</a></li>
                                                <li><a href="shop-banner-right-sidebar-col-3.html">Banner right sidebar 3
                                                    column</a></li>
                                                <li><a href="shop-banner-right-sidebar-col-4.html">Banner right sidebar 4
                                                    column</a></li>
                                                <li><a href="shop-banner-full-width.html">Banner Full width 4 column</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">Columns Variation</a>
                                            <ul class="sub-menu">
                                                <li><a href="shop-full-width-col-3.html">3 Columns full width</a></li>
                                                <li><a href="shop-full-width-col-4.html">4 Columns full width</a></li>
                                                <li><a href="shop-full-width-col-5.html">5 Columns full width</a></li>
                                                <li><a href="shop-full-width-col-6.html">6 Columns full width</a></li>
                                                <li><a href="shop-banner-full-width-col-3.html">Banner 3 Columns</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0)">List Variation</a>
                                            <ul class="sub-menu">
                                                <li><a href="shop-list-left-sidebar.html">Shop left sidebar</a></li>
                                                <li><a href="shop-list-right-sidebar.html">Shop right sidebar</a></li>
                                                <li><a href="shop-list-banner-left-sidebar.html">Banner left sidebar</a></li>
                                                <li><a href="shop-list-banner-right-sidebar.html">Banner right sidebar</a></li>
                                                <li><a href="shop-list-full-col-2.html">Full width 2 columns</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">Products</a>
                                    <ul class="sub-menu">
                                        <li><a href="product-left-sidebar.html">Product left sidebar</a></li>
                                        <li><a href="product-right-sidebar.html">Product right sidebar</a></li>
                                        <li><a href="product-full-width.html">product-full-width</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown"><a href="javascript:void(0)">Blog</a>
                                    <ul class="sub-menu">
                                        <li><a href="blog-left-sidebar.html">Blog left sidebar</a></li>
                                        <li><a href="blog-right-sidebar.html">Blog right sidebar</a></li>
                                        <li><a href="blog-detail-left-sidebar.html">Blog detail left sidebar</a></li>
                                        <li><a href="blog-detail-right-sidebar.html">Blog detail right sidebar</a></li>
                                        <li><a href="blog-full-width.html">Blog full width</a></li>
                                        <li><a href="blog-detail-full-width.html">Blog detail full width</a></li>
                                    </ul>
                                </li>
                                <li><a href="javascript:void(0)">Others</a>
                                    <ul class="sub-menu">
                                        <li><a href="about-us.html">About Us</a></li>
                                        <li><a href="contact-us.html">Contact Us</a></li>
                                        <li><a href="cart.html">Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="compare.html">Compare</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="login.html">Login</a></li>
                                        <li><a href="register.html">Register</a></li>
                                        <li><a href="track-order.html">Track Order</a></li>
                                        <li><a href="terms-condition.html">Terms Condition</a></li>
                                        <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="header-res-lan-curr">
                            <div class="header-res-social">
                                <div class="header-top-social">
                                    <ul class="mb-0">
                                        <li class="list-inline-item"><a href="#"><i class="msicon msi-facebook"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="msicon msi-twitter"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="msicon msi-instagram"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="msicon msi-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="ms-header-bottom d-lg-none">
                    <div class="container position-relative">
                        <div class="row ">
                            <div class="ms-flex">
                                <div class="col ms-header-logo">
                                    <div class="header-logo">
                                        <a href="index.html">
                                            <img src="assets/img/logo/logo.png" alt="Site Logo" />
                                        </a>
                                    </div>
                                </div>
                                <a href="javascript:void(0)" class="ms-header-btn ms-site-menu-icon d-lg-none">
                                    <img src="assets/img/icons/menu.svg" class="svg_img" alt="menu" />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </header>

        </>
    );
};

export default Navbar;
