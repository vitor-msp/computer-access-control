import { Departments } from "../enums/Departments";

export class Computer {
  constructor(
    private hostname: string,
    private department: Departments,
    private id?: string
  ) {}

  getHostname(): string {
    return this.hostname;
  }

  getDepartment(): string {
    return this.department;
  }

  getId(): string | undefined {
    return this.id;
  }
}
