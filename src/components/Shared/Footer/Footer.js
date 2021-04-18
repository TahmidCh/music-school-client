import React from 'react';
import './Footer.css';
import FooterCol from './FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Find Us" },
        {name: "Latest News" },
        {name: "Lessons" },
        
    ]
    const ourAddress = [
        {name: "Noakhali, Bangladesh" , link: "//google.com/map"},
        {name: "Sonapur" , link: "//google.com/map"},
       
    ]
    const quickLinks = [
        {name: "About Us" },
        {name: "Events" },
        {name: "Blogs" },
        {name: "Contacts" },
        
    ]
    const PopularClasses = [
        {name: "Guitar" },
        {name: "Piano" },
        {name: "Drums" },
        {name: "Violine" },
        {name: "Vocal" },
        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="About Us" menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Popular" menuItems={PopularClasses}/>
                    <FooterCol key={3} menuTitle="Quick Links" menuItems= {quickLinks}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="">Call now</h6>
                            <button className="btn btn-danger ">+01309099256</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className='text-white'>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;