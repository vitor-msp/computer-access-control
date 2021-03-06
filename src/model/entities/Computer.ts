import { Departments } from "../enums/Departments";

export class Computer {
  constructor(private hostname: string, private department?: Departments) {}

  getHostname(): string {
    return this.hostname;
  }

  getDepartment(): string | undefined {
    return this.department ?? undefined;
  }
}
