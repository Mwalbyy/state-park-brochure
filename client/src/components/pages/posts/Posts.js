import { useQuery } from "@apollo/client";
import React from "react";
import { QUERY_POSTS } from "../../../utils/queries";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Posts = () => {
  const { loading, data } = useQuery(QUERY_POSTS, {
    fetchPolicy: "no-cache",
  });

  const postList = data?.posts || [];

  return (
    <Parallax pages={3} style={{ backgroundColor: "#162529" }}>
      <div className="postsContainer">
        {postList.map((post) => {
          return (
            <Link
              className="center"
              style={{ textDecoration: "none", color: "white" ,marginTop: '10px' }}
              to={`/singlePost/${post._id}`}
            >
              <Image src={post.imageTag} alt="Image of Post" />
              {post.postAuthor}
            </Link>
          );
        })}
      </div>
      <ParallaxLayer factor={.1} speed={0.5}>
        <h1 className="heading F-3">Views of the Palisades</h1>
      </ParallaxLayer>
    </Parallax>
  );
};
export default Posts;
