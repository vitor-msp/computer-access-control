import { CanUserAccessComputer } from "../../model/entities/CanUserAccessComputer";
import { Computer } from "../../model/entities/Computer";
import { User } from "../../model/entities/User";
import { IComputersRepository } from "../../repositories/IComputersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICanUserAccessComputerDTO } from "./ICanUserAccessComputerDTO";

export class CanUserAccessComputerUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private computersRepository: IComputersRepository
  ) {}

  async execute(canAccessDTO: ICanUserAccessComputerDTO): Promise<boolean> {
    let canAccess = false;

    const { userId, hostname, time } = canAccessDTO;

    const user: User | undefined = await this.usersRepository.findById(userId);
    if (!user) {
      throw new Error(`User not exists!`);
    }

    const computer: Computer | undefined =
      await this.computersRepository.findByHostname(hostname);
    if (!computer) {
      throw new Error(`Computer not exists!`);
    }

    const timeToTest = new Date()
    timeToTest.setTime(time)
    canAccess = CanUserAccessComputer.test(user, computer, timeToTest);

    return canAccess;
  }
}
