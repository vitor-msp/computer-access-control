import { Request, Response } from "express";
import { AddComputerUseCase } from "../services/addComputer/AddComputerUseCase";

export class AddComputerController {
  constructor(private addComputerUseCase: AddComputerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { hostname, department } = req.body;

    try {
      await this.addComputerUseCase.execute({
        hostname,
        department,
      });

      return res.status(201).send();
    } catch (error: any) {
      return res.status(400).json({
        message: error?.message || `Unexpected error!`,
      });
    }
  }
}
