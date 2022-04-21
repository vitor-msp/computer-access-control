import { UserModel } from "../../database/schemas/UserSchema";
import { IUser } from "../../interfaces/IUser";
import { User } from "../../model/entities/User";
import { UserToEntity } from "../../utils/UserToEntity";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryMongo implements IUsersRepository {
  async findById(id: string): Promise<IUser | undefined> {
    const userEntity: IUser | null = await UserModel.findOne({ id });

    if (!userEntity) return undefined;

    return userEntity;
  }

  async add(user: User): Promise<void> {
    const userEntity: IUser = UserToEntity.of(user);

    await UserModel.create(userEntity);
  }

  async update(user: User): Promise<void> {
    const userEntity: IUser = UserToEntity.of(user);

    await UserModel.updateOne({ id: userEntity.id }, userEntity);
  }
}

export const usersRepositoryMongo: UsersRepositoryMongo =
  new UsersRepositoryMongo();
