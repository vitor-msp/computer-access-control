export interface ISetWeeklyJourneyToUserDTO {
  userId: string;
  weeklyJourney: [
    { dayOfWeek: string; entryTime: number; departureTime: number }
  ];
}
