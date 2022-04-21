import { User } from "../../model/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IComputersRepository } from "../../repositories/IComputersRepository";
import { IAddComputerToUserDTO } from "./IAddComputerToUserDTO";
import { Computer } from "../../model/entities/Computer";
import { UserFromEntity } from "../../utils/UserFromEntity";
import { IUser } from "../../interfaces/IUser";
import { IComputer } from "../../interfaces/IComputer";
import { ComputerFromEntity } from "../../utils/ComputerFromEntity";

export class AddComputerToUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private computersRepository: IComputersRepository
  ) {}

  async execute(pcToUserDTO: IAddComputerToUserDTO): Promise<void> {
    const { userId, hostname } = pcToUserDTO;

    const userEnt: IUser | undefined = await this.usersRepository.findById(
      userId
    );
    if (!userEnt) {
      throw new Error(`User not exists!`);
    }

    const computerEnt: IComputer | undefined =
      await this.computersRepository.findByHostname(hostname);
    if (!computerEnt) {
      throw new Error(`Computer not exists!`);
    }

    const user: User = UserFromEntity.of(userEnt);

    const computer: Computer = ComputerFromEntity.of(computerEnt);

    user.addComputer(computer);

    this.usersRepository.update(user);
  }
}
