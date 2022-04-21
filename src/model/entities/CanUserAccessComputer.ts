import { ConvertDayOfWeek } from "../../utils/ConvertDayOfWeek";
import { Computer } from "./Computer";
import { User } from "./User";

export abstract class CanUserAccessComputer {
  public static test(user: User, computer: Computer, time: Date): boolean {
    return (
      CanUserAccessComputer.isAllowedComputer(user, computer) &&
      CanUserAccessComputer.isAllowedTime(user, time)
    );
  }

  private static isAllowedComputer(user: User, computer: Computer): boolean {
    let canAccess = false;

    const computerOfUser = user
      .getComputers()
      .find((c) => c.getHostname() === computer.getHostname());
    if (computerOfUser) canAccess = true;

    return canAccess;
  }

  private static isAllowedTime(user: User, time: Date): boolean {
    let canAccess = false;

    const dayOfWeek = ConvertDayOfWeek.numberToEnum(time.getDay());

    const day = user
      .getWeeklyJourney()
      ?.getWorkDays()
      .find((d) => d.getDayOfWeek() === dayOfWeek);

    if (day?.getDepartureTime()) {
      const entryTime = day.getEntryTime();
      const notUnderTime =
        entryTime.getHours() <= time.getHours() &&
        entryTime.getMinutes() <= time.getMinutes();

      const departureTime = day.getDepartureTime()!;
      const notOverTime =
        departureTime.getHours() >= time.getHours() &&
        departureTime.getMinutes() >= time.getMinutes();

      canAccess = notUnderTime && notOverTime;
    }

    return canAccess;
  }
}
