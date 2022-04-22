import { IHostname } from "./IHostname";
import { IDailyJourney } from "./IDailyJourney";

export interface IUser {
  id?: string;
  name: string;
  computers?: IHostname[];
  weeklyJourney?: IDailyJourney[];
}
