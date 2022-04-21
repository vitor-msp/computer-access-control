import { IUser } from "../interfaces/IUser";
import { Computer } from "../model/entities/Computer";
import { User } from "../model/entities/User";
import { WeeklyJourney } from "../model/entities/WeeklyJourney";
import { ConvertDayOfWeek } from "./ConvertDayOfWeek";
import { ConvertDepartment } from "./ConvertDepartment";

export abstract class UserFromEntity {
  public static of(userEntity: IUser): User {
    const user = new User(userEntity.name, userEntity.id);

    UserFromEntity.setWeeklyJourney(userEntity, user);

    UserFromEntity.setComputers(userEntity, user);

    return user;
  }

  private static setWeeklyJourney(userEntity: IUser, user: User): void {
    if (!userEntity.weeklyJourney || userEntity.weeklyJourney.length === 0) return;

    const weeklyJourney = new WeeklyJourney();

    for (const dailyJourney of userEntity.weeklyJourney) {
      let entryTime = new Date();
      entryTime.setTime(dailyJourney.entryTime);

      let departureTime = new Date();
      departureTime.setTime(dailyJourney.departureTime);

      weeklyJourney.addDay(
        ConvertDayOfWeek.stringToEnum(dailyJourney.dayOfWeek),
        entryTime,
        departureTime
      );
    }
    user.setWeeklyJourney(weeklyJourney);
  }

  static setComputers(userEntity: IUser, user: User): void {
    if (!userEntity.computers || userEntity.computers.length === 0) return;

    for (const computerEnt of userEntity.computers) {
      const computer = new Computer(
        computerEnt.hostname,
        ConvertDepartment.stringToEnum(computerEnt.department)
      );
      user.addComputer(computer);
    }
  }
}
