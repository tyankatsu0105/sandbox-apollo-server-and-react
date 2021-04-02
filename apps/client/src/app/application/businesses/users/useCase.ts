import * as Interface from './interface';

export class UsersUseCase implements Interface.UsersUseCase {
  constructor(public repository: Interface.UsersRepository) {}
}
