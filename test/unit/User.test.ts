import { Computer } from "../../src/model/entities/Computer";
import { User } from "../../src/model/entities/User";
import { WeeklyJourney } from "../../src/model/entities/WeeklyJourney";
import { DayOfWeek } from "../../src/model/enums/DayOfWeek";
import { Departments } from "../../src/model/enums/Departments";

let user: User | null = null;

beforeEach(() => {
  user = new User("Fulano");
});

describe("User data", () => {
  it("should correctly name", () => {
    expect(user!.getName()).toBe("Fulano");
  });
});

describe("User computers", () => {
  it("should add computers to user", () => {
    const computer1 = new Computer("COM01", Departments.COMPRAS);
    const computer2 = new Computer("COM02", Departments.COMPRAS);

    user?.addComputer(computer1);
    user?.addComputer(computer2);

    const computers = user!.getComputers();
    expect(computers.length).toBe(2);
    expect(computers.at(0)?.getHostname()).toBe("COM01");
  });

  it("should not add same computer to user", () => {
    const computer = new Computer("COM01", Departments.COMPRAS);
    user?.addComputer(computer);

    expect(() => {
      user?.addComputer(computer);
    }).toThrow(`Computer already added to this user!`);
    expect(user?.getComputers().length).toBe(1);
  });
});

describe("User weekly journey", () => {
  it("should set correctly weekly journey to user", () => {
    const weeklyJourney = new WeeklyJourney();

    let entryTime = new Date();
    entryTime.setHours(8);
    entryTime.setMinutes(0);

    let departureTime = new Date();
    departureTime.setHours(17);
    departureTime.setMinutes(0);

    weeklyJourney.addDay(DayOfWeek.MONDAY, entryTime, departureTime);
    weeklyJourney.addDay(DayOfWeek.TUESDAY, entryTime, departureTime);

    user!.setWeeklyJourney(weeklyJourney);

    expect(user!.getWeeklyJourney()).toBe(weeklyJourney);
  });
});
