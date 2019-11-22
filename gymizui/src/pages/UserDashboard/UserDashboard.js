import React from 'react';
import DashboardNav from '../../components/User/Profile/SideNav';
import ContentModel from '../../components/User/Profile/Content';
import UserProfile from '../../components/User/Profile/Profile'


const UserDashboard = () => {
    return (
<div class="dashboard">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-12 col-sm-12 col-pad">
                <DashboardNav /> 
            </div>
            <div class="col-lg-9 col-md-12 col-sm-12 col-pad">
                <ContentModel />
                <UserProfile  />
            </div>
        </div>
      </div>
      </div>  
        )
    }
    
    export default UserDashboard;