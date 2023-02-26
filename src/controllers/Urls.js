import { db } from "../database/db.js";
import { nanoid } from "nanoid";

export async function postUrlsShorten(req, res) {
    const { url } = req.body;
    const { id_user } = res.locals; 

    try {

        const shortUrl = nanoid();

        await db.query('INSERT INTO urls (url, "shortUrl", id_user) VALUES ($1, $2, $3);', [url, shortUrl, id_user]);

        const urlShorten = await db.query('SELECT * FROM urls WHERE url = $1;', [url]);

        return res.status(201).send({ id: urlShorten.rows[0].id, shortUrl: urlShorten.rows[0].shortUrl })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}
export async function getUrlById(req, res) {
    const { id } = req.params;

    try {

        const url = await db.query('SELECT * FROM urls WHERE id = $1;', [id]);

        return res.status(200).send(url.rows[0]);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}
export async function getUrlOpenShortUrl(req, res) {
    const { shortUrl } = req.params; 
    const { url } = res.locals;

    try {

        await db.query('UPDATE urls SET "visitCount" = $1 WHERE "shortUrl" = $2;', [url.visitCount + 1, shortUrl]);

        return res.redirect(200, url.url)
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}
export async function deleteUrl(req, res) {
    const { id } = req.params;

    try {
        
        await db.query('DELETE FROM urls WHERE id = $1;', [id]);
        return res.sendStatus(204);
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}