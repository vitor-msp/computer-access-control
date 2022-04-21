import { IUser } from "../../interfaces/IUser";
import { WeeklyJourney } from "../../model/entities/WeeklyJourney";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { GenerateWeeklyJourney } from "../../utils/GenerateWeeklyJourney";
import { UserFromEntity } from "../../utils/UserFromEntity";
import { ISetWeeklyJourneyToUserDTO } from "./ISetWeeklyJourneyToUserDTO";

export class SetWeeklyJourneyToUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(journeyToSetDTO: ISetWeeklyJourneyToUserDTO): Promise<void> {
    const { userId, weeklyJourney } = journeyToSetDTO;

    const userEnt: IUser | undefined = await this.usersRepository.findById(
      userId
    );
    if (!userEnt) {
      throw new Error(`User not exists!`);
    }

    if (weeklyJourney.length > 6) {
      throw new Error(`Cannot set more than 6 days to work journey!`);
    }

    const journeyToUser: WeeklyJourney =
      GenerateWeeklyJourney.fromDTO(weeklyJourney);

    const user = UserFromEntity.of(userEnt);

    user.setWeeklyJourney(journeyToUser);

    this.usersRepository.update(user);
  }
}
