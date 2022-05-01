import React from 'react';


function CommentList({comments, commentAuthor, commentText}) {
    return (
      <div className="commentBox pt-3">\
      {comments && 
      comments.map((comment) => (
        <div key={comment._id}>
        <h1>{comment.commentText}</h1>
        </div>
      ))}
      </div>
    );
  }
  
  export default CommentList;
