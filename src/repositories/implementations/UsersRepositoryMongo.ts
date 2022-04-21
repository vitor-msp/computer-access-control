import { UserModel } from "../../database/schemas/UserSchema";
import { User } from "../../model/entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryMongo implements IUsersRepository {
  async findById(id: string): Promise<User | undefined> {
    const user: User | null = await UserModel.findOne({ id });
    return user ?? undefined;
  }

  async add(user: User): Promise<void> {
    await UserModel.create({
      id: user.getId(),
      name: user.getName(),
    });
  }

  async update(user: User): Promise<void> {
    await UserModel.findByIdAndUpdate(user.getId(), {
      $set: { name: user.getName() },
    });
  }
}

export const usersRepositoryMongo: UsersRepositoryMongo =
  new UsersRepositoryMongo();
