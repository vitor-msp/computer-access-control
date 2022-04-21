import express from "express";
import request from "supertest";
import { AppController } from "../../src/app";

let app: express.Application;
beforeAll(() => {
  app = new AppController().express;
});

describe("Get user data from memory use case", () => {
  it("should not get data from user that not exists", async () => {
    const res = await request(app).get("/users").send({
      id: "1",
    });

    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toEqual(`User not exists!`);
  });

  it("should get correctly data from user", async () => {
    await request(app).post("/users").send({
      id: "1",
      name: "Fulano",
    });
    const res = await request(app).get("/users").send({
      id: "1",
    });

    expect(res.statusCode).toEqual(200);
    expect(res.body.id).toEqual('1');
    expect(res.body.name).toEqual('Fulano');
  });
});
