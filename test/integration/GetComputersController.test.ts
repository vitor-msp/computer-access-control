import express from "express";
import request from "supertest";
import { AppController } from "../../src/app";
import { Computer } from "../../src/model/entities/Computer";

let app: express.Application;
beforeEach(() => {
  app = new AppController().express;
});

describe("Get computers from memory use case", () => {
  it("should get none computers", async () => {
    const res = await request(app).get("/computers");

    expect(res.statusCode).toEqual(200);
    const computers: Computer[] = res.body;
    expect(computers.length).toBe(0);
  });

  it("should get some computers", async () => {
    await request(app).post("/computers").send({
      hostname: "COM01",
      department: "COMPRAS",
    });
    await request(app).post("/computers").send({
      hostname: "COM02",
      department: "COMPRAS",
    });

    const res = await request(app).get("/computers");

    expect(res.statusCode).toEqual(200);
    const computers = res.body;
    expect(computers.length).toBe(2);
    expect(computers.at(0).hostname).toEqual("COM01");
    expect(computers.at(1).hostname).toEqual("COM02");
  });
});
