import * as React from 'react';

import * as Entity from '~client/app/application/businesses/user/entity';

import * as Components from '../../components';

// ------------------------------------
// Props
// ------------------------------------
type Props = {
  user: Entity.User;
};

// ------------------------------------
// Component
// ------------------------------------

export const Component = (props: Props) => (
  <Components.Card.Component
    body={
      <div>
        <ul>
          <li>誕生日{props.user.birthDay}</li>
          <li>
            <ul>
              book
              {props.user.favorites?.books?.map((book) => (
                <li key={book}>{book}</li>
              ))}
            </ul>
          </li>
          <li>
            <ul>
              movie
              {props.user.favorites?.movies?.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </li>
          <li>
            <ul>
              music
              {props.user.favorites?.musics?.map((music) => (
                <li key={music}>{music}</li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    }
    footer={<div>ユーザー作成日{props.user.createdAt}</div>}
    header={<div>{props.user.name}</div>}
  />
);
