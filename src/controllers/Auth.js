import { db } from '../database/db.js';
import bcrypt from 'bcrypt';

export async function postSingUp(req, res){
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