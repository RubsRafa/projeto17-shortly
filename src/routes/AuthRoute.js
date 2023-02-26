import { Router } from "express";
import { postSignUpValidation } from "../middlewares/postSignUpValidation.js";
import { getUsersMe, postSignIn, postSignUp } from "../controllers/Auth.js";
import { validateSchema } from '../middlewares/validateSchema.js';
import { userSchema } from '../schemas/UsersSchema.js';
import { postSignInValidation } from "../middlewares/postSignInValidation.js";
import { getUsersMeValidation } from "../middlewares/getUsersMeValidation.js"

const authRouter = Router();

authRouter.post('/signup', postSignUpValidation, validateSchema(userSchema), postSignUp);
authRouter.post('/signin', postSignInValidation, postSignIn);
authRouter.get('/users/me', getUsersMeValidation, getUsersMe);

export default authRouter; 