import { Router, Request, Response } from 'express';

import { Domain } from "../models/Domain";
import * as DomainController from "../controllers/DomainController";

class DomainRouter {

  router: Router;

  constructor() {
    this.router = Router({mergeParams: true});
    this.init();
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', DomainController.getAll);
    this.router.get('/:name\.:ext', DomainController.getByName);
  }
}

const domainRoutes = new DomainRouter();
const router = domainRoutes.router;

export default router;
