import * as Entity from '../entity';

export interface UserRepository {
  toEntityUser: Entity.User | null;
}
