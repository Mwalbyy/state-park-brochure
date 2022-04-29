import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
query getAllPosts {
  posts {
    _id
    postText
    postAuthor
    imageTag
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

export const QUERY_SINGLE_POST = gql`
query getPost($postId: ID!) {
  post(postId: $postId) {
    _id
    postText
    postAuthor
    imageTag
    createdAt
    comments {
      _id
      commentAuthor
      commentText
      createdAt
    }
  }
}
`

export const QUERY_USER = gql`
query user($username: String) {
  user(username: $username) {
    _id
    username
    email
    password
    posts {
      _id
      postText
      postAuthor
      imageTag
      createdAt
    }
  }
}`

export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
    password
    posts {
      _id
      postText
      postAuthor
      imageTag
      createdAt
    }
  }
}
`;