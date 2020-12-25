import React from 'react'
import Blogpost from '../../components/Blogpost'
import Layout from '../../components/Layout'
import './style.css'

/**
* @author
* @function Post
**/

const Post = (props) => {

  return(
    <Layout>
      <Blogpost {...props}/>
    </Layout>
   )

 }

export default Post;