import { AddComputerController } from "../../controllers/AddComputerController";
import { AddComputerUseCase } from "./AddComputerUseCase";
import { computersRepositoryMemory } from "../../repositories/implementations/ComputersRepositoryMemory";

const addComputerUseCase = new AddComputerUseCase(computersRepositoryMemory);
const addComputerController = new AddComputerController(addComputerUseCase);

export { addComputerController };
