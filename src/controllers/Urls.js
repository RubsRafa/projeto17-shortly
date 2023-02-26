import { db } from "../database/db.js";
import { nanoid } from "nanoid";

export async function postUrlsShorten(req, res) {
    const { url } = req.body;

    try {

        const shortUrl = nanoid();

        await db.query('INSERT INTO urls (url, "shortUrl") VALUES ($1, $2);', [url, shortUrl]);

        const urlShorten = await db.query('SELECT * FROM urls WHERE url = $1;', [url]);

        return res.status(201).send({ id: urlShorten.rows[0].id, shortUrl: urlShorten.rows[0].shortUrl })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}