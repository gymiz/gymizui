import React from 'react';
import SideNav from './SideNav';
import Content from './Content';
import HelplineBar from '../../ServiceDesk/HelplineBar';


const Dashboard = () => {
    return (
<div class="dashboard">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3 col-md-12 col-sm-12 col-pad sideNav">
            <SideNav />
            </div>
            <div class="col-lg-9 col-md-12 col-sm-12 col-pad">
               <Content />
            </div>
        </div>
      
      </div>
      </div>  
        )
    }
    
    export default Dashboard;