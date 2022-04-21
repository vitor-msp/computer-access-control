import express from "express";
import request from "supertest";
import { AppController } from "../../src/app";

let app: express.Application;
beforeAll(() => {
  app = new AppController().express;
});

describe("Can user access computer in memory use case", () => {
  it("should not allow to user that not exists", async () => {});
  
  it("should not allow in computer that not exists", async () => {});
  
  it("should not allow in computer not set to user", async () => {});
  
  it("should not allow at time out of journey of user", async () => {});
  
  it("should allow access to user", async () => {});
  
});
