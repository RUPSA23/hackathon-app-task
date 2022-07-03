import React from 'react';
import css from './Features.css'
import group1 from '../../assets/icons/Group 1000002515.svg';
import group2 from '../../assets/icons/Group 1000002516.svg';
import group3 from '../../assets/icons/Group 1000002518.svg';

const Features = () => {
    return (
        <section className="features-section">
            <div>
            <img src={group1} alt="" />
            <h1>100k+</h1>
            <p>AI model submissions</p>
            </div>

            <div>
            <img src={group2} alt="" />
                <h1>50k+</h1>
                <p>Data Scientists</p>
            </div>
            <div>
            <img src={group3} alt="" />
                <h1>100+</h1>
                <p>AI Challenges hosted</p>
            </div>
        </section>
    );
};

export default Features;