// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <>
     <footer class="ms-footer m-t-30">
        <div class="footer-container">
            <div class="footer-top padding-tb-60">
                <div class="container">
                    <div class="row m-minus-991">
                        <div class="col-sm-12 col-lg-3 ms-footer-cat">
                            <div class="ms-footer-widget ms-footer-company">
                                <img src="/assets/img/logo/XLogo.png" style={{height: '120px', width: '400px'}} class="ms-footer-logo" alt="footer logo"/>
                                <p class="ms-footer-detail">Xpertone creative is the biggest market of printing products. Get your daily needs from our services.</p>
                                
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-2 ms-footer-info">
                            <div class="ms-footer-widget">
                                <h4 class="ms-footer-heading">Category</h4>
                                <div class="ms-footer-links ms-footer-dropdown">
                                    <ul class="align-items-center">
                                      <li className='ms-footer-link'><Link to="/category/business-cards">Business Cards</Link></li>
                                                                                                 <li className='ms-footer-link'><Link to="/category/premium-business-cards">Premium Business Cards</Link></li>
                                                                                                 <li className='ms-footer-link'><Link to="/category/official-papers">Official and Commercial Papers</Link></li>
                                                                                                 <li className='ms-footer-link'><Link to="/category/brochures">Brochures</Link></li>
                                                                                                 <li className='ms-footer-link'><Link to="/category/flyers">Flyers</Link></li>
                                                                              
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-lg-2 ms-footer-account">
                            <div class="ms-footer-widget">
                                <h4 class="ms-footer-heading">Company</h4>
                                <div class="ms-footer-links ms-footer-dropdown">
                                    <ul class="align-items-center">
                                        <li class="ms-footer-link"><Link to={'/about'}>About us</Link></li>
                                        <li class="ms-footer-link"><Link to={'/contact'}>Contact us</Link></li>
                                        <li class="ms-footer-link"><Link to={'/login'}>Login</Link></li>
                                        <li class="ms-footer-link"><Link to={'/signup'}>Sign Up</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                   
                        <div class="col-sm-12 col-lg-3 ms-footer-cont-social">
                            <div class="ms-footer-contact">
                                <div class="ms-footer-widget">
                                    <h4 class="ms-footer-heading">Contact</h4>
                                    <div class="ms-footer-links ms-footer-dropdown">
                                        <ul class="align-items-center">
                                            <li class="ms-footer-link ms-foo-location"><span><img
                                                        src="/assets/img/icons/foo-location.svg" class="svg_img foo_svg"
                                                        alt=""/></span>
                                                <p>Um Suqeim Street - Al Barsha

Al Barsha 1 - Dubai

United Arab Emirates</p>
                                            </li>
                                            <li class="ms-footer-link ms-foo-call"><span><img
                                                        src="/assets/img/icons/foo-wp.svg" class="svg_img foo_svg"
                                                        alt=""/></span><a href="tel:+971545832318">+971 54 583 2318</a>
                                            </li>
                                            <li class="ms-footer-link ms-foo-mail"><span><img
                                                        src="/assets/img/icons/foo-mail.svg" class="svg_img foo_svg"
                                                        alt=""/></span><a href="mailto:example@email.com">info@xpertonecreative.com</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>  
                            <div class="ms-footer-social">
                                <div class="ms-footer-widget">
                                    <div class="ms-footer-links ms-footer-dropdown">
                                        <ul class="align-items-center">
                                            <li class="ms-footer-link"><a href="#"><i class="msicon msi-instagram" aria-hidden="true"></i></a></li>
                                            <li class="ms-footer-link"><a href="#"><i class="msicon msi-twitter-square" aria-hidden="true"></i></a></li>
                                            <li class="ms-footer-link"><a href="#"><i class="msicon msi-facebook-square" aria-hidden="true"></i></a></li>
                                            <li class="ms-footer-link"><a href="#"><i class="msicon msi-linkedin-square" aria-hidden="true"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="ms-bottom-info">
                            <div class="footer-copy">
                                <div class="footer-bottom-copy ">
                                    <div class="ms-copy">Copyright © <a class="site-name" href="index.html">Xpertone</a> all rights reserved. Powered by Xpertone.</div>
                                </div>
                            </div>
                            <div class="footer-bottom-right">
                                <div class="footer-bottom-payment d-flex justify-content-center">
                                    <div class="payment-link">
                                        <img src="/assets/img/hero-bg/payment.png" alt="payment"/>
                                    </div>

                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
  </>
);

export default Footer;
