import { usersRepositoryMemory } from "../../repositories/implementations/UsersRepositoryMemory";
import { AddUserUseCase } from "./AddUserUseCase";
import { AddUserController } from "../../controllers/AddUserController";

const addUserUseCase = new AddUserUseCase(usersRepositoryMemory);
const addUserController = new AddUserController(addUserUseCase);

export { addUserController };
