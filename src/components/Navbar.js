// components/Navbar.js
import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const { cartItems } = useCart();

const navigate = useNavigate();
const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const token = localStorage.getItem('userToken');
  setIsLoggedIn(!!token);
}, []);

const handleLogout = () => {
  localStorage.removeItem('userToken');
  setIsLoggedIn(false);
  navigate('/');
};

    return (
        <>
            <header className="ms-header">
                <div className="header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col text-left header-top-left d-none d-lg-block">
                                <div className="header-top-social">
                                <li className="list-inline-item">
  <a href="tel:+971545832318"><i className="msicon msi-phone"></i> +971 54 583 2318</a>
</li>
<li className="list-inline-item">
  <a href="https://wa.me/971545832318" target="_blank" rel="noopener noreferrer">
    <i className="msicon msi-whatsapp"></i> +971 54 583 2318
  </a>
</li> 
                                </div>
                            </div>
                            <div className="col text-center header-top-center">
                                <div className="header-top-message">
                                    World's Fastest Online Printing Destination
                                </div>
                            </div>
                            <div className="col header-top-right d-none d-lg-block">
                                <div className="header-top-right-inner d-flex justify-content-end">
                                    <div className="header-top-lan-curr header-top-lan dropdown">
                                        <button className="dropdown-toggle" data-bs-toggle="dropdown">English <i
                                            className="msicon msi-angle-down" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu">
                                            <li className="active"><a className="dropdown-item" href="#">English</a></li>
                                            <li><a className="dropdown-item" href="#">Italiano</a></li>
                                        </ul>
                                    </div>
                                    <div className="header-top-lan-curr header-top-curr dropdown">
                                        <button className="dropdown-toggle" data-bs-toggle="dropdown">AED <i
                                            className="msicon msi-angle-down" aria-hidden="true"></i></button>
                                        <ul className="dropdown-menu">
                                            <li className="active"><a className="dropdown-item" href="#">USD $</a></li>
                                            <li><a className="dropdown-item" href="#">AED</a></li>
                                        </ul>
                                    </div>
                                    <a className="ms-help" href="faq.html">Help?</a>
                                    
                                </div>
                            </div>
                            <div className="col header-top-res d-lg-none">
                                <div className="ms-header-bottons">
                                    <div className="col ms-category-icon-block">
                                        <div className="ms-category-menu">
                                            <div className="ms-category-toggle">
                                                <img src="/assets/img/icons/category-icon.svg" className="svg_img header_svg svg_cat" alt="icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-icons">
                                        <a href="login.html" className="ms-header-btn ms-header-user">
                                            <div className="header-icon"><img src="/assets/img/icons/user.svg" className="svg_img header_svg" alt="" /></div>
                                        </a>
                                        <Link to="/cart" className="ms-header-btn ms-cart-toggle" title="Cart">
  <div className="header-icon">
    <img src="/assets/img/icons/cart_5.svg" className="svg_img header_svg" alt="" />
    <span className="main-label-note-new"></span>
  </div>
  <div className="ms-btn-desc">
    <span className="ms-btn-title">Cart</span>
    <span className="ms-btn-stitle">
      <b className="ms-cart-count">{cartItems.length}</b>-items
    </span>
  </div>
</Link>


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="ms-header-bottom d-none d-lg-block">
                    <div className="container position-relative">
                        <div className="row">
                            <div className="ms-flex">
                                <div className="align-self-center ms-header-logo">
                                    <div className="header-logo">
                                        <Link to={'/'}><img src="/assets/logo.png" alt="Site Logo" /></Link>
                                    </div>
                                </div>
                                <div className="align-self-center ms-header-search">
                                    <div className="header-search">
                                        <form className="ms-search-group-form" action="#">
                                            <div className="ms-search-select-inner">
                                                <select className="ms-search-cat selectpicker" multiple data-live-search="true" data-live-search-placeholder="Search category" data-actions-box="true">
                                                    <option>Dairy Products</option>
                                                    <option>Fast Food</option>
                                                    <option>Bakery</option>
                                                    <option>veg</option>
                                                    <option>Non-veg</option>
                                                </select>
                                            </div>
                                            <input className="form-control ms-search-bar" placeholder="Search Products..." type="text" />
                                            <button className="search_submit" type="submit"><img src="/assets/img/icons/search.svg"
                                                className="svg_img search_svg" alt="" /></button>
                                        </form>
                                    </div>
                                </div>

                                <div className="align-self-center">
                                    <div className="ms-header-bottons">
 <div className="ms-acc-drop">
  <div className="ms-header-btn ms-header-user dropdown-toggle ms-user-toggle" title="Account">
    <div className="header-icon">
      <img src="/assets/img/icons/user.svg" className="svg_img header_svg" alt="" />
    </div>
    <div className="ms-btn-desc">
      <span className="ms-btn-title">Account</span>
      <span className="ms-btn-stitle">{isLoggedIn ? 'Profile' : 'Login'}</span>
    </div>
  </div>
  <ul className="ms-dropdown-menu">
    {!isLoggedIn ? (
      <>
        <li><Link className="dropdown-item" to="/login">Login</Link></li>
        <li><Link className="dropdown-item" to="/signup">Register</Link></li>
      </>
    ) : (
      <>
        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
      </>
    )}
  </ul>
</div>

<Link to="/cart" className="ms-header-btn ms-cart-toggle" title="Cart">
  <div className="header-icon">
    <img src="/assets/img/icons/cart_5.svg" className="svg_img header_svg" alt="" />
    <span className="main-label-note-new"></span>
  </div>
  <div className="ms-btn-desc">
    <span className="ms-btn-title">Cart</span>
    <span className="ms-btn-stitle"><b className="ms-cart-count">{cartItems.length}</b>-items</span>
  </div>
</Link>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ms-header-cat d-none d-lg-block">
                    <div className="container position-relative">
                        <div className="row justify-content-between">

                            <div className="col ms-category-icon-block">
                                <div className="ms-category-menu">
                                    <div className="ms-category-toggle">
                                        <img src="/assets/img/icons/category-icon.svg" className="svg_img header_svg svg_cat" alt="icon" />
                                    </div>
                                </div>
                            </div>

                            <div id="ms-main-menu-desk" className="d-none d-lg-block sticky-nav">
                                <div className="position-relative nav-desk">
                                    <div className="row">
                                        <div className="col-md-12 align-self-center">
                                            <div className="ms-main-menu">
                                                <ul>
                                                    <li className="non-drop"><Link to={'/'}>Home</Link></li>

                                                    {/* <li className="dropdown drop-list">
                                                        <a href="/" className="dropdown-arrow">
                                                            Categories <i className="msicon msi-angle-right"></i>
                                                        </a>
                                                       <ul className="sub-menu">
                                                           <li><Link to="/category/business-cards">Business Cards</Link></li>
                                                           <li><Link to="/category/premium-business-cards">Premium Business Cards</Link></li>
                                                           <li><Link to="/category/official-papers">Official and Commercial Papers</Link></li>
                                                           <li><Link to="/category/brochures">Brochures</Link></li>
                                                           <li><Link to="/category/flyers">Flyers</Link></li>
                                                           <li><Link to="/category/envelopes">Envelopes</Link></li>
                                                           <li><Link to="/category/table-mat">Table Mat</Link></li>
                                                           <li><Link to="/category/shopping-bags">Shopping Bags</Link></li>
                                                           <li><Link to="/category/fast-food-boxes">Fast Food Boxes</Link></li>
                                                           <li><Link to="/category/die-cutting-products">Die Cutting Products</Link></li>
                                                           <li><Link to="/category/sticker">Sticker</Link></li>
                                                           <li><Link to="/category/menu">Menu</Link></li>
                                                           <li><Link to="/category/luxury-products">Luxury Products</Link></li>
                                                           <li><Link to="/category/car-mat">Car Mat</Link></li> 
                                                           <li><Link to="/category/safety-vest">Safety Vest</Link></li>
<li><Link to="/category/safety-jackets">Safety Jackets & Pants </Link></li>
<li><Link to="/category/safety-helmets">Safety Helmet</Link></li>

                                                           </ul>

                                                    </li> */}
                                                     <li className="non-drop"><Link to="/category/safety-vest">Safety Vest</Link></li>
                               <li className="non-drop"><Link to="/category/safety-cargo-trousers">Cargo Trousers</Link></li>
                               <li className="non-drop"><Link to="/category/Pant-Shirts-Coveralls">Pant & Shirts/Coveralls </Link></li>
                               <li className="non-drop"><Link to="/category/business-cards">Business Cards</Link></li>
                               
                                                    <li className="non-drop"><Link to={'/contact'}>Contact Us</Link></li>
                                                   
                                                    </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col ms-location-block">
                                <div className="ms-location-menu">
                                    <div className="ms-location-toggle">
                                        <img src="/assets/img/icons/location.svg" className="svg_img header_svg svg_loc" alt="icon" />
                                        <span className="ms-location-title d-1199 ms-location" id="ms_location"></span>
                                        <i className="msicon msi-angle-down d-1199" aria-hidden="true"></i>
                                    </div>
                                    {/* <div className="ms-location-content">
                                        <div className="ms-location-dropdown">
                                            <div className="row ms-location-wrapper">
                                                <ul className="loc-grid">
                                                    <li className="loc-list current">
                                                        <img src="/assets/img/icons/location.svg" className="svg_img header_svg svg_loc" alt="icon" /><span className="ms-detail-current">current Location</span>
                                                    </li>
                                                    <li className="loc-list"><img src="/assets/img/icons/location.svg" className="svg_img header_svg svg_loc" alt="icon" /><span className="ms-detail">rajkot, in</span></li>
                                                    <li className="loc-list"><img src="/assets/img/icons/location.svg" className="svg_img header_svg svg_loc" alt="icon" /><span className="ms-detail">Mountain View, us</span></li>
                                                    <li className="loc-list"><img src="/assets/img/icons/location.svg" className="svg_img header_svg svg_loc" alt="icon" /><span className="ms-detail">Birmingham, UK</span></li>
                                                    <li className="loc-list"><img src="/assets/img/icons/location.svg" className="svg_img header_svg svg_loc" alt="icon" /><span className="ms-detail">Jakarta, id</span></li>
                                                    <li className="loc-list"><img src="/assets/img/icons/location.svg" className="svg_img header_svg svg_loc" alt="icon" /><span className="ms-detail">lima, pe</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="ms-mobile-menu-overlay"></div>
                <div id="ms-mobile-menu" className="ms-mobile-menu">
                    <div className="ms-menu-title">
                        <span className="menu_title">My Menu</span>
                        <button className="ms-close-menu">×</button>
                    </div>
                    <div className="ms-menu-inner">
                        <div className="ms-menu-content">
                            <div className="ms-mobile-search">
                                <form>
                                    <input type="text" name="search" placeholder="Search.." />
                                    <button className="search_submit" type="submit"><img src="/assets/img/icons/search.svg"
                                        className="svg_img search_svg" alt="" /></button>
                                </form>
                            </div>
                            <ul>
                                <li><Link href="/">Home</Link></li>

                                {/* <li><a href="javascript:void(0)">Categories</a>
                                    <ul className="sub-menu">
                                        <li><Link to="/category/business-cards">Business Cards</Link></li>
                                                           <li><Link to="/category/premium-business-cards">Premium Business Cards</Link></li>
                                                           <li><Link to="/category/official-papers">Official and Commercial Papers</Link></li>
                                                           <li><Link to="/category/brochures">Brochures</Link></li>
                                                           <li><Link to="/category/flyers">Flyers</Link></li>
                                                           <li><Link to="/category/envelopes">Envelopes</Link></li>
                                                           <li><Link to="/category/table-mat">Table Mat</Link></li>
                                                           <li><Link to="/category/shopping-bags">Shopping Bags</Link></li>
                                                           <li><Link to="/category/fast-food-boxes">Fast Food Boxes</Link></li>
                                                           <li><Link to="/category/die-cutting-products">Die Cutting Products</Link></li>
                                                           <li><Link to="/category/sticker">Sticker</Link></li>
                                                           <li><Link to="/category/menu">Menu</Link></li>
                                                           <li><Link to="/category/luxury-products">Luxury Products</Link></li>
                                                           <li><Link to="/category/car-mat">Car Mat</Link></li> 
                                                           <li><Link to="/category/safety-vest">Safety Vest</Link></li>
<li><Link to="/category/safety-jackets">Safety Jackets & Pants </Link></li>
<li><Link to="/category/safety-helmets">Safety Helmet</Link></li>

                                    </ul>
                                </li> */}
                               <li><Link to="/category/safety-vest">Safety Vest</Link></li>
                               <li><Link to="/category/safety-vest">Cargo Trousers</Link></li>
                               <li><Link to="/category/safety-jackets">Pant & Shirts/Coveralls </Link></li>
                               <li><Link to="/category/business-cards">Business Cards</Link></li>
                               <li><Link href="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="header-res-lan-curr">
                            <div className="header-res-social">
                                <div className="header-top-social">
                                    <ul className="mb-0">
                                        <li className="list-inline-item"><a href="#"><i className="msicon msi-facebook"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="msicon msi-twitter"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="msicon msi-instagram"></i></a></li>
                                        <li className="list-inline-item"><a href="#"><i className="msicon msi-linkedin"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="ms-header-bottom d-lg-none">
                    <div className="container position-relative">
                        <div className="row ">
                            <div className="ms-flex">
                                <div className="col ms-header-logo">
                                    <div className="header-logo">
                                        <Link to={'/'}>
                                            <img src="/assets/logo.png" alt="Site Logo" />
                                        </Link>
                                    </div>
                                </div>
                                <a href="javascript:void(0)" className="ms-header-btn ms-site-menu-icon d-lg-none">
                                    <img src="/assets/img/icons/menu.svg" className="svg_img" alt="menu" />
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
