import { Request, Response } from "express";
import { GetComputersUseCase } from "../services/getComputers/GetComputersUseCase";

export class GetComputersController {
  constructor(private getComputersUseCase: GetComputersUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const computers = await this.getComputersUseCase.execute();

      return res.status(200).json(computers);
    } catch (error: any) {
      return res.status(400).json({
        message: error?.message || `Unexpected error!`,
      });
    }
  }
}
