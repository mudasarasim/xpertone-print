import React from 'react';
import { Link } from 'react-router-dom';

const CategorySidebar = () => (
  <>
    <div className="ms-side-cat-overlay"></div>
    <div className="col-lg-3 ms-category-sidebar">
      <div className="cat-sidebar">
        <div className="cat-sidebar-box">
          <div className="ms-cat-sidebar-wrap">
            <div className="ms-sidebar-block">
              <div className="ms-sb-title">
                <h3 className="ms-sidebar-title">
                  Categories
                  <button className="ms-close">×</button>
                </h3>
              </div>
              <div className="ms-sb-block-content">
                <ul>
                  <li className="ms-list">
                    <Link to="/category/business-cards" className="ms-sidebar-block-item">Business Cards</Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/premium-business-cards" className="ms-sidebar-block-item">Premium Business Cards</Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/official-papers" className="ms-sidebar-block-item">Official and Commercial Papers</Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/brochures" className="ms-sidebar-block-item">Brochures</Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/flyers" className="ms-sidebar-block-item">Flyers</Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/envelopes" className="ms-sidebar-block-item">Envelopes</Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/table-mat" className="ms-sidebar-block-item">Table Mat</Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/shopping-bags" className="ms-sidebar-block-item">
                      Shopping Bags
                    </Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/fast-food-boxes" className="ms-sidebar-block-item">Fast Food Boxes</Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/die-cutting-products" className="ms-sidebar-block-item">Die Cutting Products</Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/sticker" className="ms-sidebar-block-item">Sticker</Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/menu" className="ms-sidebar-block-item">Menu</Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/luxury-products" className="ms-sidebar-block-item">Luxury Products</Link>
                  </li>
                  <li className="ms-list">
                    <Link to="/category/car-mat" className="ms-sidebar-block-item">Car Mat</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default CategorySidebar;
