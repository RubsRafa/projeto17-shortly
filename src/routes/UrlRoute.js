import { Router } from "express";
import { getUrlById, getUrlOpenShortUrl, postUrlsShorten } from "../controllers/Urls.js";
import { getUrlByIdValidation } from "../middlewares/getUrlByIdValidation.js";
import { getUrlOpenShortUrlValidation } from "../middlewares/getUrlOpenShortUrlValidation.js";
import { postUrlShortValidation } from "../middlewares/postUrlShortValidation.js";

const urlRouter = Router();

urlRouter.post('/urls/shorten', postUrlShortValidation, postUrlsShorten);
urlRouter.get('/urls/:id', getUrlByIdValidation, getUrlById);
urlRouter.get('/urls/open/:shortUrl', getUrlOpenShortUrlValidation, getUrlOpenShortUrl);

export default urlRouter;