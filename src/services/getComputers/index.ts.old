import { GetComputersController } from "../../controllers/GetComputersController";
import { GetComputersUseCase } from "./GetComputersUseCase";
import { computersRepositoryMemory } from "../../repositories/implementations/ComputersRepositoryMemory";

const getComputersUseCase = new GetComputersUseCase(computersRepositoryMemory);
const getComputersController = new GetComputersController(getComputersUseCase);

export { getComputersController };
