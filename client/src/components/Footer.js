import React from "react";
import "./Footer.css";
import footerLogo from "../assets/footerlogo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer__left">
        <img className="footer__logo" src={footerLogo} />
        <div className="bank__cards">
          <i class="fab fa-cc-visa"></i>
          <i class="fab fa-cc-mastercard"></i>
          <i class="fab fa-cc-amex"></i>
          <i class="fab fa-cc-paypal"></i>
        </div>
      </div>
      <div className="footer__center">
        <ul className="company__ul">
          <li className="company__li">
            {" "}
            <h3>კომპანია</h3>{" "}
          </li>
          <li className="company__li">
            <a href="#">ჩვენს შესახებ</a>
          </li>
          <li className="company__li">
            <a href="#">სიახლეები</a>
          </li>
          <li className="company__li">
            <a href="#">აფთიაქები</a>
          </li>
          <li className="company__li">
            <a href="#">კლინიკები</a>
          </li>
        </ul>
        <ul className="info__ul">
          <li className="info__li">
            <h3>ინფორმაცია</h3>
          </li>
          <li className="info__li">
            <a href="#">საბონუსე სისტემა</a>
          </li>
          <li className="info__li">
            <a href="#">მონაცემთა ბაზა</a>
          </li>
          <li className="info__li">
            <a href="#">ფასების რეესტრი</a>
          </li>
        </ul>
        <ul className="help__ul">
          <li className="help__li">
            <h3>დახმარება</h3>
          </li>
          <li className="help__li">
            <a href="#">დაბრუნება</a>
          </li>
          <li className="help__li">
            <a href="#">შეკვეთის გაფორმება</a>
          </li>
          <li className="help__li">
            <a href="#">შეკვეთის გადახდა</a>
          </li>
          <li className="help__li">
            <a href="#">მომსახურების წესები</a>
          </li>
        </ul>
      </div>
      <div className="footer__right center">
        <i class="fab fa-rocketchat"></i>
        <p>ონლაონ დახმარება</p>
      </div>
    </footer>
  );
}

export default Footer;
