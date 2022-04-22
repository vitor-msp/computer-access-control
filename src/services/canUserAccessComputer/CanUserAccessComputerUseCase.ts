import { IComputer } from "../../interfaces/IComputer";
import { IUser } from "../../interfaces/IUser";
import { CanUserAccessComputer } from "../../model/entities/CanUserAccessComputer";
import { Computer } from "../../model/entities/Computer";
import { User } from "../../model/entities/User";
import { IComputersRepository } from "../../repositories/IComputersRepository";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ComputerFromEntity } from "../../utils/ComputerFromEntity";
import { UserFromEntity } from "../../utils/UserFromEntity";
import { ICanUserAccessComputerDTO } from "./ICanUserAccessComputerDTO";

export class CanUserAccessComputerUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private computersRepository: IComputersRepository
  ) {}

  async execute(canAccessDTO: ICanUserAccessComputerDTO): Promise<boolean> {
    let canAccess = false;

    const { userId, hostname, time } = canAccessDTO;

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

    const timeToTest = new Date();
    timeToTest.setTime(time);

    canAccess = CanUserAccessComputer.test(user, computer, timeToTest);

    return canAccess;
  }
}
