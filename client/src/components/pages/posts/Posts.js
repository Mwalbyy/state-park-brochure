import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import React from 'react'
import { QUERY_POSTS } from '../../../utils/queries'
import './style/Posts.css'
import Navbar from "../../Navbar"

const Posts = () => {
  const { loading, data } = useQuery(QUERY_POSTS, {
    fetchPolicy: 'no-cache'
  });

  const postList = data?.posts || [];
  console.log(postList);
  console.log(data);

  return (
    <>
    <Navbar/>
    <div className='container'>
      <h1 className='posth1'>Welcome to the Posts Page</h1>
      <button className='addBtn'>Add Post</button>
      <div className="card-body m-5">
        <h2>Here is a list of all available posts</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul className='square'>
              {postList.map((post) => {
                return (
                  <li className='postList' key={post._id}>
                    {post.postText}
                     <br></br>
                     <br></br> 
                     By: {post.postAuthor}
                  </li>
                )
              })} 
              </ul>
          )}
      </div>
        
          
        


    </div>
    </>
    
  )
}

export default Posts;