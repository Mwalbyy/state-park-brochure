import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import React from 'react'
import { QUERY_POSTS } from '../../../utils/queries'
import './style/Posts.css'

export default function Posts() {
  const {loading, data } = useQuery(QUERY_POSTS, {
    fetchPolicy: 'no-cache'
  })

  const postList = data?.post || [];

  return (
    <div className='container'>
      <h1 className='posth1'>Posts</h1>
      <button className='addBtn'>Add Post</button>
      <div className="card-body m-5">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul className='square'>
              {postList.map((post) => {
                return (
                  <li key={post._id}>
                    <Link to={{ pathname: `/post/${[post._id]}`}}>
                      {post}
                    </Link>
                  </li>
                )
              })} </ul>
          )}
      </div>
        
          
        


    </div>
    
  )
}
