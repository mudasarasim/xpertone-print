import React from 'react';
import { Link } from 'react-router-dom';

const WishlistSidebar = () => (
  <>
      <div class="ms-side-wish-overlay"></div>
    <div id="ms-side-wish" class="ms-side-wish">
        <div class="ms-wish-inner">
            <div class="ms-wish-top">
                <div class="ms-wish-title">
                    <span class="wish_title">My Wishlist</span>
                    <a href="javascript:void(0)" class="ms-wish-close"><img src="assets/img/icons/close.svg"
                            class="svg_img pro_svg" alt="close"/></a>
                </div>
                <ul class="ms-wish-pro-items">
                    <li>
                        <a href="product-left-sidebar.html" class="ms-pro-img"><img
                                src="assets/img/product-images/18_1.jpg" alt="product"/></a>
                        <div class="ms-pro-content">
                            <a href="product-left-sidebar.html" class="wish-pro-title">Lemon</a>
                            <span class="wish-price"><span>$25.00</span> x 1 kg</span>
                            <div class="ms-availability">
                                <p class="stock avail">In Stock</p>
                                <a href="" class="ms-btn-2">Add to cart</a>
                            </div>
                            <a href="javascript:void(0)" class="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-left-sidebar.html" class="ms-pro-img"><img
                                src="assets/img/product-images/20_1.jpg" alt="product"/></a>
                        <div class="ms-pro-content">
                            <a href="product-left-sidebar.html" class="wish-pro-title">Asparagus</a>
                            <span class="wish-price"><span>$5.00</span> x 250g</span>
                            <div class="ms-availability">
                                <p class="stock not-avail">Out Stock</p>
                                <div class="ms-wish-contact-btns">
                                    <a href="" class="ms-btn-2 btn-disabled">Add to cart</a>
                                    <a href="" class="ms-btn-1">Contact</a>
                                </div>
                            </div>
                            <a href="javascript:void(0)" class="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-left-sidebar.html" class="ms-pro-img"><img
                                src="assets/img/product-images/31_1.jpg" alt="product"/></a>
                        <div class="ms-pro-content">
                            <a href="product-left-sidebar.html" class="wish-pro-title">Mango</a>
                            <span class="wish-price"><span>$59.00</span> x 1 pack</span>
                            <div class="ms-availability">
                                <p class="stock avail">In Stock</p>
                                <a href="" class="ms-btn-2">Add to cart</a>
                            </div>
                            <a href="javascript:void(0)" class="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-left-sidebar.html" class="ms-pro-img"><img
                                src="assets/img/product-images/23_1.jpg" alt="product"/></a>
                        <div class="ms-pro-content">
                            <a href="product-left-sidebar.html" class="wish-pro-title">Blue berry</a>
                            <span class="wish-price"><span>$59.00</span> x 1 kg</span>
                            <div class="ms-availability">
                                <p class="stock avail">In Stock</p>
                                <a href="" class="ms-btn-2">Add to cart</a>
                            </div>
                            <a href="javascript:void(0)" class="remove">×</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </>
);


export default WishlistSidebar;
