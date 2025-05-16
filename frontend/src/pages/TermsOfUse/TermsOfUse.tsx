import React, { useEffect } from 'react';
import './TermsOfUse.css';

const TermsOfUse: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-container">
      <h1 className="terms-title">Terms of Use</h1>

      <section className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you agree to be bound by these Terms of Use and all applicable laws and
          regulations. If you do not agree, you are prohibited from using or accessing this site.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. Services Description</h2>
        <p>
          Our platform provides digital content, including educational videos, downloadable materials, and user accounts. Once
          content is downloaded, refunds will not be issued unless the service is unusable due to technical issues.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. User Responsibilities</h2>
        <ul>
          <li>Provide accurate registration information.</li>
          <li>Use the platform lawfully and respectfully.</li>
          <li>Do not share your account with others.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>4. Content Ownership</h2>
        <p>
          You retain rights to the content you upload, but you grant us a license to use, display, and promote your content within
          our platform.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Prohibited Activities</h2>
        <ul>
          <li>Distribute illegal, violent, or hateful content.</li>
          <li>Violate intellectual property rights.</li>
          <li>Upload spam or malware.</li>
        </ul>
      </section>

      <section className="terms-section">
        <h2>6. Privacy Policy</h2>
        <p>
          We collect necessary data such as device info and browsing behavior to improve your experience. For third-party logins,
          we collect your public profile data. You may request account deletion via our support email.
        </p>
      </section>

      <section className="terms-section">
        <h2>7. Disclaimer</h2>
        <p>We are not responsible for any direct or indirect losses from using our service. Use the content at your own risk.</p>
      </section>

      <section className="terms-section">
        <h2>8. Contact Us</h2>
        <p>
          If you have questions about these terms, please contact us at{' '}
          <a href="mailto:support@example.com">fluxionCG@gmail.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfUse;
