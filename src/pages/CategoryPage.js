// pages/ContactUs.js
import React, { useState } from 'react';
import axios from 'axios';
import CategorySidebar from '../components/CategorySidebar';
import CartSidebar from '../components/CartSidebar';
import WishlistSidebar from '../components/WishlistSidebar';
import { products } from '../components/products';

const CategoryWise = () => {
  return (
    <>
    <CategorySidebar />
    <CartSidebar />
    <WishlistSidebar />
     <div class="ms-breadcrumb m-b-5">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="row ms_breadcrumb_inner">
                <div
                  className="col-md-12 col-sm-12 back" style={{background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("assets/img/product-images/sl1.jpg")'}}>
                  <h2>Category Wise</h2>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


      <section class="ms-product-tab padding-tb-30">
                  <div class="container">
                      <div class="row">
                          <div class="col-md-12">
                              <div class="section-title">
                                  <h2>Bussiness <span> Card</span> Products</h2>
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
                                                  <div className="ms-product-inner">
                                                      <div className="ms-pro-image-outer">
                                                          <div className="ms-pro-image">
                                                              <a href="product-left-sidebar.html" className="image">
                                                                  
                                                                  <img className="main-image" src={product.mainImage} alt={product.title} />
                                                                  <img className="hover-image" src={product.hoverImage} alt={product.title} />
                                                              </a>
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
                                              </div>
                                          ))}
                                      </div>
  
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
  
    </>
  );
};

export default CategoryWise;
