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
    mutation saveBook($authors: [String]!, $bookId: String!, $description: String!, $title: String!, $image: String!, $link: String!) {
        saveBook (authors: $authors, bookId: $bookId, description: $description, title: $title, image: $imag, link: $link) 
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
    mutation deleteBook($bookId: ID!) {
        deleteBook(bookId: $bookId)
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