const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID
        username: String
        email: String
        password: String
        posts: [Post]!
    }

    type Post {
        _id: ID
        postText: String
        postAuthor: String
        postImage: String
        createdAt: String
        comments: [Comment]!
    }

    type Comment {
        _id: ID
        commentAuthor: String
        commentText: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String): [Post]
        user(username: String): [Comment]
        post(postId: ID!): Post
        comment(commentId: ID!): Comment
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPost(
            postText: String!, 
            postAuthor: String!
            postImage: String!
        ): Post
        addComment(
            postId: ID!
            commentAuthor: String!
            commentText: String!
        ): Post
        removePost(postId: ID!): Post
        removeComment(postId: ID!, commentId ID!): Post 
    }
`

module.exports = typeDefs;