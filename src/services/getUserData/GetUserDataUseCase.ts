import { IUser } from "../../interfaces/IUser";
import { IUsersRepository } from "../../repositories/IUsersRepository";

export class GetUserDataUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<IUser | undefined> {
    const user: IUser | undefined = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error(`User not exists!`)
    }

    return user;
  }
}
