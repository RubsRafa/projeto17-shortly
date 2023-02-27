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
export async function getUsersMe(req, res) {
    const { id } = res.locals; 

    try {
        console.log('chegou aqui')

        // const user = await db.query('SELECT * FROM users WHERE id = $1;', [id_user]);
        const usersUrls = await db.query('SELECT id, "shortUrl", url, "visitCount" FROM urls WHERE id_user = $1;', [id]);

        const visits = await db.query('SELECT SUM("visitCount") FROM urls WHERE id_user = $1;', [id])

        const userinfo = await db.query('SELECT id, name FROM users WHERE id = $1;', [id])
    
        const myUrls = { ...userinfo.rows[0], 
            visitCount: Number(visits.rows[0].sum),
            shortenedUrls: usersUrls.rows
        }

        return res.send(myUrls)

    } catch (error) {
        console.log(error);
        return res.status(500).send(error); 
    }
}
export async function getRanking(req, res) {
    try {

        const ranking = await db.query('SELECT users.id, users.name, count(urls.id_user) AS "linksCount", sum(urls."visitCount") AS "visitCount" FROM users LEFT JOIN urls ON urls.id_user = users.id GROUP BY users.id ORDER BY "visitCount" desc LIMIT 10;');

        return res.send(ranking.rows);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error); 
    }
}