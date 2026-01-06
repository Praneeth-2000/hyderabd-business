import React from 'react';
import '../css/DidYouKnow.css';
import didYouKnowImg from '../assets/did-you-know.png';

const DidYouKnow = () => {
    return (
        <section className="did-you-know-section">
            <div className="did-you-know-container">
                <div className="dyk-header">
                    <img src={didYouKnowImg} alt="Did You Know" className="dyk-graphic" />
                </div>

                <div className="dyk-info-box">
                    <div className="dyk-content">
                        <p>80% of hyderabad customers check a business online before buying.</p>
                        <p>mobile searches drive 70% of local leads.</p>
                        <p>60% of smbs in telangana lose customers due to poor website design.</p>
                    </div>

                    <button className="dyk-audit-button">
                        request your free website audit
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DidYouKnow;
