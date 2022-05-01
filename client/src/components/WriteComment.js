import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_COMMENT } from "../utils/mutations";
import Auth from "../utils/auth";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function WriteComment({ postId }) {
  const [comments, setComments] = useState("");

  const [addComment, { error }] = useMutation(ADD_COMMENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addComment({
        variables: {
          postId,
          comments,
          commentAuthor: Auth.getProfile().data.username,
        },
      });

      setComments("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "comments" && value.length <= 280) {
      setComments(value);
    }
  };

  return (
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
          
            placeholder="Enter comment"
            value={comments}
            onChange={handleChange}
          />
            <Form.Text></Form.Text>
          
        </Form.Group>

        {/* Add Comment Btn */}
        <Button variant="primary" type="submit">
          Add Comment
        </Button>
      </Form>
    </div>
  );
}
export default WriteComment;
