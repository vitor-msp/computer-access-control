import { Computer } from "../../model/entities/Computer";
import { IComputersRepository } from "../../repositories/IComputersRepository";
import { IAddComputerDTO } from "./AddComputerDTO";

export class AddComputerUseCase {
  constructor(private computersRepository: IComputersRepository) {}

  async execute(computerDTO: IAddComputerDTO): Promise<void> {
    const { hostname, department } = computerDTO;
    const computerThatExists: Computer | undefined = await this.computersRepository.findByHostname(
      hostname
    );

    if (computerThatExists) {
      throw new Error(`Computer already exists!`);
    }

    const computer = new Computer(hostname, department);

    await this.computersRepository.add(computer);
  }
}
