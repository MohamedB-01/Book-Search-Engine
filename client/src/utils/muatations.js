import { gql } from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) 
        {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) 
        {
            user {
                _id
                username
                email
                bookCount
                savedBooks {
                  authors
                  bookId
                  image
                  link
                  title
                  description
                }
              }
              token
            }
          }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($addedBook: bookInput!) {
        saveBook (addedBook: $addedBook) 
        {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                image
                description
                title
                link
            }
        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId: $bookId)
        {
            _id
            username
            email
            savedBooks {
                bookId
                authors
                image
                description
                title
                link
            }
        }
    }
`;