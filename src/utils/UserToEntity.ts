import { IHostname } from "../interfaces/IHostname";
import { IDailyJourney } from "../interfaces/IDailyJourney";
import { IUser } from "../interfaces/IUser";
import { Computer } from "../model/entities/Computer";
import { User } from "../model/entities/User";

export abstract class UserToEntity {
  public static of(user: User): IUser {
    const computers: IHostname[] = UserToEntity.getComputers(user);

    const weeklyJourney = UserToEntity.getWeeklyJourney(user);

    const userEntity: IUser = {
      id: user.getId(),
      name: user.getName(),
      computers,
      weeklyJourney,
    };

    return userEntity;
  }

  private static getComputers(user: User): IHostname[] {
    const computers: Computer[] = user.getComputers();
    if (!computers || computers.length === 0) return [];

    let computersEnt: IHostname[] = [];

    for (const computer of computers) {
      const hostname = computer.getHostname();

      const hostnameEnt: IHostname = {
        hostname,
      };
      computersEnt.push(hostnameEnt);
    }

    return computersEnt;
  }

  private static getWeeklyJourney(user: User): IDailyJourney[] {
    const weeklyJourney = user.getWeeklyJourney()?.getWorkDays();
    if (!weeklyJourney || weeklyJourney.length === 0) return [];

    let weeklyJourneyEnt: IDailyJourney[] = [];

    for (const dailyJourney of weeklyJourney) {
      const dailyJourneyEnt: IDailyJourney = {
        dayOfWeek: dailyJourney.getDayOfWeek(),
        entryTime: dailyJourney.getEntryTime().getTime(),
        departureTime: dailyJourney.getDepartureTime()!.getTime(),
      };

      weeklyJourneyEnt.push(dailyJourneyEnt);
    }

    return weeklyJourneyEnt;
  }
}
