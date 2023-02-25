import { Router } from "express";
import { postSingUpValidation } from "../middlewares/postSingUpValidation.js";
import { postSingUp } from "../controllers/Auth.js";
import { validateSchema } from '../middlewares/validateSchema.js';
import { userSchema } from '../schemas/UsersSchema.js';

const authRouter = Router();

authRouter.post('/signup', postSingUpValidation, validateSchema(userSchema), postSingUp);

export default authRouter; 