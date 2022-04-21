import { Computer } from "../../model/entities/Computer";
import { IComputersRepository } from "../../repositories/IComputersRepository";

export class GetComputersUseCase {
  constructor(private computersRepository: IComputersRepository) {}

  async execute(): Promise<Computer[]> {
    const computers: Computer[] = await this.computersRepository.getAll();
    return computers;
  }
}
