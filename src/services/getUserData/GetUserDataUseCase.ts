import { User } from "../../model/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUserDataUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<User | undefined> {
    const user = await this.usersRepository.findById(id);

    if (user === undefined) {
      throw new Error(`User not exists!`)
    }

    return user;
  }
}
