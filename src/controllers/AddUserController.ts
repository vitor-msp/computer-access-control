import { Request, Response } from "express";
import { User } from "../model/entities/User";
import { AddUserUseCase } from "../services/addUser/AddUserUseCase";

export class AddUserController {
  constructor(private addUserUseCase: AddUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id, name } = req.body;

    try {
      const user: User = await this.addUserUseCase.execute({
        id,
        name
      });

      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({
        message: error?.message || `Unexpected error!`,
      });
    }
  }
}
