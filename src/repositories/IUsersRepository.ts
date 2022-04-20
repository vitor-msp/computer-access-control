import { User } from "../model/entities/User";

export interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;

  add(user: User): Promise<void>;

  update(user: User): Promise<void>;
}
