import { IUser } from "../../interfaces/IUser";
import { User } from "../../model/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAddUserDTO } from "./IAddUserDTO";

export class AddUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userDTO: IAddUserDTO): Promise<User> {
    const { id, name } = userDTO;

    if (id) {
      const userThatExists: IUser | undefined =
        await this.usersRepository.findById(id!);

      if (userThatExists) {
        throw new Error(`User already exists!`);
      }
    }

    const user = new User(name, id);

    await this.usersRepository.add(user);

    return user;
  }
}
