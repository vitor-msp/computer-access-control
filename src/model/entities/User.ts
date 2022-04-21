import { v4 as uuidv4 } from "uuid";

import { Computer } from "./Computer";
import { WeeklyJourney } from "./WeeklyJourney";

export class User {
  private readonly id: string;
  private computers: Computer[] = [];
  private weeklyJourney: WeeklyJourney | null = null;

  constructor(private name: string, id?: string) {
    this.id = id ?? uuidv4();
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setWeeklyJourney(weeklyJourney: WeeklyJourney): void {
    this.weeklyJourney = weeklyJourney;
  }

  addComputer(computer: Computer): void {
    if (this.isComputerAdded(computer)) {
      throw new Error(`Computer already added to this user!`);
    }
    this.computers.push(computer);
  }

  private isComputerAdded(computer: Computer): boolean {
    const computerAlreadyAdded = this.computers.find(
      (c) => c.getHostname() === computer.getHostname()
    );
    return computerAlreadyAdded === undefined ? false : true;
  }

  getWeeklyJourney(): WeeklyJourney | null {
    return this.weeklyJourney;
  }

  getComputers(): Computer[] {
    return this.computers;
  }
}
