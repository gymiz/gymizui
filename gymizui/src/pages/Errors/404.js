import React from 'react';
import NavBar from '../../components/Header/NavBar/NavBar';
import Footer from '../../components/Footer/Footer/footer';
import { NavLink, Link, withRouter } from 'react-router-dom';
import './style.css'


const PageNotFound = () => {
    return ( 
           <div  className="container">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1></h1>
                        <h2>Page not found</h2>
                    </div>
                    <NavLink to ='/' className="NavLink">Homepage</NavLink>
                </div>
            </div>
    )
}

export default PageNotFound;