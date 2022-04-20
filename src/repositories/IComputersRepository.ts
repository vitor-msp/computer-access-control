import { Computer } from "../model/entities/Computer";

export interface IComputersRepository {
  findByHostname(hostname: string): Promise<Computer | undefined>;

  add(computer: Computer): Promise<void>;

  getAll(): Promise<Computer[]>;
};
