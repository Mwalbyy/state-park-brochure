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