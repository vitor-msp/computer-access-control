import { AddUserUseCase } from "./AddUserUseCase";
import { AddUserController } from "../../controllers/AddUserController";
import { usersRepositoryMongo } from "../../repositories/implementations/UsersRepositoryMongo";

const addUserUseCase = new AddUserUseCase(usersRepositoryMongo);
const addUserController = new AddUserController(addUserUseCase);

export { addUserController };
