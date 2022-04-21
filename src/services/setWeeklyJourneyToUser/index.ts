import { usersRepositoryMemory } from "../../repositories/implementations/UsersRepositoryMemory";
import { SetWeeklyJourneyToUserUseCase } from "./SetWeeklyJourneyToUserUseCase";
import { SetWeeklyJourneyToUserController } from "../../controllers/SetWeeklyJourneyToUserController";

const setWeeklyJourneyToUserUseCase = new SetWeeklyJourneyToUserUseCase(
  usersRepositoryMemory
);
const setWeeklyJourneyToUserController = new SetWeeklyJourneyToUserController(
  setWeeklyJourneyToUserUseCase
);

export { setWeeklyJourneyToUserController };
