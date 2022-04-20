import { DayOfWeek } from "../enums/DayOfWeek";

export class DailyJourney {
  private departureTime: Date | null = null;

  constructor(
    private dayOfWeek: DayOfWeek,
    private entryTime: Date,
    departureTime: Date
  ) {
    this.setDepartureTime(departureTime);
  }

  private setDepartureTime(departureTime: Date): void {
    if (departureTime > this.entryTime) {
      this.departureTime = departureTime;
    }
    throw new Error(`Departure time needs be after entry time!`);
  }

  getDayOfWeek(): DayOfWeek {
    return this.dayOfWeek;
  }

  get(): string {
    return `${this.getDayOfWeek()} ${this.entryTime} ${this.departureTime}`;
  }
}
