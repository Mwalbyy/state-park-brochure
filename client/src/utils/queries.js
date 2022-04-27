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