import { Router } from "express";
import { getUrlById, postUrlsShorten } from "../controllers/Urls.js";
import { getUrlByIdValidation } from "../middlewares/getUrlByIdValidation.js";
import { postUrlShortValidation } from "../middlewares/postUrlShortValidation.js";

const urlRouter = Router();

urlRouter.post('/urls/shorten', postUrlShortValidation, postUrlsShorten);
urlRouter.get('/urls/:id', getUrlByIdValidation, getUrlById);

export default urlRouter;