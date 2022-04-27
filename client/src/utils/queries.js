import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
query getAllPosts {
    posts {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentAuthor
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_USER = gql`
query getUser($username: String) {
  user(username: $username) {
    _id
    username
    email
    password
  }
}`

export const QUERY_ME = gql`
query Query {
  me {
    _id
    username
    email
    password
    posts {
      _id
      postText
      postAuthor
      createdAt
    }
  }
}
`;