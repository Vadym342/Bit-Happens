import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import { MenuItems } from '../Navbar/MenuItems';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column">
          <h2 className="footer__logo">FLUXION</h2>
          <p className="footer__description">Learn from the best creators. Level up your skills anytime, anywhere.</p>
          <div className="footer__socials">
            <FaFacebook className="footer__icon" />
            <FaInstagram className="footer__icon" />
            <FaTwitter className="footer__icon" />
            <FaYoutube className="footer__icon" />
          </div>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">COURSE</h3>
          <ul className="footer__list">
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={`/courses?category=${item.categoryId}`}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">TEACH</h3>
          <ul className="footer__list">
            <li>
              <Link to="/be-lecturer">Be a Lecturer</Link>
            </li>
          </ul>
        </div>

        <div className="footer__column">
          <h3 className="footer__title">CONTACT US</h3>
          <ul className="footer__list">
            <li>
              <p>E-mail: fluxionCG@gmail.com</p>
            </li>
            <li>
              <p>Phone number: +38-066-323-1570</p>
            </li>
            <li>
              <Link to="/agree">Terms & Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">© 2025 FLUXION. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
