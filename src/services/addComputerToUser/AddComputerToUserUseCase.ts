import { User } from "../../model/entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IComputersRepository } from "../../repositories/IComputersRepository";
import { IAddComputerToUserDTO } from "./IAddComputerToUserDTO";
import { Computer } from "../../model/entities/Computer";

export class AddComputerToUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private computersRepository: IComputersRepository
  ) {}

  async execute(pcToUserDTO: IAddComputerToUserDTO): Promise<void> {
    const { userId, hostname } = pcToUserDTO;

    const user: User | undefined = await this.usersRepository.findById(userId);
    if (!user) {
      throw new Error(`User not exists!`);
    }
    
    const computer: Computer | undefined = await this.computersRepository.findByHostname(hostname);
    if (!computer) {
      throw new Error(`Computer not exists!`);
    }

    user.addComputer(computer);

    this.usersRepository.update(user);
  }
}
