import { DailyJourney } from "../../model/entities/DailyJourney";
import { WeeklyJourney } from "../../model/entities/WeeklyJourney";

export interface ISetWeeklyJourneyToUserDTO {
  userId: string;
  weeklyJourney: [
    { dayOfWeek: string; entryTime: Date; departureTime: Date }
  ];
}
