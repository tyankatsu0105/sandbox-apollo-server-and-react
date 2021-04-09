import * as Entity from './entity';

export const isNonNullableBooks = (
  books: NonNullable<NonNullable<Entity.User['favorites']>['books']>
): books is string[] => books.every((v) => v !== null);
