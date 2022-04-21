import { WeeklyJourney } from "../../src/model/entities/WeeklyJourney";
import { DayOfWeek } from "../../src/model/enums/DayOfWeek";

describe("Daily journey", () => {
  let weeklyJourney: WeeklyJourney = new WeeklyJourney();
  let entryTime: Date = new Date();
  let departureTime: Date = new Date();

  it("should not add day with entry time not less than departure time", () => {
    entryTime.setHours(8);
    entryTime.setMinutes(0);

    departureTime.setHours(8);
    departureTime.setMinutes(0);

    expect(() => {
      weeklyJourney.addDay(DayOfWeek.MONDAY, entryTime, departureTime);
    }).toThrow(`Departure time needs be after entry time!`);
  });
});

describe("Weekly journey", () => {
  let weeklyJourney: WeeklyJourney = new WeeklyJourney();
  let entryTime: Date = new Date();
  let departureTime: Date = new Date();

  entryTime.setHours(8);
  entryTime.setMinutes(0);

  departureTime.setHours(17);
  departureTime.setMinutes(0);

  it("should add correctly days to weekly journey", () => {
    weeklyJourney = new WeeklyJourney();
    weeklyJourney.addDay(DayOfWeek.MONDAY, entryTime, departureTime);
    weeklyJourney.addDay(DayOfWeek.TUESDAY, entryTime, departureTime);

    const workDays = weeklyJourney.getWorkDays();
    expect(workDays.length).toBe(2);
    expect(workDays.at(0)?.getDayOfWeek()).toBe(DayOfWeek.MONDAY);
  });

  it("should not add same day of week to weekly journey", () => {
    weeklyJourney = new WeeklyJourney();
    weeklyJourney.addDay(DayOfWeek.MONDAY, entryTime, departureTime);

    expect(() => {
      weeklyJourney.addDay(DayOfWeek.MONDAY, entryTime, departureTime);
    }).toThrow(`Duplicate day for this week!`);
    expect(weeklyJourney.getWorkDays().length).toBe(1);
  });
});
