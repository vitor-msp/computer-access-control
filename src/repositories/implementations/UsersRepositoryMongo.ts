import { UserModel } from "../../database/schemas/UserSchema";
import { IUser } from "../../interfaces/IUser";
import { User } from "../../model/entities/User";
import { UserFromEntity } from "../../utils/UserFromEntity";
import { UserToEntity } from "../../utils/UserToEntity";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryMongo implements IUsersRepository {
  async findById(id: string): Promise<User | undefined> {
    const userEntity: IUser | null = await UserModel.findOne({ id });

    if (!userEntity) return undefined;

    return UserFromEntity.of(userEntity);
  }

  async add(user: User): Promise<void> {
    const userEntity: IUser = {
      id: user.getId(),
      name: user.getName(),
    };

    await UserModel.create(userEntity);
  }

  async update(user: User): Promise<void> {
    const userEntity: IUser = UserToEntity.of(user);

    await UserModel.updateOne({ id: user.getId() }, userEntity);
  }
}

export const usersRepositoryMongo: UsersRepositoryMongo =
  new UsersRepositoryMongo();
