import { IDailyJourney } from "./IDailyJourney";

export interface IUser {
  id?: string;
  name: string;
  computers?: string[];
  weeklyJourney?: IDailyJourney[];
}
