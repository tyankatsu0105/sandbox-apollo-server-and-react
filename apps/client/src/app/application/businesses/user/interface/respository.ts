import * as Entity from '../entity';

export interface UsersRepository {
  toEntityUsers: Entity.User[] | null;
}
