import { db } from '../database/db.js';

export async function postUrlShortValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    const { url } = req.body;

    try {
        if (!authorization) return res.sendStatus(401);

        if (!token || token === "" || typeof(token) !== "string") return res.sendStatus(401);
        if (!url || url === "" || typeof(url) !== "string") return res.sendStatus(422);

        const urlFormat = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/i;
        if (!urlFormat.test(url)) return res.sendStatus(422);

        const tokenExist = await db.query('SELECT * FROM sessions WHERE token = $1;', [token]);
        if (!tokenExist.rows[0]) return res.sendStatus(401);

        const urlShortExist = await db.query('SELECT * FROM urls WHERE url = $1;', [url]);
        if (urlShortExist.rows[0]) return res.sendStatus(409);

        next(); 
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}