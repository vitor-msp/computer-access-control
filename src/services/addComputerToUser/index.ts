import { AddComputerToUserUseCase } from "./AddComputerToUserUseCase";
import { AddComputerToUserController } from "../../controllers/AddComputerToUserController";
import { usersRepositoryMongo } from "../../repositories/implementations/UsersRepositoryMongo";
import { computersRepositoryMongo } from "../../repositories/implementations/ComputersRepositoryMongo";

const addComputerToUserUseCase = new AddComputerToUserUseCase(
  usersRepositoryMongo,
  computersRepositoryMongo
);
const addComputerToUserController = new AddComputerToUserController(
  addComputerToUserUseCase
);

export { addComputerToUserController };
