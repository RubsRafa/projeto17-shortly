import joi from "joi";

export const userSchema = joi.object({
    name: joi.string().not('').required(),
    email: joi.string().not('').required(),
    password: joi.string().not('').required(),
    confirmPassword: joi.string().not('').required()
});