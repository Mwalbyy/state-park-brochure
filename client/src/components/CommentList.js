import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import React from 'react';
import Card from "react-bootstrap/Card";

function CommentList({ handleShow, show, handleClose, comments, commentAuthor, commentText }) {
    return (
      <div className="commentBox pt-3">
        <Card
          style={{
            width: "20rem",
          }}
        >
          <Card.Body>
            <Card.Title>Marcus</Card.Title>
            <Card.Text>Love this forest</Card.Text>
  
            {/* Delete Comment Button */}
            <div className="commentBtns">
              <Button className="deleteBtn" variant="primary" type="submit">
                Delete Comment
              </Button>
  
              {/* Edit Comment Modal */}
              <Button variant="primary" onClick={handleShow}>
                Edit Comment
              </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Comment</Modal.Title>
              </Modal.Header>
  
              {/* Edit Post Textarea */}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
  
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default CommentList;
