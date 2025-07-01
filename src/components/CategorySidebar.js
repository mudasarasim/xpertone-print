import React from 'react';
import { Link } from 'react-router-dom';

// Define an array of categories
const categories = [
  { name: 'Business Cards', slug: 'business-cards' },
  { name: 'Premium Business Cards', slug: 'premium-business-cards' },
  { name: 'Official and Commercial Papers', slug: 'official-papers' },
  { name: 'Brochures', slug: 'brochures' },
  { name: 'Flyers', slug: 'flyers' },
  { name: 'Envelopes', slug: 'envelopes' },
  { name: 'Table Mat', slug: 'table-mat' },
  { name: 'Shopping Bags', slug: 'shopping-bags' },
  { name: 'Fast Food Boxes', slug: 'fast-food-boxes' },
  { name: 'Die Cutting Products', slug: 'die-cutting-products' },
  { name: 'Sticker', slug: 'sticker' },
  { name: 'Menu', slug: 'menu' },
  { name: 'Luxury Products', slug: 'luxury-products' },
  { name: 'Car Mat', slug: 'car-mat' }
];

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
                  {categories.map((category) => (
                    <li key={category.slug} className="ms-list">
                      <Link to={`/categorywise`} className="ms-sidebar-block-item">
                        {category.name}
                      </Link>
                    </li>
                  ))}
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
