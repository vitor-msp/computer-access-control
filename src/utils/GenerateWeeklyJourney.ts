import { IDailyJourney } from "../interfaces/IDailyJourney";
import { WeeklyJourney } from "../model/entities/WeeklyJourney";
import { ConvertDayOfWeek } from "./ConvertDayOfWeek";

export abstract class GenerateWeeklyJourney {
  public static fromDTO(weeklyJourneyDTO: IDailyJourney[]): WeeklyJourney {
    const weeklyJourney = new WeeklyJourney();

    for (const dailyJourney of weeklyJourneyDTO) {
      const { dayOfWeek, entryTime, departureTime } = dailyJourney;
      const entryTimeToSet = new Date();
      entryTimeToSet.setTime(entryTime);
      const departureTimeToSet = new Date();
      departureTimeToSet.setTime(departureTime);

      weeklyJourney.addDay(
        ConvertDayOfWeek.stringToEnum(dayOfWeek),
        entryTimeToSet,
        departureTimeToSet
      );
    }

    return weeklyJourney;
  }
}
