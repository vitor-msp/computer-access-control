import express from "express";
import request from "supertest";
import { AppController } from "../../src/app";

let app: express.Application;
beforeAll(() => {
  app = new AppController().express;
});

describe("Add user to memory use case", () => {
  it("should add some users correcly", async () => {
    const res1 = await request(app).post("/users").send({
      id: "1",
      name: "Fulano",
    });
    const res2 = await request(app).post("/users").send({
      id: "2",
      name: "Ciclano",
    });

    expect(res1.statusCode).toEqual(201);
    expect(res2.statusCode).toEqual(201);
  });

  it("should not add same user", async () => {

    const res = await request(app).post("/users").send({
      id: "1",
      name: "Ciclano",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toBe(`User already exists!`);
  });
});
