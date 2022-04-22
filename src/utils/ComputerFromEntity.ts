import { IComputer } from "../interfaces/IComputer";
import { Computer } from "../model/entities/Computer";
import { ConvertDepartment } from "./ConvertDepartment";

export abstract class ComputerFromEntity {
  public static of(computerEnt: IComputer): Computer {
    const computer = new Computer(
      computerEnt.hostname,
      ConvertDepartment.stringToEnum(computerEnt.department)
    );

    return computer;
  }
}
