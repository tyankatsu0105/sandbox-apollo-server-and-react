import { users } from './User';
import { books } from './Book';
import { movies } from './Movie';
import { musics } from './Music';

export const implementedNodeList = [...users, ...books, ...movies, ...musics];

export type ImplementedNodeList = typeof implementedNodeList;
