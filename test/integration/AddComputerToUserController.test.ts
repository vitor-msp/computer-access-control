import express from "express";
import request from "supertest";
import { AppController } from "../../src/app";

let app: express.Application;
beforeAll(() => {
  app = new AppController().express;
});

describe("Add computer to user in memory use case", () => {
  it("should not add to user that not exists", async () => {
    const res = await request(app).put("/users/add-computer").send({
      userId: "1",
      hostname: "COM01",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(`User not exists!`);
  });

  it("should not add computer that not exists", async () => {
    await request(app).post("/users").send({
      id: "1",
      name: "Fulano",
    });

    const res = await request(app).put("/users/add-computer").send({
      userId: "1",
      hostname: "COM01",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(`Computer not exists!`);
  });

  it("should add correctly", async () => {
    await request(app).post("/computers").send({
      hostname: "COM01",
      department: "COMPRAS",
    });

    const res = await request(app).put("/users/add-computer").send({
      userId: "1",
      hostname: "COM01",
    });

    expect(res.statusCode).toEqual(200);
  });
});
