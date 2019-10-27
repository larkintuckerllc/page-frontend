import { useQuery } from '@apollo/react-hooks';
import React, { FC, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Book, BooksData, BOOKS } from '../graphql/books';
import { getPageError } from '../store/ducks/pageError';
import { getPageLoading } from '../store/ducks/pageLoading';

const bookSort = (a: Book, b: Book): number => {
  if (a.id < b.id) {
    return -1;
  }
  if (a.id > b.id) {
    return 1;
  }
  return 0;
};

const Books: FC = () => {
  const pageError = useSelector(getPageError);
  const pageLoading = useSelector(getPageLoading);
  const { data, refetch } = useQuery<BooksData>(BOOKS);
  const handleClick = useCallback(() => {
    refetch();
  }, [refetch]);
  if (pageLoading) return <p>Loading...</p>;
  if (pageError || data === undefined) return <p>Error :(</p>;
  const sortedBooks = data.books.sort(bookSort); // CANNOT USE USEMEMO HERE
  return (
    <div>
      <button onClick={handleClick} type="button">
        Refetch
      </button>
      {sortedBooks.map(({ author, id, title }) => (
        <div key={id} style={{ marginTop: 30 }}>
          <div>
            <b>author:</b>
            &nbsp;
            {author}
          </div>
          <div>
            <b>id:</b>
            &nbsp;
            {id}
          </div>
          <div>
            <b>title:</b>
            &nbsp;
            {title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Books;
