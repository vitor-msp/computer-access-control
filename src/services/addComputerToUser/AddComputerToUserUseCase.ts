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

    console.log("pcToUserDTO", pcToUserDTO);
    const user: User | undefined = await this.usersRepository.findById(userId);
    console.log("user", user);
    if (!user) {
      throw new Error(`User not exists!`);
    }
    
    const computer: Computer | undefined = await this.computersRepository.findByHostname(hostname);
    console.log("computer", computer);
    if (!computer) {
      throw new Error(`Computer not exists!`);
    }

    user.addComputer(computer);

    this.usersRepository.update(user);
  }
}
