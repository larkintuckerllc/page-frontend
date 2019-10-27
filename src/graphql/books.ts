import gql from 'graphql-tag';

export interface Book {
  author: string;
  id: string;
  title: string;
}

export interface BooksData {
  books: Book[];
}

interface BooksPage {
  books: Book[];
  count: number;
}

export interface BooksPageData {
  booksPage: BooksPage;
}

export const BOOKS = gql`
  query books {
    books {
      author
      id
      title
    }
  }
`;

export const BOOKS_PAGE = gql`
  query booksPage($offset: Int!, $first: Int!) {
    booksPage(input: { offset: $offset, first: $first }) {
      books {
        author
        id
        title
        __typename
      }
      count
    }
  }
`;
