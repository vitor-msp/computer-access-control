import { GetUserDataUseCase } from "./GetUserDataUseCase";
import { GetUserDataController } from "../../controllers/GetUserDataController";
import { usersRepositoryMongo } from "../../repositories/implementations/UsersRepositoryMongo";

const getUserDataUseCase = new GetUserDataUseCase(usersRepositoryMongo);
const getUserDataController = new GetUserDataController(getUserDataUseCase);

export { getUserDataController };
