import React, { useState } from 'react';
import '../css/FAQTestimonials.css';
import wordpressLogo from '../assets/wordpress-logo.png';
import svisLogo from '../assets/svis-logo.png';
import testimonialArrow from '../assets/testimonial-arrow.png';

const FAQTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Set 3rd item as active initially to match mockup

    const faqs = [
        {
            question: "which cms platforms do you work with?",
            answer: ""
        },
        {
            question: "how long does it take to build an ecommerce site?",
            answer: ""
        },
        {
            question: "can you migrate my old site to a new cms?",
            answer: "Yes, we specialize in migrations without downtime."
        },
        {
            question: "do you provide seo for shopify/wordpress sites?",
            answer: ""
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-testimonials-section">
            {/* FAQ Section */}
            <div className="faq-section">
                <h2 className="faq-title">frequently asking questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="faq-question-row">
                                <h3 className="faq-question">{faq.question}</h3>
                                <span className={`faq-arrow ${activeIndex === index ? 'up' : 'down'}`}>
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            {activeIndex === index && (
                                <div className="faq-answer">
                                    <p>{faq.answer || "Answer content goes here."}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="testimonials-section">
                <h2 className="testimonials-title">testimonials</h2>

                <div className="testimonials-slider">
                    <div className="testimonial-card">
                        <div className="school-logo-container">
                            <img src={svisLogo} alt="SVIS Logo" className="school-logo-img" />
                        </div>
                        <h3 className="school-name">Sadhu Vaswani International School</h3>
                        <div className="star-rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="star">★</span>
                            ))}
                        </div>

                        <div className="testimonial-text">
                            <p>Dear Team eParivartan,</p>
                            <p>We want to take a moment to express our sincere appreciation for your hard work and dedication is designing and maintaining our school website
                                since the beginning. Your effort have played a crucial role in shaping our online presence, and we truly value your contributions.
                            </p>
                        </div>

                        <div className="testimonial-divider"></div>

                        <div className="testimonial-footer-logo">
                            <img src={wordpressLogo} alt="WordPress" className="footer-wp-logo" />
                        </div>
                    </div>

                    <div className="testimonial-nav-footer">
                        <button className="testimonial-nav-arrow prev">
                            <img src={testimonialArrow} alt="Previous" />
                        </button>
                        <button className="testimonial-nav-arrow next">
                            <img src={testimonialArrow} alt="Next" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQTestimonials;
