import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function SideBar
**/

const SideBar = (props) => {
    const [posts , setPostes] = useState([]);

    useEffect(() => {
        const posts = blogPost.data;
        setPostes(posts);     
    }, [posts]);

  return(
      <div className = "sideBarContainer" style = {{width:props.width}}>
         <Card >
         <div className = "cardHeader">
            <span>About Us</span>
         </div>
         <div className ="profileImageContainer">
           <img src="data:image/jpeg;base64,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" alt = "My Image" />
         </div>
         <div className = "cardBody">
            <p className="personalBio" >Apple CEO and a greate person</p>

         </div>

         </Card>
         <br></br>
         <Card >
         <div className = "cardHeader">
            <span>Socal Network</span>
         </div>

         </Card>
         <br></br>
         <Card>
         <div className = "cardHeader" >
             <span>Recent Posts</span>
         </div>

         <div className="recentPosts">
         { 
             posts.map(posts => {
                 return(
                     <NavLink key = {posts.id} to = {`/post/${posts.slug}`}>
                         <div>
                             <h3>{posts.blogTitle}</h3>
                             <span> {posts.postedOn} </span>
                         </div>
                     </NavLink>
                 );
             })
            
         }

         </div>

         </Card>

      </div>
   )

 }

export default SideBar;