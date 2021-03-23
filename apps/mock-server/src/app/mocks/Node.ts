import { books } from './Book';
import { movies } from './Movie';
import { musics } from './Music';
import { users } from './User';

export const implementedNodeList = [...users, ...books, ...movies, ...musics];

export type ImplementedNodeList = typeof implementedNodeList;
