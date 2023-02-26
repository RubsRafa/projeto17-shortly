import { db } from "../database/db.js";

export async function getUsersMeValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');

    try {

        if (!authorization || authorization === '' || typeof(authorization) !== "string") return res.sendStatus(401);
        const tokenExist = await db.query('SELECT * FROM sessions WHERE token = $1;', [token]);

        if (!tokenExist.rows[0]) return res.sendStatus(401);
        
        res.locals.id = tokenExist.rows[0].id_user;

        next(); 

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}