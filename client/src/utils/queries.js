import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
    query posts {
        posts {
            _id
            postText
            postAuthor
            createdAt
        }
    }
`;