import { Request, Response } from "express";
import { AddComputerToUserUseCase } from "../services/addComputerToUser/AddComputerToUserUseCase";

export class AddComputerToUserController {
  constructor(private addComputerToUserUseCase: AddComputerToUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { userId, hostname } = req.body;

    try {
      await this.addComputerToUserUseCase.execute({
        userId,
        hostname,
      });

      return res.status(200).send();
    } catch (error: any) {
      return res.status(400).json({
        message: error?.message || `Unexpected error!`,
      });
    }
  }
}
