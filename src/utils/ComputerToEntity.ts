import { IComputer } from "../interfaces/IComputer";
import { Computer } from "../model/entities/Computer";

export abstract class ComputerToEntity {
  public static of(computer: Computer): IComputer {
    const computerEnt: IComputer = {
      hostname: computer.getHostname(),
      department: computer.getDepartment(),
    };

    return computerEnt;
  }
}
