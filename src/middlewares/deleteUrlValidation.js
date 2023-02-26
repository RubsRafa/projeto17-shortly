import { db } from "../database/db.js";

export async function deleteUrlValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ','');

    try {

        if (!token || typeof(token) !== "string" || token === '') return res.sendStatus(401);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}