import { IComputer } from "../../interfaces/IComputer";
import { Computer } from "../../model/entities/Computer";
import { IComputersRepository } from "../../repositories/IComputersRepository";
import { ConvertDepartment } from "../../utils/ConvertDepartment";
import { IAddComputerDTO } from "./IAddComputerDTO";

export class AddComputerUseCase {
  constructor(private computersRepository: IComputersRepository) {}

  async execute(computerDTO: IAddComputerDTO): Promise<void> {
    const { hostname, department } = computerDTO;
    const computerThatExists: IComputer | undefined = await this.computersRepository.findByHostname(
      hostname
    );

    if (computerThatExists) {
      throw new Error(`Computer already exists!`);
    }

    const computer = new Computer(
      hostname,
      ConvertDepartment.stringToEnum(department)
    );

    await this.computersRepository.add(computer);
  }
}
