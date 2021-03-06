import { Request, Response } from "express";
import { User } from "../model/entities/User";
import { GetUserDataUseCase } from "../services/getUserData/GetUserDataUseCase";

export class GetUserDataController {
  constructor(private getUserDataUseCase: GetUserDataUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    try {
      const userData: User | undefined = await this.getUserDataUseCase.execute(id);

      return res.status(200).json(userData);
    } catch (error: any) {
      return res.status(400).json({
        message: error?.message || `Unexpected error!`,
      });
    }
  }
}
