const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema ({
  postText: {
    type: String,
    required: 'You need to create a post',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  postImage: {
    type: String,
    required: 'You must include an image',
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }
  ]
});

const Post = model('Post', postSchema);

module.exports = Post