import express from "express";
import request from "supertest";
import { AppController } from "../../src/app";

let app: express.Application;
beforeAll(async () => {
  app = new AppController().express;

  await request(app).post("/users").send({
    id: "1",
    name: "Fulano",
  });

  await request(app).post("/computers").send({
    hostname: "COM01",
    department: "COMPRAS",
  });

  await request(app).put("/users/add-computer").send({
    userId: "1",
    hostname: "COM01",
  });

  const entryTime = new Date();
  entryTime.setHours(8);
  entryTime.setMinutes(0);
  const departureTime = new Date();
  departureTime.setHours(17);
  departureTime.setMinutes(0);
  await request(app)
    .put("/users/set-weekly-journey")
    .send({
      userId: "1",
      weeklyJourney: [
        {
          dayOfWeek: "MONDAY",
          entryTime: entryTime.getTime(),
          departureTime: departureTime.getTime(),
        },
      ],
    });
});

describe("Can user access computer in memory use case", () => {
  it("should not allow to user that not exists", async () => {
    const time = new Date(2022, 3, 25);
    time.setHours(8)
    time.setMinutes(0)

    const res = await request(app).get("/access").send({
      userId: "2",
      hostname: "COM01",
      time: time.getTime(),
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(`User not exists!`);
  });

  it("should not allow in computer that not exists", async () => {
    const time = new Date(2022, 3, 25);
    time.setHours(8);
    time.setMinutes(0);
    const res = await request(app).get("/access").send({
      userId: "1",
      hostname: "COM02",
      time: time.getTime(),
    });
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(`Computer not exists!`);
  });

  it("should not allow in computer not set to user", async () => {
    const time = new Date(2022, 3, 25);
    time.setHours(8);
    time.setMinutes(0);
    await request(app).post("/computers").send({
      hostname: "COM02",
      department: "COMPRAS",
    });
    const res = await request(app).get("/access").send({
      userId: "1",
      hostname: "COM02",
      time: time.getTime(),
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.canAccess).toEqual(false);
  });

  it("should not allow at day out of user journey", async () => {
    const time = new Date(2022, 3, 23);
    time.setHours(8);
    time.setMinutes(0);
    const res = await request(app).get("/access").send({
      userId: "1",
      hostname: "COM01",
      time: time.getTime(),
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body.canAccess).toEqual(false);
  });

  it("should not allow at time under of user journey", async () => {
    const time = new Date(2022, 3, 25);
    time.setHours(7);
    time.setMinutes(59);

    const res = await request(app).get("/access").send({
      userId: "1",
      hostname: "COM01",
      time: time.getTime(),
    });
    console.log(res.body);
    expect(res.statusCode).toEqual(200);
    expect(res.body.canAccess).toEqual(false);
  });

  it("should not allow at time over of user journey", async () => {
    const time = new Date(2022, 3, 25);
    time.setHours(17);
    time.setMinutes(1);

    const res = await request(app).get("/access").send({
      userId: "1",
      hostname: "COM01",
      time: time.getTime(),
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.canAccess).toEqual(false);
  });

  it("should allow access to user", async () => {
    const time = new Date(2022, 3, 25);
    time.setHours(17);
    time.setMinutes(0);

    const res = await request(app).get("/access").send({
      userId: "1",
      hostname: "COM01",
      time: time.getTime(),
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.canAccess).toEqual(true);
  });
});
