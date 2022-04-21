import { ComputerModel } from "../../database/schemas/ComputerSchema";
import { IComputer } from "../../interfaces/IComputer";
import { Computer } from "../../model/entities/Computer";
import { ConvertDepartment } from "../../utils/ConvertDepartment";
import { IComputersRepository } from "../IComputersRepository";

class ComputersRepositoryMongo implements IComputersRepository {
  async findByHostname(hostname: string): Promise<Computer | undefined> {
    const computerEnt: IComputer | null = await ComputerModel.findOne({
      hostname,
    });

    if (!computerEnt) return undefined;

    return new Computer(
      computerEnt.hostname,
      ConvertDepartment.stringToEnum(computerEnt.department)
    );
  }

  async add(computer: Computer): Promise<void> {
    const computerEnt: IComputer = {
      hostname: computer.getHostname(),
      department: computer.getDepartment(),
    };

    await ComputerModel.create(computerEnt);
  }

  async getAll(): Promise<Computer[]> {
    return await ComputerModel.find();
  }
}

export const computersRepositoryMongo: ComputersRepositoryMongo =
  new ComputersRepositoryMongo();
