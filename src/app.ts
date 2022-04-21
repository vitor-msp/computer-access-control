import express from "express";
import cors from "cors";

import routes from "./routes";

// const app = express();

// app.use(cors())
// app.use(express.json())
// app.use(routes);

// export default app;

export class AppController {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes(): void {
    this.express.use(routes);
  }
}