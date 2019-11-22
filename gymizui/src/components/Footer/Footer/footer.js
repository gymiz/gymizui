import React, { Component } from 'react';
import {connect} from 'react-redux';
import PlayStore from '../../../assets/images/google-play-badge/128x128.png'
import AppStore from '../../../assets/images/app-store-badge/128x128.png'
import '../style.css'
import SubFooter from '../SubFooter/subfooter';

class Footer extends Component {
  render() {
    return (
    <div className="footer">  
    <div className="container footer-inner">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-item clearfix">
                    <p>Download GYMIZ app for exciting offers.</p>
                        <img src={PlayStore} alt="playstore" />
                        <img src={AppStore} alt="appstore" />
                    
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-item">
                    <h4>Contact Us</h4>
                    <ul className="contact-info">
                        <li>
                            <i className="fa fa-map-marker"></i>20/F Green Road, Bangalore, India
                        </li>
                        <li>
                            <i className="fa fa-envelope"></i><a href="mailto:sales@gymiz.com">info@gymiz.com</a>
                        </li>
                        <li>
                            <i className="fa fa-phone"></i><a href="tel:+55-417-634-7071">+0477 85X6 552</a>
                        </li>
                        <li>
                            <i className="fa fa-fax"></i>+0477 85X6 552
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                <div class="footer-item">
                    <h4>Useful Links</h4>
                    <ul class="links">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="about.html">About Us</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact Us</a>
                        </li>
                        <li>
                            <a href="listing-single.html">Add Listing</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="footer-item clearfix">
                    <h4>Subscribe</h4>
                    <div className="Subscribe-box">
                        <p>Subscribe to our Channel to get latest news and offers.</p>
                        <form className="form-inline" action="#" method="GET">
                            <input type="text" className="form-control mb-sm-0" id="inlineFormInputName3" placeholder="Email Address" />
                            <button type="submit" className="btn"><i className="fa fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <SubFooter />
    </div>
);
}
}

export default Footer;