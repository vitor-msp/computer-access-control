import { AddComputerController } from "../../controllers/AddComputerController";
import { AddComputerUseCase } from "./AddComputerUseCase";
import { computersRepositoryMongo } from "../../repositories/implementations/ComputersRepositoryMongo";

const addComputerUseCase = new AddComputerUseCase(computersRepositoryMongo);
const addComputerController = new AddComputerController(addComputerUseCase);

export { addComputerController };
