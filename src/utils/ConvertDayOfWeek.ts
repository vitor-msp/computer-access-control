import { DayOfWeek } from "../model/enums/DayOfWeek";

export abstract class ConvertDayOfWeek {
  public static stringToEnum(value: string): DayOfWeek {
    let ret;
    switch (value) {
      case "SUNDAY":
        ret = DayOfWeek.SUNDAY;
        break;

      case "MONDAY":
        ret = DayOfWeek.MONDAY;
        break;

      case "TUESDAY":
        ret = DayOfWeek.TUESDAY;
        break;

      case "WEDNESDAY":
        ret = DayOfWeek.WEDNESDAY;
        break;

      case "THURSDAY":
        ret = DayOfWeek.THURSDAY;
        break;

      case "FRIDAY":
        ret = DayOfWeek.FRIDAY;
        break;

      case "SATURDAY":
        ret = DayOfWeek.SATURDAY;
        break;

      default:
        throw new Error(`Invalid day of week!`);
    }
    return ret;
  }

  // enumToString(value: string): DayOfWeek{
  // }
}
