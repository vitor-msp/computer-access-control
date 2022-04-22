import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import routes from "./routes";

export class AppController {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.database()
    this.routes();
  }

  middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
  }

  database(): void {
    mongoose.connect("mongodb://mongo:27017/computer-access-control", {
      // useNewUrlParser: true
    }, () => {
      console.log("Connected to MongoDB!")
    })
  }

  routes(): void {
    this.express.use(routes);
  }
}