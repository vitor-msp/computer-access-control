import { User } from "../../model/entities/User";
import { WeeklyJourney } from "../../model/entities/WeeklyJourney";
import { DayOfWeek } from "../../model/enums/DayOfWeek";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ConvertDayOfWeek } from "../../utils/ConvertDayOfWeek";
import { ISetWeeklyJourneyToUserDTO } from "./ISetWeeklyJourneyToUserDTO";

export class SetWeeklyJourneyToUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(journeyToSetDTO: ISetWeeklyJourneyToUserDTO): Promise<void> {
    const { userId, weeklyJourney } = journeyToSetDTO;

    const user: User | undefined = await this.usersRepository.findById(userId);
    if (!user) {
      throw new Error(`User not exists!`);
    }

    if (weeklyJourney.length > 6) {
      throw new Error(`Cannot set more than 6 days to work journey!`);
    }

    const journeyToUser = new WeeklyJourney();

    for (const dailyJourney of weeklyJourney) {
      journeyToUser.addDay(
        ConvertDayOfWeek.stringToEnum(dailyJourney.dayOfWeek),
        dailyJourney.entryTime,
        dailyJourney.departureTime
      );
    }

    user.setWeeklyJourney(journeyToUser);

    this.usersRepository.update(user);
  }
}
