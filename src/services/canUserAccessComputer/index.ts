import { CanUserAccessComputerUseCase } from "./CanUserAccessComputerUseCase";
import { CanUserAccessComputerController } from "../../controllers/CanUserAccessComputerController";
import { usersRepositoryMongo } from "../../repositories/implementations/UsersRepositoryMongo";
import { computersRepositoryMongo } from "../../repositories/implementations/ComputersRepositoryMongo";

const canUserAccessComputerUseCase = new CanUserAccessComputerUseCase(
  usersRepositoryMongo,
  computersRepositoryMongo
);
const canUserAccessComputerController = new CanUserAccessComputerController(
  canUserAccessComputerUseCase
);

export { canUserAccessComputerController };
