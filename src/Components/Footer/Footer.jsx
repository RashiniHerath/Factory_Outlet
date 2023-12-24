import React from "react";
import "./Footer.css";
import logoInstagram from '../Assets/logo-instagram.png';
import logoFacebook from '../Assets/logo-facebook.png';
import logoTwitter from '../Assets/logo-twitter.png';
import logoLinkedin from '../Assets/logo-linkedin.png';
import footerLogo from '../Assets/footer-logo.png';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-logo">
                <img src={footerLogo}alt=""/>
                <p>FACTORY OUTLET</p>
            </div>
            <ul className="footer-links">
                <li>Compnay</li>
                <li>Services</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={logoInstagram} alt="" />
                </div>
                <div className="footer-social-container">
                    <img src={logoFacebook} alt="" />
                </div>
                <div className="footer-social-container">
                    <img src={logoTwitter} alt="" />
                </div>
                <div className="footer-social-container">
                    <img src={logoLinkedin} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                   <hr />
                   <p>Copyright @ 2023 - All Rights Reserved</p>
            </div>
        
        </footer>
    );
};

export default Footer;




