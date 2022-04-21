import express from "express";
import request from "supertest";
import { AppController } from "../../src/app";

let app: express.Application;
let req: any;
beforeAll(() => {
  app = new AppController().express;

  let entryTime = new Date();
  entryTime.setHours(8);
  entryTime.setMinutes(0);

  let departureTime = new Date();
  departureTime.setHours(8);
  departureTime.setMinutes(0);

  req = {
    userId: "1",
    weeklyJourney: [
      {
        dayOfWeek: "MONDAY",
        entryTime,
        departureTime,
      },
      {
        dayOfWeek: "TUESDAY",
        entryTime,
        departureTime,
      },
    ],
  };
});

describe("Set weekly journey to user in memory use case", () => {
  it("should not set to user that not exists", async () => {
    const res = await request(app).put("/users/set-weekly-journey").send(req);

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(`User not exists!`);
  });

  it("should not set day with entry time not less than departure time", async () => {
    await request(app).post("/users").send({
      id: "1",
      name: "Fulano",
    });

    const res = await request(app).put("/users/set-weekly-journey").send(req);

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(
      `Departure time needs be after entry time!`
    );
  });

  it("should not set same days of week", async () => {
    let entryTime = new Date();
    entryTime.setHours(8);
    entryTime.setMinutes(0);

    let departureTime = new Date();
    departureTime.setHours(17);
    departureTime.setMinutes(0);

    const req = {
      userId: "1",
      weeklyJourney: [
        {
          dayOfWeek: "MONDAY",
          entryTime,
          departureTime,
        },
        {
          dayOfWeek: "MONDAY",
          entryTime,
          departureTime,
        },
      ],
    };

    const res = await request(app).put("/users/set-weekly-journey").send(req);

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(`Duplicate day for this week!`);
  });

  it("should not set more than 6 days", async () => {
    let entryTime = new Date();
    entryTime.setHours(8);
    entryTime.setMinutes(0);

    let departureTime = new Date();
    departureTime.setHours(17);
    departureTime.setMinutes(0);

    const req = {
      userId: "1",
      weeklyJourney: [
        {
          dayOfWeek: "SUNDAY",
          entryTime,
          departureTime,
        },
        {
          dayOfWeek: "MONDAY",
          entryTime,
          departureTime,
        },
        {
          dayOfWeek: "TUESDAY",
          entryTime,
          departureTime,
        },
        {
          dayOfWeek: "WEDNESDAY",
          entryTime,
          departureTime,
        },
        {
          dayOfWeek: "THURSDAY",
          entryTime,
          departureTime,
        },
        {
          dayOfWeek: "FRIDAY",
          entryTime,
          departureTime,
        },
        {
          dayOfWeek: "SATURDAY",
          entryTime,
          departureTime,
        }
      ],
    };

    const res = await request(app).put("/users/set-weekly-journey").send(req);

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(`Cannot set more than 6 days to work journey!`);
  });

  it("should set correctly journey", async () => {
    let entryTime = new Date();
    entryTime.setHours(8);
    entryTime.setMinutes(0);

    let departureTime = new Date();
    departureTime.setHours(17);
    departureTime.setMinutes(0);

    const req = {
      userId: "1",
      weeklyJourney: [
        {
          dayOfWeek: "MONDAY",
          entryTime,
          departureTime,
        },
        {
          dayOfWeek: "TUESDAY",
          entryTime,
          departureTime,
        },
      ],
    };

    const res = await request(app).put("/users/set-weekly-journey").send(req);

    expect(res.statusCode).toEqual(200);
  });
});
