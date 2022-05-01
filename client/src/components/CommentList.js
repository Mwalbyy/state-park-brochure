import React from "react";
import Card from "react-bootstrap/Card";

function CommentList({ comments }) {
  return (
    <div className="commentBox pt-3">
      {comments &&
        comments.map((comment) => (
          <>
            <div key={comment._id}>
            </div>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{comment.commentAuthor}</Card.Title>
                <Card.Text>
                {comment.commentText}
                </Card.Text>
              </Card.Body>
            </Card>
          </>
        ))}
    </div>
  );
}

export default CommentList;
