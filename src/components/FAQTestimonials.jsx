import React, { useState } from 'react';
import '../css/FAQTestimonials.css';
import wordpressLogo from '../assets/wordpress-logo.png';
import shopifyLogo from '../assets/shopify-logo.png';
import wixLogo from '../assets/wix-logo.png';
import svisLogo from '../assets/svis-logo.png';
import testimonialArrow from '../assets/testimonial-arrow.png';

const FAQTestimonials = () => {
    const [activeIndex, setActiveIndex] = useState(2); // Set 3rd item as active initially to match mockup
    const [testimonialIndex, setTestimonialIndex] = useState(0);

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

    const testimonials = [
        {
            schoolName: "Sadhu Vaswani International School",
            logo: svisLogo,
            rating: 5,
            text: [
                "Dear Team eParivartan,",
                "We want to take a moment to express our sincere appreciation for your hard work and dedication is designing and maintaining our school website since the beginning. Your effort have played a crucial role in shaping our online presence, and we truly value your contributions."
            ],
            footerLogo: wordpressLogo
        },
        {
            schoolName: "Global Excellence Academy",
            logo: svisLogo, // Using same logo as placeholder or different if available
            rating: 5,
            text: [
                "To the eParivartan Team,",
                "Your innovative approach to our digital platform has exceeded our expectations. The user-friendly interface and seamless navigation have significantly improved our engagement with parents and students alike."
            ],
            footerLogo: shopifyLogo
        },
        {
            schoolName: "St. Mary's Convent School",
            logo: svisLogo,
            rating: 5,
            text: [
                "Professional and Reliable,",
                "The team at eParivartan has been instrumental in our digital transformation. Their attention to detail and prompt support make them a trusted partner for our institution's online needs."
            ],
            footerLogo: wixLogo
        },
        {
            schoolName: "Bright Future International",
            logo: svisLogo,
            rating: 4,
            text: [
                "Exceptional Service,",
                "We are highly satisfied with the website design and the continuous updates provided. The team is always ready to help and provides solutions that are both creative and functional."
            ],
            footerLogo: wordpressLogo
        },
        {
            schoolName: "Heritage Public School",
            logo: svisLogo,
            rating: 5,
            text: [
                "Highly Recommended,",
                "Working with eParivartan has been a pleasure. They understood our requirements perfectly and delivered a website that truly represents our school's values and heritage."
            ],
            footerLogo: shopifyLogo
        }
    ];

    const handlePrev = () => {
        setTestimonialIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setTestimonialIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

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
                            <img src={testimonials[testimonialIndex].logo} alt="School Logo" className="school-logo-img" />
                        </div>
                        <h3 className="school-name">{testimonials[testimonialIndex].schoolName}</h3>
                        <div className="star-rating">
                            {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                                <span key={i} className="star">★</span>
                            ))}
                        </div>

                        <div className="testimonial-text">
                            {testimonials[testimonialIndex].text.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>

                        <div className="testimonial-divider"></div>

                        <div className="testimonial-footer-logo">
                            <img src={testimonials[testimonialIndex].footerLogo} alt="Platform" className="footer-wp-logo" />
                        </div>
                    </div>

                    <div className="testimonial-nav-footer">
                        <button className="testimonial-nav-arrow prev" onClick={handlePrev}>
                            <img src={testimonialArrow} alt="Previous" />
                        </button>
                        <button className="testimonial-nav-arrow next" onClick={handleNext}>
                            <img src={testimonialArrow} alt="Next" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQTestimonials;
