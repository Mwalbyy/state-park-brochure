import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_POSTS } from "../../../utils/queries";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import test from "../home/images/history1.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Posts = () => {
  const { loading, data } = useQuery(QUERY_POSTS, {
    fetchPolicy: "no-cache",
  });

  const postList = data?.posts || [];

  return (
    <>
      <Parallax pages={4} style={{ backgroundColor: "#162529" }}>
        <ParallaxLayer speed={0.5}>
          <h1 className="heading F-3">Views of the Palisades</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1} factor={0} className="center ">
          <Link to={`/singlePost/1`}>
            <Image src={test} className="img-fluid imgSize" />
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1} factor={0} className="center ">
          <Link to={`/singlePost/1`}>
            <Image src={test} className="img-fluid imgSize" />
          </Link>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Posts;
// <div className="postPageCont">
//   <h1 className="postsHeader F-2" style={{color: 'white'}}>Views of the palisades</h1>
//   {/* <button className="addBtn">Add Post</button> */}
//   <div className="card-body m-5">
//     {loading ? (
//       <div>Loading...</div>
//     ) : (
//       <div className="postsContainer">
//         <Image src={test} className="img-fluid" />
//         <Image src={test} className="img-fluid" />
//         <Image src={test} className="img-fluid" />
//         <Image src={test} className="img-fluid" />
//       </div>
//     )}
//   </div>
// </div>

// TODO: This is being refactored above, This code goes after ") : ("
// <ul className="square">
//               {postList.map((post) => {
//                 return (
//                   <li className="postList" key={post._id}>
//                     <Link
//                       style={{ textDecoration: "none", color: "white" }}
//                       to={`/post/${post._id}`}
//                     >
//                       {post.postText}
//                       <br></br>
//                       <br></br>
//                     </Link>
//                     By: {post.postAuthor}
//                   </li>
//                 );
//               })}
//             </ul>
