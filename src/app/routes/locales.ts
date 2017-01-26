import {Router, Request, Response, NextFunction} from 'express';
const locales = ["us-en"];

export class LocalesRouter {
  router: Router

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Locales.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(locales);
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const localeRoutes = new LocalesRouter();
localeRoutes.init();

export default localeRoutes.router;