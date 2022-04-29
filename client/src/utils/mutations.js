import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser
($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      _id
      username
      email
      password
      
    }
  }
}
  
`
export const LOGIN_USER = gql`
mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user{
        email
        password
      }
      token
    }
  }
  `

export const ADD_POST = gql`
mutation addPost($postText: String!, $postAuthor: String!, $iamgeTag: String!) {
  addPost(postText: $postText, postAuthor: $postAuthor, iamgeTag: $iamgeTag) {
    _id
    postText
    postAuthor
    imageTag
    createdAt
  }
}
`

export const ADD_COMMENT = gql`
mutation addComment($postId: ID!, $commentAuthor: String!, $commentText: String!) {
  addComment(postId: $postId, commentAuthor: $commentAuthor, commentText: $commentText) {
    _id
    commentAuthor
    commentText
    createdAt
  }
}
`

export const REMOVE_POST = gql`
mutation removePost($postId: ID!) {
  removePost(postId: $postId) {
    _id
  }
}
`

export const REMOVE_COMMENT = gql`
mutation removeComment($postId: ID!, $commentId: ID!) {
  removeComment(postId: $postId, commentId: $commentId) {
    _id
  }
}
`

export const UPDATE_POST = gql`
mutation updatePost($postId: ID!, $postText: String!) {
  updatePost(postId: $postId, postText: $postText) {
    _id
    postText
    postAuthor
    imageTag
    createdAt
  }
}
`