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
        postImage: String
        createdAt: String
        comments: [Comment]!
    }

    type Comment {
        _id: ID
        commentText: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String): [Thought]
        user(username: String): [Comment]
        thought(thoughtId: ID!): Thought
        comment(commentId: ID!): Comment
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addPost(postText: String!, postImage: String!): Thought
        addComment(
            postId: ID!
            commentText: String!
        ): Post
        removePost(postId: ID!): Post
        removeComment(postId: ID!, commentId ID!): Thought 
    }
`

module.exports = typeDefs;