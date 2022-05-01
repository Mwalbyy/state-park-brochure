import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from "../utils/mutations";
import Auth from "../utils/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function WriteComment({ postId }) {
  const [commentText, setCommentText] = useState("");

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addComment({
        variables: {
          postId,
          commentText,
          commentAuthor: Auth.getProfile().data.username,
        },
      });
      setCommentText("");
    } catch (err) {
console.log(Auth.getProfile().data.username)
console.log(postId)
console.log(commentText)

      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "commentText" && value.length <= 280) {
      setCommentText(value);
    }
  };

  return (
    <>
      <div className="commentForm">
        <Form
          onSubmit={handleFormSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="commentHeader fs-2">Comments</Form.Label>
            <Form.Control
              name="commentText"
              type="text"
              placeholder="Enter comment"
              value={commentText}
              onChange={handleChange}
            />
          </Form.Group>
          {console.log(commentText)}

          <Button variant="primary" type="submit">
            Add Comment
          </Button>
          {error && <div style={{ color: "red" }}>{error.message}</div>}
        </Form>
      </div>
    </>
  );
}

export default WriteComment;
