import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';



import { QUERY_USER, QUERY_ME } from '../../../utils/queries';

import Auth from '../../../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();
  console.log("userParam", userParam)

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });
  console.log("data", data)


  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Auth.loggedIn()) {
    console.log(data);
    return (
      <>
        <h4>
          You need to be logged in to see this. Use the navigation links above to
          sign up or log in!
        </h4>
      </>
    );
  }

  const postList = user?.posts || [];
  
  return (
    <>
    <div>
      <div className="flex-row justify-center mb-3">
        <h3>

          Viewing {Auth.getProfile().data.username}'s profile.
          
        </h3>
        {console.log(Auth.getProfile().data)}

        <div className="col-12 col-md-10 mb-5">
          {user.username}
          
            <ul className='square'>
            {postList.map((post) => {
              return (
              <li className='postList' key={post._id}>
                {console.log(post._id)}
                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/post/${post._id}`}>
                      <img src={post.imageTag} alt="user uploaded"/>
                      {post.postText}
                      {console.log(post.postText)}
                      <br></br>
                      <br></br> 
                      
                      </Link>
                      By: {post.postAuthor}
              </li>
            )
          })}
          </ul>
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Profile;
