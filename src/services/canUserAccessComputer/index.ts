import { usersRepositoryMemory } from "../../repositories/implementations/UsersRepositoryMemory";
import { CanUserAccessComputerUseCase } from "./CanUserAccessComputerUseCase";
import { computersRepositoryMemory } from "../../repositories/implementations/ComputersRepositoryMemory";
import { CanUserAccessComputerController } from "../../controllers/CanUserAccessComputerController";

const canUserAccessComputerUseCase = new CanUserAccessComputerUseCase(
  usersRepositoryMemory,
  computersRepositoryMemory
);
const canUserAccessComputerController = new CanUserAccessComputerController(
  canUserAccessComputerUseCase
);

export { canUserAccessComputerController };