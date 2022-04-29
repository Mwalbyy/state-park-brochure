import { React, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import forest from "./home/images/definitlyNJ.jpg";
import Auth from "../../utils/auth";

export default function SinglePost() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
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
              <Card.Img variant="top" src={forest} />
              <Card.Body className="text-center">
                <Card.Title>Post Title</Card.Title>
                <Card.Text>Post Description</Card.Text>
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
          <div className="commentBox pt-3">
            <Card style={{ width: "20rem" }}>
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

            {/* Posted Comments Box */}
            <Card style={{ width: "20rem", marginTop: "10px" }}>
              <Card.Body>
                <Card.Title>Nick</Card.Title>
                <Card.Text>Great post here!</Card.Text>

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

            {/* Posted Comments Box */}
            <Card style={{ width: "20rem", marginTop: "10px" }}>
              <Card.Body>
                <Card.Title>Blake</Card.Title>
                <Card.Text>Some good stuff we've got right here</Card.Text>

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
        </div>
      </div>
    </>
  );
}

function undefined({ handleShow, show, handleClose }) {
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
        <Button variant="primary" onClick={handleShow}>
          Add Comment
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>Add Comment</Modal.Header>

          {/* Edit Post TextArea */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
      </Form>
    </div>
  );
}

function WriteComment({ handleShow, show, handleClose }) {
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
        <Button variant="primary" onClick={handleShow}>
          Add Comment
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>Add Comment</Modal.Header>

          {/* Edit Post TextArea */}
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
      </Form>
    </div>
  );
}
