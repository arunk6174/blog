import React, { useEffect, useState } from 'react';
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog.json';
/**
* @author
* @function Blogpost
**/

const Blogpost = (props) => {
    const [post, setPost] = useState({
        id:"",
        blogCategory:"",
        blogTitle:"",
        postedOn:"",
        author:"",
        blogImage:"",
        blogText:""
    });
    const [slug , setSlug] = useState("");

    useEffect(() => {
        const slug = props.match.params.slug;
        const post = blogPost.data.find(post => post.slug === slug);
 
        setPost(post);
        setSlug(slug);
    },[post, props.match.params.slug]);
    
    if(post.blogImage === "") return null;


  return(
      <div className = "blogPostContainer">
      <Card>
        <div className = "blogHeader">
            <h1 className = "blogCategory">{post.blogCategory}  </h1>
            <h1 className = "postTitle">{post.blogTitle}  </h1>
            <h1 className = "postedBy">posted on {post.postedOn} by {post.author} </h1>
        </div>
        <div className = "postimageContainer">
            <img src = { require('../../blogPostImages/affection-baby-baby-girl-beautiful-377058.jpg')+ post.blogImage} alt = "Post Images" />
        </div>
        <div>
            <h3>{post.blogTitle}  </h3>
            <p>{post.blogText}</p>
        </div>

      </Card>

      </div>
   )

 }

export default Blogpost;