import React, { useState } from 'react';
import '../css/TailoredCMS.css';
import navArrow from '../assets/Vector.svg';
import wordpressLogo from '../assets/wordpress-logo.png';
import shopifyLogo from '../assets/shopify-logo.png';
import wixLogo from '../assets/wix-logo.png';

const cmsLogos = [
    { name: 'WordPress', image: wordpressLogo },
    { name: 'Shopify', image: shopifyLogo },
    { name: 'Wix', image: wixLogo }
];

const TailoredCMS = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cmsLogos.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cmsLogos.length) % cmsLogos.length);
    };

    return (
        <section className="tailored-cms-section">
            {/* ... existing sections ... */}
            <div className="tailored-for-brand">
                <h2 className="tailored-title">creative website design tailored for your brand</h2>
                <div className="tailored-description">
                    <p>
                        We challenge ourselves to deliver designs that are subtle yet powerful.
                        Every element from UI/UX to wireframes, R&D to execution must align with your business.
                        Our creative team works alongside you to design or revamp websites that:
                    </p>
                </div>

                <div className="tailored-boxes">
                    <div className="tailored-box">
                        <p>Are strikingly vocal about your brand and perspective</p>
                    </div>
                    <div className="tailored-box">
                        <p>Seamlessly functional across devices</p>
                    </div>
                    <div className="tailored-box">
                        <p>Intuitively interact with your audience</p>
                    </div>
                    <div className="tailored-box">
                        <p>Convert clicks into lasting relationships</p>
                    </div>
                </div>
            </div>

            {/* CMS Section */}
            <div className="powerful-cms-section">
                <h2 className="cms-title">powerful cms websites that put you in control</h2>
                <div className="cms-description">
                    <p>
                        A website is your brand's face, decoding your marketing efforts in seconds.
                        Whether you're a startup or an established enterprise, a content management system (CMS) ensures you can manage and update your site with ease.
                    </p>
                </div>

                <div className="cms-navigation">
                    <button className="cms-nav-arrow prev" onClick={handlePrev}>
                        <img src={navArrow} alt="Previous" />
                    </button>

                    <div className="cms-logo-container">
                        <img
                            src={cmsLogos[currentIndex].image}
                            alt={cmsLogos[currentIndex].name}
                            className="wordpress-logo-img"
                        />
                    </div>

                    <button className="cms-nav-arrow next" onClick={handleNext}>
                        <img src={navArrow} alt="Next" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TailoredCMS;
