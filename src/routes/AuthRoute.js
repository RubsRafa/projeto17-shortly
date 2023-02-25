import { Router } from "express";
import { postSignUpValidation } from "../middlewares/postSignUpValidation.js";
import { postSignUp } from "../controllers/Auth.js";
import { validateSchema } from '../middlewares/validateSchema.js';
import { userSchema } from '../schemas/UsersSchema.js';

const authRouter = Router();

authRouter.post('/signup', postSignUpValidation, validateSchema(userSchema), postSignUp);

export default authRouter; 