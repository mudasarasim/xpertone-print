// components/Navbar.js
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ✅ New state to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    navigate("/");
  };

  // ✅ Close mobile menu on link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
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
                    <a href="tel:+971526353298">
                      <i className="msicon msi-phone"></i> +971 52 635 3298
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      href="https://wa.me/971526353298"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="msicon msi-whatsapp"></i> +971 52 635 3298
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
                    <button className="dropdown-toggle" data-bs-toggle="dropdown">
                      English <i className="msicon msi-angle-down" aria-hidden="true"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li className="active">
                        <a className="dropdown-item" href="#">
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Italiano
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-top-lan-curr header-top-curr dropdown">
                    <button className="dropdown-toggle" data-bs-toggle="dropdown">
                      AED <i className="msicon msi-angle-down" aria-hidden="true"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li className="active">
                        <a className="dropdown-item" href="#">
                          USD $
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          AED
                        </a>
                      </li>
                    </ul>
                  </div>
                  <a className="ms-help" href="faq.html">
                    Help?
                  </a>
                </div>
              </div>
              <div className="col header-top-res d-lg-none">
                <div className="ms-header-bottons">
                  <div className="col ms-category-icon-block">
                    <div className="ms-category-menu">
                      <div className="ms-category-toggle">
                        <img
                          src="assets/img/icons/category-icon.svg"
                          className="svg_img header_svg svg_cat"
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="right-icons">
                    <a href="login.html" className="ms-header-btn ms-header-user">
                      <div className="header-icon">
                        <img
                          src="assets/img/icons/user.svg"
                          className="svg_img header_svg"
                          alt=""
                        />
                      </div>
                    </a>
                    <Link to="/cart" className="ms-header-btn ms-cart-toggle" title="Cart">
                      <div className="header-icon">
                        <img
                          src="assets/img/icons/cart_5.svg"
                          className="svg_img header_svg"
                          alt=""
                        />
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

        {/* ----------- MOBILE MENU SECTION ----------- */}

        <div
          className={`ms-mobile-menu-overlay ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div id="ms-mobile-menu" className={`ms-mobile-menu ${isMenuOpen ? "open" : ""}`}>
          <div className="ms-menu-title">
            <span className="menu_title">My Menu</span>
            <button className="ms-close-menu" onClick={() => setIsMenuOpen(false)}>
              ×
            </button>
          </div>
          <div className="ms-menu-inner">
            <div className="ms-menu-content">
              <div className="ms-mobile-search">
                <form>
                  <input type="text" name="search" placeholder="Search.." />
                  <button className="search_submit" type="submit">
                    <img
                      src="assets/img/icons/search.svg"
                      className="svg_img search_svg"
                      alt=""
                    />
                  </button>
                </form>
              </div>
              <ul>
                <li>
                  <Link to="/" onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <a href="javascript:void(0)">Categories</a>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/category/business-cards" onClick={handleLinkClick}>
                        Business Cards
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/premium-business-cards" onClick={handleLinkClick}>
                        Premium Business Cards
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/official-papers" onClick={handleLinkClick}>
                        Official and Commercial Papers
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/brochures" onClick={handleLinkClick}>
                        Brochures
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/flyers" onClick={handleLinkClick}>
                        Flyers
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/envelopes" onClick={handleLinkClick}>
                        Envelopes
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/table-mat" onClick={handleLinkClick}>
                        Table Mat
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/shopping-bags" onClick={handleLinkClick}>
                        Shopping Bags
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/fast-food-boxes" onClick={handleLinkClick}>
                        Fast Food Boxes
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/die-cutting-products" onClick={handleLinkClick}>
                        Die Cutting Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/sticker" onClick={handleLinkClick}>
                        Sticker
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/menu" onClick={handleLinkClick}>
                        Menu
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/luxury-products" onClick={handleLinkClick}>
                        Luxury Products
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/car-mat" onClick={handleLinkClick}>
                        Car Mat
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/safety-vest" onClick={handleLinkClick}>
                        Safety Vest
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/safety-jackets" onClick={handleLinkClick}>
                        Safety Jackets & Pants
                      </Link>
                    </li>
                    <li>
                      <Link to="/category/safety-helmets" onClick={handleLinkClick}>
                        Safety Helmet
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about" onClick={handleLinkClick}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={handleLinkClick}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ----------- MOBILE MENU TOGGLE BUTTON ----------- */}

        <div className="ms-header-bottom d-lg-none">
          <div className="container position-relative">
            <div className="row ">
              <div className="ms-flex">
                <div className="col ms-header-logo">
                  <div className="header-logo">
                    <Link to={"/"}>
                      <img src="assets/logo.png" alt="Site Logo" />
                    </Link>
                  </div>
                </div>

                {/* ✅ Toggle Button */}
                <button
                  className="ms-header-btn ms-site-menu-icon d-lg-none"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <img src="assets/img/icons/menu.svg" className="svg_img" alt="menu" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
