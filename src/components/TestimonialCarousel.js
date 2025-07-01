import React, { useState, useEffect } from 'react';
import './TestimonialCarousel.css';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaRegStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'CEO, Acme Inc.',
    message: 'This service completely exceeded my expectations. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
     rating: 5,
  },
  {
    name: 'John Smith',
    role: 'Developer, DevCorp',
    message: 'A seamless experience from start to finish. Amazing support team!',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
     rating: 4,
  },
  {
    name: 'Lisa Ray',
    role: 'Designer, Creatives Co.',
    message: 'Beautiful design and intuitive user interface. Loved it!',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
     rating: 5,
  },
];

const TestimonialCarousel = () => {
    const renderStars = (rating) => {
  return (
    <div className="stars ml-5 mb-4">
      {[...Array(5)].map((_, index) =>
        index < rating ? (
          <FaStar key={index} className="star filled" />
        ) : (
          <FaRegStar key={index} className="star empty" />
        )
      )}
    </div>
  );
};

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const { name, role, message, image, rating } = testimonials[currentIndex];

  return (
    <div className="testimonial-carousel">
      <div className="testimonial-content">
        <FaQuoteLeft className="quote-icon left" />
        
        <p className="message">{message}</p>
        <FaQuoteRight className="quote-icon right" />
        <div className="user-info">
          <img src={image} alt={name} className="user-image" />
          
          <div>
            <h4>{name}</h4>
            <p className="role">{role}</p>
          </div>
          
        </div>
        {renderStars(rating)}
        <div className="navigation">
          <button onClick={handlePrev}>&larr;</button>
          <button onClick={handleNext}>&rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
