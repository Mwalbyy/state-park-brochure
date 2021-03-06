const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find().populate('posts');
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username }).populate('posts');
    },
    posts: async () => {
      return await Post.find().sort({ createdAt: -1 });
    },
    post: async (parent, { postId }) => {
      return await Post.findOne({ _id: postId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPost: async (parent, { postText, postAuthor, imageTag }) => {
      const post = await Post.create({ postText, postAuthor, imageTag });

      await User.findOneAndUpdate(
        { username: postAuthor },
        { $addToSet: { posts: post._id } }
      );

      return post;
    },
    addComment: async (parent, { postId, commentAuthor, commentText }) => {
      await Post.findOneAndUpdate(
        { _id: postId },
        {
          $addToSet: { comments: { commentAuthor, commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removePost: async (parent, { postId }) => {
      return Post.findOneAndDelete({ _id: postId });
    },
    removeComment: async (parent, { postId, commentId }) => {
      return Post.findOneAndUpdate(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
    updatePost: async (parent, {postId, postText}) => {
      return await Post.findOneAndUpdate(
        { _id: postId },
        { postText: postText },
        { new: true }
      )
    },
    // Update Comment Code iceboxed
    // updateComment: async(parent, {postId, commentId, commentText}) => {
    //   return await Post.findOneAndUpdate(
    //     { _id: postId },
    //     { }
    //   )
    // }
  },
};

module.exports = resolvers;
