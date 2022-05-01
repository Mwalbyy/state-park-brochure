import { React, useState } from "react";
import Card from "react-bootstrap/Card";
import forest from "./home/images/definitlyNJ.jpg";
import Auth from "../../utils/auth";
import WriteComment from "../WriteComment";
import CommentList from "../CommentList";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_POST } from "../../utils/queries";

export default function SinglePost() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    variables: { postId: id },
  });

  const singlePost = data?.post || [];
  console.log(singlePost);
  const comments = data?.post.comments || []
  console.log(comments);

  return (
    <>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <>
          <div
            style={{
              height: "100vh",
              backgroundImage: `linear-gradient(to bottom, transparent,90%, #162529), url(${forest})`,
              backgroundSize: "cover",
            }}
          >
            {/* Single Post Card */}
            <div className="singlePost">
              <div className="pt-3">
                <Card style={{ width: "22rem" }}>
                  <Card.Img variant="top" src={singlePost.imageTag} />
                  <Card.Body className="text-center">
                    <Card.Title>{singlePost.postAuthor}</Card.Title>
                    <Card.Text>{singlePost.postText}</Card.Text>
                  </Card.Body>
                </Card>

                {/* Comment Form */}
                {Auth.loggedIn() ? (
                  <>
                    <WriteComment
                      handleShow={handleShow}
                      show={show}
                      handleClose={handleClose}
                    />
                  </>
                ) : (
                  <>
                    <h1 className="whiteText">Sign In to comment</h1>
                  </>
                )}
              </div>

              {/* Posted Comments Box */}
              {/* Comment LIST */}
              <CommentList
                comments={comments}
                handleShow={handleShow}
                show={show}
                handleClose={handleClose}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

