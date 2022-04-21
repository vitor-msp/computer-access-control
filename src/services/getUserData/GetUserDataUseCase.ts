import { User } from "../../model/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUserDataUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<User | undefined> {
    const user: User | undefined = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error(`User not exists!`)
    }

    return user;
  }
}
