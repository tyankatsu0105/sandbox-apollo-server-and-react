import * as React from 'react';
import styled from 'styled-components';

import * as Entity from '~client/app/application/businesses/user/entity';

import * as Components from '../../components';

// ------------------------------------
// Props
// ------------------------------------

type Props = {
  books: Entity.Book[];
  movies: Entity.Music[];
  musics: Entity.Movie[];
  user: Entity.User;
};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => (
  <StyledWrap>
    <Components.Card.Component
      body={
        <div>
          <ul>
            <li>誕生日{props.user.birthDay}</li>
            <li>
              <ul>
                book
                {props.books.map((book) => (
                  <li key={book.id}>{book.name}</li>
                ))}
              </ul>
            </li>
            <li>
              <ul>
                movie
                {props.movies.map((movie) => (
                  <li key={movie.id}>{movie.name}</li>
                ))}
              </ul>
            </li>
            <li>
              <ul>
                music
                {props.musics.map((music) => (
                  <li key={music.id}>{music.name}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      }
      footer={<div>ユーザー作成日{props.user.createdAt}</div>}
      header={<div>{props.user.name}</div>}
    />
  </StyledWrap>
);

// ------------------------------------
// Styles
// ------------------------------------

const StyledWrap = styled.div`
  padding: 20px;
`;
