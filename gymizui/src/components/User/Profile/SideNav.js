import React, { Component } from 'react';
import { Route, NavLink, Link, withRouter } from 'react-router-dom';
import './style.css'
import Content from './Content';

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItem: null
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        
      }
    
      handleMenuClick = (menuItemClicked) => {
          console.log(menuItemClicked);
        this.setState({menuItem: menuItemClicked});
      }

  render() {
    return (
                <div class="dashboard-nav d-xl-block d-lg-block">
                    <div class="dashboard-inner">
                        <h4>Main</h4>
                        <ul>
                            <li><a href="#"><i class="fa fa-dashboard"></i> Dashboard</a></li>
                            <li><a href="#"><i class="fa fa-envelope"></i> Notifications <span class="nav-tag">6</span></a></li>
                            <li><a href="#"><i class="fa fa-calendar"></i> Membership</a></li>
                        </ul>
                        <h4>Workout Manager</h4>
                        <ul>
                            <li><a href="#"><i class="fa fa-heartbeat"></i> Health Report</a></li>
                            <li><a href="#"><i class="fa fa-bullseye"></i> Workout Goal</a></li>
                            <li><a href="#"><i class="fa fa-pie-chart"></i> Workout History</a></li>
                        </ul>
                        <h4>Account</h4>
                        <ul>
                            <li class="active"><NavLink to='/User/Profile/Content'> <i className="fa fa-user"></i> My Profile</NavLink></li>
                            <li> <NavLink><div onClick={() => this.handleMenuClick('address')} > <i className="fa fa-map-marker"></i> Manage Address </div></NavLink></li>
                            <li><NavLink><div onClick={() => this.handleMenuClick('resetPswd')} > <i className="fa fa-eye fa"></i> Change Password</div></NavLink></li>
                            <li><a href="#"><i class="fa fa-sign-out"></i> Logout</a></li>
                        </ul>
                    </div>
                </div>
            );
        }
        }
        
        export default SideNav;