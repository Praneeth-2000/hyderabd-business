import React from 'react';
import '../css/FinalCTA.css';
import footerImg from '../assets/footer-img.png';

const FinalCTA = () => {
    return (
        <footer className="final-cta-container">
            {/* CTA Section */}
            <div className="cta-section">
                <h2 className="cta-title">ready to build a website that works as hard as you do?</h2>
                <div className="cta-description">
                    <p>
                        From sleek CMS sites to high-performance eCommerce stores,
                        let's craft your next success story in Hyderabad.
                    </p>
                </div>
                <button className="cta-button">
                    book your free consultation
                </button>
            </div>

            {/* Footer Section */}
            <div className="footer-credits">
                <img src={footerImg} alt="Footer Credits" className="footer-credits-img" />
            </div>
        </footer>
    );
};

export default FinalCTA;
