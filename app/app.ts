import * as bodyParser from "body-parser";
import * as express from "express";
import * as logger from "morgan";

import DomainsRouter from "./routes/domains";

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  // Configure Express middleware.
  private middlewares(): void {
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
    this.express.use(logger("dev"));
  }

  // Configure API endpoints.
  private routes(): void {
    this.express.use("/about", (request, response) => {
      response.send("Welcome to my api");
    });
    this.express.use("/api/domains(.:ext)?", DomainsRouter);
    this.express.use("*", (request, response) => {
      response.status(404).json({code: 404, message: "not found"});
    });
  }

}

export default new App().express;
