export interface IUser {
  id?: string;
  name: string;
  weeklyJourney: [
    { dayOfWeek: string; entryTime: number; departureTime: number }
  ];
}
