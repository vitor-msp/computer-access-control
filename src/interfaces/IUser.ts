import { IComputer } from "./IComputer";
import { IDailyJourney } from "./IDailyJourney";

export interface IUser {
  id?: string;
  name: string;
  computers?: IComputer[];
  weeklyJourney?: IDailyJourney[];
}
