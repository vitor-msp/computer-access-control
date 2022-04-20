import { Computer } from "../../model/entities/Computer";
import { IComputersRepository } from "../IComputersRepository";

class ComputersRepositoryMemory implements IComputersRepository {
  private computers: Computer[] = [];

  constructor() {}

  async findByHostname(hostname: string): Promise<Computer | undefined> {
    return this.computers.find((c) => c.getHostname() === hostname);
  }

  async add(computer: Computer): Promise<void> {
    this.computers.push(computer);
  }

  async getAll(): Promise<Computer[]> {
    return this.computers;
  }
}

export const computersRepositoryMemory: ComputersRepositoryMemory =
  new ComputersRepositoryMemory();
