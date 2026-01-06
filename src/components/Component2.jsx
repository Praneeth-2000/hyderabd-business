import React, { useState } from 'react';
import '../css/Component2.css';
import fastTurnaroundIcon from '../assets/fast-turnaround-icon.jpg';
import techVersatilityIcon from '../assets/tech-versatility-icon.jpg';
import mobileSeoIcon from '../assets/mobile-seo-icon.jpg';

const Component2 = () => {
    const [expandedSection, setExpandedSection] = useState('seo');
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (e) => {
        const container = e.target;
        const scrollPosition = container.scrollLeft;
        const cardWidth = 128 + 24; // width + gap (1.5rem = 24px)
        const newIndex = Math.round(scrollPosition / cardWidth);
        if (newIndex !== activeIndex && newIndex >= 0 && newIndex < features.length) {
            setActiveIndex(newIndex);
        }
    };

    const features = [
        {
            icon: fastTurnaroundIcon,
            iconType: 'image',
            title: 'Fast Turnaround:',
            description: 'Avg. 4-6 weeks'
        },
        {
            icon: techVersatilityIcon,
            iconType: 'image',
            title: 'Tech Versatility:',
            description: 'WordPress, Shopify, PHP, React, Python, Custom CMS'
        },
        {
            icon: mobileSeoIcon,
            iconType: 'image',
            title: 'Mobile-First & SEO',
            description: 'Optimized'
        }
    ];

    const accordionItems = [
        {
            id: 'first-impressions',
            content: 'first impressions count: Your website is the first touchpoint for potential customers. A professional, modern design builds trust instantly.'
        },
        {
            id: 'leads',
            content: 'leads & revenue: A well-designed website converts visitors into customers, driving more leads and increasing your revenue.'
        },
        {
            id: 'seo',
            content: 'seo & local discoverability: Rank higher on Google and attract local Hyderabad customers.'
        },
        {
            id: 'future-proof',
            content: 'future-proof scaling: Build a website that grows with your business, ready to scale as your needs evolve.'
        }
    ];

    const toggleAccordion = (id) => {
        setExpandedSection(expandedSection === id ? null : id);
    };

    return (
        <div className="component2">
            {/* Why Businesses Choose Us Section */}
            <section className="why-choose-section">
                <h2 className="section-heading">
                    why businesses in<br />
                    hyderabad choose us
                </h2>

                <div className="features-container" onScroll={handleScroll}>
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">
                                {feature.iconType === 'image' ? (
                                    <img src={feature.icon} alt={feature.title} />
                                ) : (
                                    feature.icon
                                )}
                            </div>
                            <p className="feature-text">
                                <strong>{feature.title}</strong> {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="carousel-dots">
                    {features.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${activeIndex === index ? 'active' : ''}`}
                        ></span>
                    ))}
                </div>
            </section>

            {/* Why Your Business Needs More Section */}
            <section className="why-needs-section">
                <h2 className="section-heading-script">
                    why your business needs<br />
                    more than just a website
                </h2>

                <p className="section-description">
                    Your website is more than a digital address<br />
                    —it's the hub of your brand, sales, and<br />
                    customer trust.
                </p>

                <div className="accordion">
                    {accordionItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`accordion-item ${expandedSection === item.id ? 'expanded' : ''}`}
                        >
                            <button
                                className="accordion-header"
                                onClick={() => toggleAccordion(item.id)}
                            >
                                <span className="accordion-title">point 0{index + 1}</span>
                                <span className="accordion-icon">
                                    {expandedSection === item.id ? '▲' : '▼'}
                                </span>
                            </button>
                            {expandedSection === item.id && (
                                <div className="accordion-content">
                                    <p>{item.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Component2;
