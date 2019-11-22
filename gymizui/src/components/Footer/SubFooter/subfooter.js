import React, { Component } from 'react';
import '../style.css'

class SubFooter extends Component {
  render() {
    return (
<div className="sub-footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-md-8">
                <p className="copy">© 2019-2021 <a href="#">Gymiz Private Limited.</a> Trademarks and brands are the property of their respective owners.</p>
            </div>
            <div className="col-lg-4 col-md-4">
                <ul className="social-list clearfix">
                    <li><a href="#" className="facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" className="twitter"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" className="google"><i className="fa fa-google-plus"></i></a></li>
                    <li><a href="#" className="rss"><i className="fa fa-rss"></i></a></li>
                    <li><a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
);
}
}

export default SubFooter;