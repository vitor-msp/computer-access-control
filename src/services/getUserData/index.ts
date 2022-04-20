import { usersRepositoryMemory } from "../../repositories/implementations/UsersRepositoryMemory";
import { GetUserDataUseCase } from "./GetUserDataUseCase";
import { GetUserDataController } from "../../controllers/GetUserDataController";

const getUserDataUseCase = new GetUserDataUseCase(usersRepositoryMemory);
const getUserDataController = new GetUserDataController(getUserDataUseCase);

export { getUserDataController };
