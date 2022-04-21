import { SetWeeklyJourneyToUserUseCase } from "./SetWeeklyJourneyToUserUseCase";
import { SetWeeklyJourneyToUserController } from "../../controllers/SetWeeklyJourneyToUserController";
import { usersRepositoryMongo } from "../../repositories/implementations/UsersRepositoryMongo";

const setWeeklyJourneyToUserUseCase = new SetWeeklyJourneyToUserUseCase(
  usersRepositoryMongo
);
const setWeeklyJourneyToUserController = new SetWeeklyJourneyToUserController(
  setWeeklyJourneyToUserUseCase
);

export { setWeeklyJourneyToUserController };
