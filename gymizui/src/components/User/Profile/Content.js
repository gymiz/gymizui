import React, { Component } from 'react';
import './style.css'
import Profile from './Profile';
import ManageAddress from './Account/ManageAddress';
import ResetPswd from './Account/ResetPswd';

class Content extends Component {
        constructor(props) {
                super(props);
               
              } 

  render() {
    const {
      menuItem,
      ...props
  } = this.props;
        console.log(this.props.menuItem);
          return(
              <div className="content-area5 dashboard-content">  
                {(() => {
                   if (this.props.menuItem == "address") {
                        return ( <ManageAddress />)
                   }else if(this.props.menuItem == undefined){
                        return (<Profile  />)
                   }
                })()}
              </div>
          )
}
}

export default Content;