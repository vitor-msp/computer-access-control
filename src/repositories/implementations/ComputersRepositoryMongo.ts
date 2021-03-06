import {
  ComputerModel,
  IComputerModel,
} from "../../database/schemas/ComputerSchema";
import { IComputer } from "../../interfaces/IComputer";
import { Computer } from "../../model/entities/Computer";
import { ComputerToEntity } from "../../utils/ComputerToEntity";
import { IComputersRepository } from "../IComputersRepository";

class ComputersRepositoryMongo implements IComputersRepository {
  async findByHostname(hostname: string): Promise<IComputer | undefined> {
    const computerEnt: IComputer | null = await ComputerModel.findOne({
      hostname,
    });

    if (!computerEnt) return undefined;

    return computerEnt;
  }

  async add(computer: Computer): Promise<void> {
    const computerEnt: IComputer = ComputerToEntity.of(computer);

    await ComputerModel.create(computerEnt);
  }

  async getAll(): Promise<Computer[]> {
    return await ComputerModel.find();
  }
}

export const computersRepositoryMongo: ComputersRepositoryMongo =
  new ComputersRepositoryMongo();
