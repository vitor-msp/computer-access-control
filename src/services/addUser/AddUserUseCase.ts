import { User } from "../../model/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAddUserDTO } from "./IAddUserDTO";

export class AddUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(userDTO: IAddUserDTO): Promise<User> {
    const { name, id } = userDTO;
    const userThatExists = await this.usersRepository.findById(id!);

    if (userThatExists !== undefined) {
      throw new Error(`User already exists!`);
    }

    const user = new User(name);

    await this.usersRepository.add(user);

    return user;
  }
}
