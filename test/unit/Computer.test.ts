import { Computer } from "../../src/model/entities/Computer";
import { Departments } from "../../src/model/enums/Departments";

describe("Computer", () => {
    let computer: Computer | null = null;

  beforeAll(() => {
    computer = new Computer("COM01", Departments.COMPRAS);
  });

  it("should correctly hostname", () => {
    expect(computer!.getHostname()).toBe("COM01");
  });

  it("should correctly department", () => {
    expect(computer!.getDepartment()).toBe(Departments.COMPRAS);
  });
});
