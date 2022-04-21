import { Request, Response } from "express";
import { SetWeeklyJourneyToUserUseCase } from "../services/setWeeklyJourneyToUser/SetWeeklyJourneyToUserUseCase";

export class SetWeeklyJourneyToUserController {
  constructor(private setWeeklyJourneyToUser: SetWeeklyJourneyToUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { userId, weeklyJourney } = req.body;

    try {
      await this.setWeeklyJourneyToUser.execute({
        userId,
        weeklyJourney,
      });

      return res.status(200).send();
    } catch (error: any) {
      return res.status(400).json({
        message: error?.message || `Unexpected error!`,
      });
    }
  }
}
