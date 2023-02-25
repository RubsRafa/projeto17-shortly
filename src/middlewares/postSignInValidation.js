import { db } from "../database/db.js";
import bcrypt from 'bcrypt';

export async function postSignInValidation(req, res, next) {
    const { email, password } = req.body;

    try {

        if (!email || email === '' || typeof (email) !== "string") return res.sendStatus(422);
        if (!password || password === '' || typeof (password) !== "string") return res.sendStatus(422);

        const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailFormat.test(email)) return res.sendStatus(422);

        const userExist = await db.query('SELECT * FROM users WHERE email = $1;', [email]);
        if (userExist.rowCount === 0) return res.sendStatus(401);

        if (!bcrypt.compareSync(password, userExist.rows[0].password)) return res.sendStatus(401);

        res.locals.user = userExist.rows[0];
        next();

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}