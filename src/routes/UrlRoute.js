import { Router } from "express";
import { postUrlsShorten } from "../controllers/Urls.js";
import { postUrlShortValidation } from "../middlewares/postUrlShortValidation.js";

const urlRouter = Router();

urlRouter.post('/urls/shorten', postUrlShortValidation, postUrlsShorten);

export default urlRouter;