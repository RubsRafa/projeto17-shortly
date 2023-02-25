import { db } from '../database/db.js';
import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';

export async function postSignUp(req, res){
    const { name, email, password } = req.body;
    const passwordHashed = bcrypt.hashSync(password, 10);

    try {

        await db.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3);', [name, email, passwordHashed]);

        return res.sendStatus(201);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}
export async function postSignIn(req, res) {
    const user = res.locals.user;

    try {

        const tokenUserExist = await db.query('SELECT * FROM sessions WHERE id_user = $1;', [user.id]);

        if (tokenUserExist.rowCount !== 0) {
            await db.query('DELETE FROM sessions WHERE id_user = $1;', [user.id]);
        }

        const token = uuid();
        await db.query('INSERT INTO sessions (id_user, token) VALUES ($1, $2);', [user.id, token]);

        return res.status(200).send({ token });

    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}