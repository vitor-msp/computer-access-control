import { ComputerModel } from "../../database/schemas/ComputerSchema";
import { Computer } from "../../model/entities/Computer";
import { IComputersRepository } from "../IComputersRepository";

class ComputersRepositoryMongo implements IComputersRepository {
  async findByHostname(hostname: string): Promise<Computer | undefined> {
    const computer: Computer | null = await ComputerModel.findOne({ hostname });
    return computer ?? undefined;
  }

  async add(computer: Computer): Promise<void> {
    await ComputerModel.create({
      hostname: computer.getHostname(),
      department: computer.getDepartment(),
    });
  }

  async getAll(): Promise<Computer[]> {
    return await ComputerModel.find();
  }
}

export const computersRepositoryMongo: ComputersRepositoryMongo =
  new ComputersRepositoryMongo();
