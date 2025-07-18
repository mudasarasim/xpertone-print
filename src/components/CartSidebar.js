// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const CartSidebar = () => (
  <>
     <div class="ms-side-cart-overlay"></div>
    <div id="ms-side-cart" class="ms-side-cart">
        <div class="ms-cart-inner">
            <div class="ms-cart-top">
                <div class="ms-cart-title">
                    <span class="cart_title">My Cart</span>
                    <a href="javascript:void(0)" class="ms-cart-close"><img src="assets/img/icons/close.svg"
                            class="svg_img pro_svg" alt="close"/></a>
                </div>
                <ul class="ms-cart-pro-items">
                    <li>
                        <a href="product-left-sidebar.html" class="ms-pro-img"><img
                                src="assets/img/product-images/25_1.jpg" alt="product"/></a>
                        <div class="ms-pro-content">
                            <a href="product-left-sidebar.html" class="cart-pro-title">Fresh Lichi</a>
                            <span class="cart-price"><span>$25.00</span> x 1 kg</span>
                            <div class="qty-plus-minus">
                                <input class="qty-input" type="text" name="ms-qtybtn" value="1"/>
                            </div>
                            <a href="javascript:void(0)" class="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-left-sidebar.html" class="ms-pro-img"><img
                                src="assets/img/product-images/17_1.jpg" alt="product"/></a>
                        <div class="ms-pro-content">
                            <a href="product-left-sidebar.html" class="cart-pro-title">Ginger - Organic</a>
                            <span class="cart-price"><span>$5.00</span> x 1 250g</span>
                            <div class="qty-plus-minus">
                                <input class="qty-input" type="text" name="ms-qtybtn" value="1"/>
                            </div>
                            <a href="javascript:void(0)" class="remove">×</a>
                        </div>
                    </li>
                    <li>
                        <a href="product-left-sidebar.html" class="ms-pro-img"><img
                                src="assets/img/product-images/2_1.jpg" alt="product"/></a>
                        <div class="ms-pro-content">
                            <a href="product-left-sidebar.html" class="cart-pro-title">Dates Value Pack Pouch</a>
                            <span class="cart-price"><span>$59.00</span> x 1 pack</span>
                            <div class="qty-plus-minus">
                                <input class="qty-input" type="text" name="ms-qtybtn" value="1"/>
                            </div>
                            <a href="javascript:void(0)" class="remove">×</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="ms-cart-bottom">
                <div class="cart-sub-total">
                    <table class="table cart-table">
                        <tbody>
                            <tr>
                                <td class="text-left">Sub-Total :</td>
                                <td class="text-right">$300.00</td>
                            </tr>
                            <tr>
                                <td class="text-left">VAT (20%) :</td>
                                <td class="text-right">$60.00</td>
                            </tr>
                            <tr>
                                <td class="text-left">Total :</td>
                                <td class="text-right primary-color">$360.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="cart_btn">
                    <a href="cart.html" class="ms-btn-1">View Cart</a>
                    <a href="checkout.html" class="ms-btn-2">Checkout</a>
                </div>
            </div>
        </div>
    </div>
  </>
);

export default CartSidebar;
