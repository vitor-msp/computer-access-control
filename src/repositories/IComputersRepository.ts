import { IComputer } from "../interfaces/IComputer";
import { Computer } from "../model/entities/Computer";

export interface IComputersRepository {
  findByHostname(hostname: string): Promise<IComputer | undefined>;

  add(computer: Computer): Promise<void>;

  getAll(): Promise<Computer[]>;
};
