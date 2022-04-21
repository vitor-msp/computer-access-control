import express from "express";
import request from "supertest";
import { AppController } from "../../src/app";

let app: express.Application
beforeEach(() => {
  app = new AppController().express;
});

describe("Add computer to memory use case", () => {
  it("should add some computers correcly", async () => {
    const res1 = await request(app).post("/computers").send({
      hostmane: "COM01",
      department: "COMPRAS",
    });
    const res2 = await request(app).post("/computers").send({
      hostname: "COM02",
      department: "COMPRAS",
    });

    expect(res1.statusCode).toEqual(201);
    expect(res2.statusCode).toEqual(201);
  });

  it("should not add same computer", async () => {
    await request(app).post("/computers").send({
      hostmane: "COM01",
      department: "COMPRAS",
    });

    const res = await request(app).post("/computers").send({
      hostmane: "COM01",
      department: "COMPRAS",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toBe(`Computer already exists!`);
  });
});
