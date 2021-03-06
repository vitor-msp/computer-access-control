import { GetComputersController } from "../../controllers/GetComputersController";
import { GetComputersUseCase } from "./GetComputersUseCase";
import { computersRepositoryMongo } from "../../repositories/implementations/ComputersRepositoryMongo";

const getComputersUseCase = new GetComputersUseCase(computersRepositoryMongo);
const getComputersController = new GetComputersController(getComputersUseCase);

export { getComputersController };
