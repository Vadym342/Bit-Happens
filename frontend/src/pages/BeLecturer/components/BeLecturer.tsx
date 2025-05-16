import React, { useEffect } from 'react';
import './FluxionTeach.css';

import buildIcon from '../../../assets/Build.jpg';
import inspireIcon from '../../../assets/inspire.jpg';
import getPaidIcon from '../../../assets/GetPaid.jpg';
import teachIcon from '../../../assets/teach.png';

const faqs = [
  {
    q: 'Who can teach on Fluxion?',
    a: 'Anyone with passion and knowledge—professionals, enthusiasts or hobbyists.',
  },
  {
    q: 'What type of course can I post?',
    a: 'Illustration, design, photography, CGI, VFX and more—your creativity sets the limits.',
  },
  {
    q: 'Course specifications?',
    a: 'Video: MP4, min 1920×1080; Cover: 916×515px; Audio 128kbps+.',
  },
  {
    q: 'Review process?',
    a: 'All submissions are quality-checked by our staff before publishing.',
  },
];

const BeATeacher: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="teach-container">
        <section className="hero">
          <div className="hero-text">
            <h1>Teach and Sell Your Course On Fluxion</h1>
            <p>Publish your first course with our easy class upload tool</p>
            <button className="start-button">Start A Course</button>
          </div>
          <div className="hero-image">
            <img src={teachIcon} alt="Teach Illustration" />
          </div>
        </section>

        <section className="benefits">
          <h2>Fluxion enables you to:</h2>
          <div className="benefit-list">
            <div className="benefit">
              <img src={getPaidIcon} alt="Money Icon" />
              <p>Get paid for what you created</p>
            </div>
            <div className="benefit">
              <img src={inspireIcon} alt="Inspiration Icon" />
              <p>Inspire members from all over the world</p>
            </div>
            <div className="benefit">
              <img src={buildIcon} alt="Influence Icon" />
              <p>Build up your influence beyond and grow your followings</p>
            </div>
          </div>
        </section>

        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((item, index) => (
              <details key={index} className="faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BeATeacher;
