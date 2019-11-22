import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import Logo  from '../../../../src/logo.png'; 
import myDP from '../../../assets/images/mydp.jpg'
import './style.css';
import 'antd/dist/antd.css';

class NavBar extends Component {

    constructor(props) {
        super(props); 
        this.handleMenuClick = this.handleMenuClick.bind(this);      
    }
    handleMenuClick(props) {   
          this.props.onLogout(); 
      }

  render() {
    let menuItems;
    console.log(this.props.currentUser);
        if(this.props.currentUser) {
          menuItems = [
            <div className="navbar-buttons ml-auto d-xl-block d-lg-block ">
            <ul className="navbar-nav header-ml">
                <li className="nav-item dropdown">
                    <div className="dropdown btns">
                        <a className="dropdown-toggle" data-toggle="dropdown">
                            <img src={ myDP } alt="my avatar" />{this.props.currentUser.firstName} @{this.props.currentUser.username}</a>
                            
                        <div className="dropdown-menu"> 
                            <NavLink to={`/users/${this.props.currentUser.username}`} className='dropdown-item'>Dashboard
                            </NavLink>
                            <a onClick={this.handleMenuClick} className="dropdown-item" >Logout</a>
                        </div>
                      
                    </div>
                </li>
                
            </ul>
        </div> 
          ]; 
        } else {
          menuItems = [
            <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">
                        <NavLink to='/login' className="nav-link">
                            <i className="fa fa-user" aria-hidden="true"></i>Login / Signup
                        </NavLink>
                    </li>
            </ul>  
          ];
        }

    return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand logo logofont" href="index.html">
                <img src={Logo} alt="Gymiz" />
            </a>
            <a className="logofont" href="index.html" >GymIZ</a>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav header-ml">
                   
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Explore Gyms
                        </a>
                        
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Membership Plans
                        </a>
                       
                    </li>
                  
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Help
                        </a>
                       
                    </li>
                </ul>
              {menuItems}
                </div>
        </nav>
    </div>
    );
  }
}

export default NavBar;
