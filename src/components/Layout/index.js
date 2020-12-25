import React from 'react';
import './style.css';
import Sidebar from '../SideBar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
      <React.Fragment>
          <div className="container">
            {props.children}
            <Sidebar />
          </div>
          <hr></hr>
          <div className = "footer">
            <h1>This is the footer</h1>
          </div>
      </React.Fragment>
    
   )

 }

export default Layout;