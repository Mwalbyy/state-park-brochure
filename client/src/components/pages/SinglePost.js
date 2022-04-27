import { React, useState } from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';
import forest from "./home/images/definitlyNJ.jpg";
import './singlepost.css'

// const deleteBtn = document.querySelector('.deleteBtn');
// async function deletePost(){
//   const data = await fetch (`/api/post/${postId}`, {
//     method: 'DELETE',
//     headers: { 'Content-Type': 'application/json' },
//   })
//   if (data.ok){
//     document.location.assign('/');
//   }
//   else {
//     console.log('ERROR')
//   }
// }
// deleteBtn.addEventListener('click', deletePost)


export default function SinglePost() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div style={{
      height: "100vh",
      backgroundImage: `linear-gradient(to bottom, transparent,90%, #162529), url(${forest})`,
      backgroundSize: "cover",
    }}>


      {/* Single Post Card */}
      <div className='singlePost'>
        <div className='pt-3'>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={forest} />
            <Card.Body className='text-center'>
              <Card.Title>Post Title</Card.Title>
              <Card.Text>
                Post Description
              </Card.Text>
              <Button className='deleteBtn' variant="primary" type="submit">
                Delete Post
              </Button>

              {/* Edit Post Modal */}
              <div className='editPostBtn'>
                <Button variant="primary" onClick={handleShow}>
                  Edit Post
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Post</Modal.Title>
                  </Modal.Header>

                  {/* Edit Post Textarea */}
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
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
              </div>

            </Card.Body>
          </Card>


          {/* Comment Form */}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='commentHeader text-center'>Comments</Form.Label>
              <Form.Control type="comment" placeholder="Enter email" />
            </Form.Group>
            <div className='commentBtn'>
              <Button variant="primary" type="button">
                Add Comment
              </Button>
            </div>
          </Form>
        </div>

        {/* Posted Comments */}
        <div className='commentBox pt-3'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Username</Card.Title>
              <Card.Text>
                Comment
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      </div>
    </div>

  )
}


