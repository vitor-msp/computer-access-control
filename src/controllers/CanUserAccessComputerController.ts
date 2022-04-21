import { Request, Response } from "express";
import { CanUserAccessComputerUseCase } from "../services/canUserAccessComputer/CanUserAccessComputerUseCase";

export class CanUserAccessComputerController {
  constructor(private canUserAccessComputer: CanUserAccessComputerUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { userId, hostname, time } = req.body;

    try {
      const ret = await this.canUserAccessComputer.execute({
        userId,
        hostname,
        time,
      });

      return res.status(200).json({
        canAccess: ret,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: error?.message || `Unexpected error!`,
      });
    }
  }
}
