import { CanUserAccessComputer } from "../../src/model/entities/CanUserAccessComputer";
import { Computer } from "../../src/model/entities/Computer";
import { User } from "../../src/model/entities/User";
import { WeeklyJourney } from "../../src/model/entities/WeeklyJourney";
import { DayOfWeek } from "../../src/model/enums/DayOfWeek";
import { Departments } from "../../src/model/enums/Departments";

describe("Can user access computer", () => {
  it("should not allow in computer not set to user", async () => {
    const user = new User("Fulano", "1");
    const computer = new Computer("COM01", Departments.COMPRAS);
    const time = new Date(2022, 3, 23, 10, 0);

    const canAccess = CanUserAccessComputer.test(user, computer, time);

    expect(canAccess).toBe(false);
  });

  it("should not allow at day out of user journey", async () => {
    const user = new User("Fulano", "1");
    const computer = new Computer("COM01", Departments.COMPRAS);
    user.addComputer(computer);
    const weeklyJourney = new WeeklyJourney();
    const entryTime = new Date();
    entryTime.setHours(8);
    entryTime.setMinutes(0);
    const departureTime = new Date();
    departureTime.setHours(17);
    departureTime.setMinutes(0);
    weeklyJourney.addDay(DayOfWeek.MONDAY, entryTime, departureTime);
    user.setWeeklyJourney(weeklyJourney);
    const time = new Date(2022, 3, 23);
    time.setHours(10);
    time.setMinutes(0);

    const canAccess = CanUserAccessComputer.test(user, computer, time);

    expect(canAccess).toBe(false);
  });

  it("should not allow at time under of user journey", async () => {
    const user = new User("Fulano", "1");
    const computer = new Computer("COM01", Departments.COMPRAS);
    user.addComputer(computer);
    const weeklyJourney = new WeeklyJourney();
    const entryTime = new Date();
    entryTime.setHours(8);
    entryTime.setMinutes(0);
    const departureTime = new Date();
    departureTime.setHours(17);
    departureTime.setMinutes(0);
    weeklyJourney.addDay(DayOfWeek.MONDAY, entryTime, departureTime);
    user.setWeeklyJourney(weeklyJourney);
    const time = new Date(2022, 3, 25);
    time.setHours(7);
    time.setMinutes(0);

    const canAccess = CanUserAccessComputer.test(user, computer, time);

    expect(canAccess).toBe(false);
  });

  it("should not allow at time over of user journey", async () => {
        const user = new User("Fulano", "1");
        const computer = new Computer("COM01", Departments.COMPRAS);
        user.addComputer(computer);
        const weeklyJourney = new WeeklyJourney();
        const entryTime = new Date();
        entryTime.setHours(8);
        entryTime.setMinutes(0);
        const departureTime = new Date();
        departureTime.setHours(17);
        departureTime.setMinutes(0);
        weeklyJourney.addDay(DayOfWeek.MONDAY, entryTime, departureTime);
        user.setWeeklyJourney(weeklyJourney);
        const time = new Date(2022, 3, 25);
        time.setHours(17);
        time.setMinutes(1);

        const canAccess = CanUserAccessComputer.test(user, computer, time);

        expect(canAccess).toBe(false);
  });

  it("should allow access to user", async () => {
    const user = new User("Fulano", "1");
    const computer = new Computer("COM01", Departments.COMPRAS);
    user.addComputer(computer);
    const weeklyJourney = new WeeklyJourney();
    const entryTime = new Date();
    entryTime.setHours(8);
    entryTime.setMinutes(0);
    const departureTime = new Date();
    departureTime.setHours(17);
    departureTime.setMinutes(0);
    weeklyJourney.addDay(DayOfWeek.MONDAY, entryTime, departureTime);
    user.setWeeklyJourney(weeklyJourney);
    const time = new Date(2022, 3, 25);
    time.setHours(8);
    time.setMinutes(0);

    const canAccess = CanUserAccessComputer.test(user, computer, time);

    expect(canAccess).toBe(true);
  });
});
