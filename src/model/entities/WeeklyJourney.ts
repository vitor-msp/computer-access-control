import { DayOfWeek } from "../enums/DayOfWeek";
import { DailyJourney } from "./DailyJourney";

export class WeeklyJourney {
  private workDays: DailyJourney[] = [];

  constructor() { }
  
  protected addDay(
    dayOfWeek: DayOfWeek,
    entryTime: Date,
    departureTime: Date
  ): void {
    const dailyJourney = new DailyJourney(dayOfWeek, entryTime, departureTime);
    if (this.isDayAdded(dailyJourney)) {
      throw new Error(`Day already salve for this week!`);
    }
    this.workDays.push(dailyJourney);
  }

  private isDayAdded(dailyJourney: DailyJourney): boolean {
    const dayAlreadyAdded = this.workDays.find(d => d.getDayOfWeek() === dailyJourney.getDayOfWeek())
    return dayAlreadyAdded === undefined ? false : true;
  }
}
