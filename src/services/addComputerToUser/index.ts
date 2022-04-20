import { computersRepositoryMemory } from "../../repositories/implementations/ComputersRepositoryMemory";
import { usersRepositoryMemory } from "../../repositories/implementations/UsersRepositoryMemory";
import { AddComputerToUserUseCase } from "./AddComputerToUserUseCase";
import { AddComputerToUserController } from "../../controllers/AddComputerToUserController";

const addComputerToUserUseCase = new AddComputerToUserUseCase(
  usersRepositoryMemory,
  computersRepositoryMemory
);
const addComputerToUserController = new AddComputerToUserController(
  addComputerToUserUseCase
);

export { addComputerToUserController };
