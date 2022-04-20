// import { DailyJourney } from "../entities/DailyJourney";
// import { User } from "../entities/User";
// import { DayOfWeek } from "../enums/DayOfWeek";
// import { WeeklyJourney } from "../entities/WeeklyJourney";

// export class SetJourneyToUser {
//   private workDays: DailyJourney[] = [];

//   constructor(private user: User) {}

//   protected addDay(
//     dayOfWeek: DayOfWeek,
//     entryTime: Date,
//     departureTime: Date
//   ): void {
//     this.workDays.push(new DailyJourney(dayOfWeek, entryTime, departureTime));
//   }

//   protected apply(): void {
//     this.user.setWeeklyJourney(new WeeklyJourney(this.workDays));
//   }
// }
