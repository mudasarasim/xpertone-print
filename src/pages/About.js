import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import CategorySidebar from '../components/CategorySidebar';
import CartSidebar from '../components/CartSidebar';




const About = () => {
  return (
    <>
    <CategorySidebar />
    <CartSidebar />
      <div class="ms-breadcrumb m-b-30">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <div class="row ms_breadcrumb_inner">
                <div
                  className="col-md-12 col-sm-12 back" style={{background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("assets/img/product-images/sl1.jpg")'}}>
                  <h2>About Us</h2>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="ms-about padding-tb-30">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="ms-about-img">
                <img src="assets/img/about.png" style={{ height: '400px' }} alt="about" />
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="ms-about-detail">
                <div class="section-title">
                  <h2>ABOUT <span>OUR</span> COMPANY</h2><br />
                  </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>Lorem Ipsum has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                  specimen book.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="ms-service-section padding-tb-30">
        <div class="container">
          <div class="section-title-2">
            <h2 class="ms-title">Our <span>Services</span></h2>
            <p>Customer service should not be a department. It should be the entire company.</p>
          </div>
          <div class="row m-tb-minus-12">
            <div class="ms-ser-content ms-ser-content-1 col-sm-6 col-md-6 col-lg-3 p-tp-12">
              <div class="ms-ser-inner">
                <div class="ms-service-image">
                  <img src="assets/img/service/1.png" class="svg_img" alt="" />
                </div>
                <div class="ms-service-desc">
                  <h3>Free Shipping</h3>
                  <p>Free shipping on all US order or order above $200</p>
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

      <section class="ms-testimonials-section padding-tb-30">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="testim-bg p-tb-60">
                <div class="section-title d-none">
                  <h2>Customers <span>Review</span></h2>
                </div>
                <span class="ms-testi-shape-1"></span>
                <div class="ms-test-outer ms-test-section">
                  <ul id="ms-testimonial-slider" class="owl-carousel">
                    <li class="ms-test-item">
                      <img src="assets/img/icons/top-quotes.svg" class="svg_img test_svg top" alt="user" />
                      <div class="ms-test-inner">
                        <div class="ms-test-img">
                          <img alt="testimonial" title="testimonial" src="assets/img/user/1.jpg" />
                        </div>
                        <div class="ms-test-content">
                          <div class="ms-test-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                          <div class="ms-test-name">Mariya Klinton</div>
                          <div class="ms-test-designation">CEO</div>
                          <div class="ms-test-rating">
                            <i class="msicon msi-star fill"></i>
                            <i class="msicon msi-star fill"></i>
                            <i class="msicon msi-star fill"></i>
                            <i class="msicon msi-star fill"></i>
                            <i class="msicon msi-star fill"></i>
                          </div>
                        </div>
                      </div>
                      <img src="assets/img/icons/bottom-quotes.svg" class="svg_img test_svg bottom" alt="" />
                    </li>
                    <li class="ms-test-item ">
                      <img src="assets/img/icons/top-quotes.svg" class="svg_img test_svg top" alt="" />
                      <div class="ms-test-inner">
                        <div class="ms-test-img">
                          <img alt="testimonial" title="testimonial" src="assets/img/user/2.jpg" />
                        </div>
                        <div class="ms-test-content">
                          <div class="ms-test-desc">standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen</div>
                          <div class="ms-test-name">John Doe</div>
                          <div class="ms-test-designation">General Manager</div>
                          <div class="ms-test-rating">
                            <i class="msicon msi-star fill"></i>
                            <i class="msicon msi-star fill"></i>
                            <i class="msicon msi-star fill"></i>
                            <i class="msicon msi-star fill"></i>
                            <i class="msicon msi-star fill"></i>
                          </div>
                        </div>
                      </div>
                      <img src="assets/img/icons/bottom-quotes.svg" class="svg_img test_svg bottom" alt="" />
                    </li>
                    <li class="ms-test-item">
                      <img src="assets/img/icons/top-quotes.svg" class="svg_img test_svg top" alt="" />
                      <div class="ms-test-inner">
                        <div class="ms-test-img">
                          <img alt="testimonial" title="testimonial" src="assets/img/user/3.jpg" />
                        </div>
                        <div class="ms-test-content">
                          <div class="ms-test-desc">when an unknown printer took a galley of type and scrambled it to make a type specimenLorem Ipsum has been the industry's ever since the 1500s, </div>
                          <div class="ms-test-name">Nency Lykra</div>
                          <div class="ms-test-designation">Marketing Manager</div>
                          <div class="ms-test-rating">
                            <i class="msicon msi-star fill"></i>
                            <i class="msicon msi-star fill"></i>
                            <i class="msicon msi-star fill"></i>
                            <i class="msicon msi-star fill"></i>
                            <i class="msicon msi-star fill"></i>
                          </div>
                        </div>
                      </div>
                      <img src="assets/img/icons/bottom-quotes.svg" class="svg_img test_svg bottom" alt="" />
                    </li>
                  </ul>
                </div>
                <span class="ms-testi-shape-2"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="ms-team-section padding-tb-30">
  <div className="container">
    <div className="section-title-2 text-center">
      <h2 className="ms-title">Meet Our <span>Team</span></h2>
      <p>Our dedicated professionals committed to delivering excellence.</p>
    </div>
    <div className="row">
      {/* Team Member 1 */}
      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div className="team-member text-center shadow rounded p-3 bg-white h-100">
          <img
            src="assets/img/user/1.jpg"
            className="img-fluid rounded-circle mb-3"
            alt="Team Member"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <h5 className="mb-1">Ayesha Khan</h5>
          <p className="text-muted">CEO & Founder</p>
        </div>
      </div>
      {/* Team Member 2 */}
      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div className="team-member text-center shadow rounded p-3 bg-white h-100">
          <img
            src="assets/img/user/2.jpg"
            className="img-fluid rounded-circle mb-3"
            alt="Team Member"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <h5 className="mb-1">Ali Raza</h5>
          <p className="text-muted">Operations Manager</p>
        </div>
      </div>
      {/* Team Member 3 */}
      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div className="team-member text-center shadow rounded p-3 bg-white h-100">
          <img
            src="assets/img/user/3.jpg"
            className="img-fluid rounded-circle mb-3"
            alt="Team Member"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <h5 className="mb-1">Hira Naveed</h5>
          <p className="text-muted">Marketing Head</p>
        </div>
      </div>
      {/* Team Member 4 */}
      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div className="team-member text-center shadow rounded p-3 bg-white h-100">
          <img
            src="assets/img/user/5.jpg"
            className="img-fluid rounded-circle mb-3"
            alt="Team Member"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <h5 className="mb-1">Rida Malik</h5>
          <p className="text-muted">Lead Developer</p>
        </div>
      </div>
    </div>
     <div className="row">
      {/* Team Member 1 */}
      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div className="team-member text-center shadow rounded p-3 bg-white h-100">
          <img
            src="assets/img/user/1.jpg"
            className="img-fluid rounded-circle mb-3"
            alt="Team Member"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <h5 className="mb-1">Ayesha Khan</h5>
          <p className="text-muted">CEO & Founder</p>
        </div>
      </div>
      {/* Team Member 2 */}
      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div className="team-member text-center shadow rounded p-3 bg-white h-100">
          <img
            src="assets/img/user/2.jpg"
            className="img-fluid rounded-circle mb-3"
            alt="Team Member"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <h5 className="mb-1">Ali Raza</h5>
          <p className="text-muted">Operations Manager</p>
        </div>
      </div>
      {/* Team Member 3 */}
      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div className="team-member text-center shadow rounded p-3 bg-white h-100">
          <img
            src="assets/img/user/3.jpg"
            className="img-fluid rounded-circle mb-3"
            alt="Team Member"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <h5 className="mb-1">Hira Naveed</h5>
          <p className="text-muted">Marketing Head</p>
        </div>
      </div>
      {/* Team Member 4 */}
      <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
        <div className="team-member text-center shadow rounded p-3 bg-white h-100">
          <img
            src="assets/img/user/5.jpg"
            className="img-fluid rounded-circle mb-3"
            alt="Team Member"
            style={{ width: '120px', height: '120px', objectFit: 'cover' }}
          />
          <h5 className="mb-1">Rida Malik</h5>
          <p className="text-muted">Lead Developer</p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>

  );
};

export default About;
