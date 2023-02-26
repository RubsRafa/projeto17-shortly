import { db } from "../database/db.js";

export async function getUrlOpenShortUrlValidation(req, res, next) {
    const { shortUrl } = req.params; 

    try {

        const shortUrlExist = await db.query('SELECT * FROM urls WHERE "shortUrl" = $1;', [shortUrl]);
        if (!shortUrlExist.rows[0]) return res.sendStatus(404);

        res.locals.url = shortUrlExist.rows[0];

        next(); 
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}