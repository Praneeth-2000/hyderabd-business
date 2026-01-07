import React, { useState } from 'react';
import '../css/EcommerceSection.css';
import navArrow from '../assets/Vector.svg';
import leafIcon from '../assets/leaf-logo.png';
import shopifyLogo from '../assets/shopify-logo.png';
import wordpressLogo from '../assets/wordpress-logo.png';
import wixLogo from '../assets/wix-logo.png';
import svisLogo from '../assets/svis-logo.png';

const ecommerceLogos = [
    { name: 'shopify', subtitle: 'All-in-one eCommerce platform', image: shopifyLogo },
    { name: 'woocommerce', subtitle: 'The most customizable platform', image: wordpressLogo },
    { name: 'wix ecommerce', subtitle: 'Create a professional online store', image: wixLogo },
    { name: 'custom shop', subtitle: 'Bespoke ecommerce solutions', image: svisLogo }
];

const EcommerceSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % ecommerceLogos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + ecommerceLogos.length) % ecommerceLogos.length);
    };

    return (
        <section className="ecommerce-section">
            <div className="section-divider"></div>

            {/* WordPress Development Header */}
            <div className="platform-info">
                <h3 className="platform-title">wordpress development</h3>
                <p className="platform-subtitle">Flexible, SEO-ready, user-friendly</p>
            </div>

            {/* Ecommerce Headline */}
            <div className="ecommerce-hero">
                <h2 className="ecommerce-title">ecommerce websites that convert wishlists into sales</h2>
                <div className="ecommerce-description">
                    <p>
                        Today's shopping experience is tomorrow's customer loyalty.
                        At eParivartan, we design conversion-driven eCommerce websites that are fast, secure, and scalable.
                    </p>
                </div>
            </div>

            {/* Shopify Section */}
            <div className="shopify-showcase">
                <div className="shopify-nav">
                    <button className="nav-arrow prev" onClick={handlePrev}>
                        <img src={navArrow} alt="Previous" />
                    </button>

                    <div className="shopify-bag">
                        <img
                            src={ecommerceLogos[currentIndex].image}
                            alt={ecommerceLogos[currentIndex].name}
                            className="shopify-logo-img"
                        />
                    </div>

                    <button className="nav-arrow next" onClick={handleNext}>
                        <img src={navArrow} alt="Next" />
                    </button>
                </div>

                <div className="shopify-info">
                    <h3 className="platform-title">{ecommerceLogos[currentIndex].name}</h3>
                    <p className="platform-subtitle">{ecommerceLogos[currentIndex].subtitle}</p>
                </div>
            </div>

            <div className="section-divider"></div>

            {/* Benefits Section */}
            <div className="benefits-section">
                <h2 className="benefits-title">benefits</h2>
                <ul className="benefits-list">
                    <li>
                        <img src={leafIcon} alt="check" className="benefit-icon" />
                        <span>Smooth product browsing & checkout</span>
                    </li>
                    <li>
                        <img src={leafIcon} alt="check" className="benefit-icon" />
                        <span>Secure payments & integrations</span>
                    </li>
                    <li>
                        <img src={leafIcon} alt="check" className="benefit-icon" />
                        <span>Mobile-optimized storefronts</span>
                    </li>
                    <li>
                        <img src={leafIcon} alt="check" className="benefit-icon" />
                        <span>Scalable to grow with your business</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default EcommerceSection;
