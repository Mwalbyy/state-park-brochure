import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_COMMENT } from '../utils/mutations';
import Auth from '../utils/auth';



function WriteComment({ handleShow, postId }) {
    const [comments, setComments] = useState('')
    const [addComment, {error}] = useMutation(ADD_COMMENT);
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
    try{
        const {data} = await addComment({
            variables: {
                postId, 
                commentText,
                commentAuthor: Auth.getProfile().data.username,
            }
        });

        setComments('');
    } catch(err){
        console.error(err);
    }}
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'commentText' && value.length <= 280) {
          setCommentText(value);
        }
      };

    return (
      <div className="commentForm">
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="commentHeader fs-2">Comments</Form.Label>
            <Form.Control type="comment" placeholder="Enter comment" />
          </Form.Group>
  
          {/* Add Comment Btn */}
          <Button variant="primary" type='submit' onClick={handleFormSubmit}>
            Add Comment
          </Button>
        </Form>
      </div>
    );
    
  }