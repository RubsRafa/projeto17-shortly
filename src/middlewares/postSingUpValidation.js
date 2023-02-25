import { db } from "../database/db.js";

export async function postSingUpValidation(req, res, next) {
    const { name, email, password, confirmPassword } = req.body; 

    try {

        if (!name || name === '' || typeof(name) !== "string") return res.sendStatus(422);
        if (!email || email === '' || typeof(email) !== "string") return res.sendStatus(422);
        if (!password || password === '' || typeof(password) !== "string") return res.sendStatus(422);
        if (!confirmPassword || confirmPassword === '' || typeof(confirmPassword) !== "string") return res.sendStatus(422);

        if (password !== confirmPassword) return res.sendStatus(422);

        const emailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!emailFormat.test(email)) return res.sendStatus(422);

        const userExist = await db.query('SELECT * FROM users WHERE email = $1;', [email]);
        console.log('teste', userExist)
        if (userExist.rowCount !== 0) return res.sendStatus(409);

        next(); 
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}