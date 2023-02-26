import { db } from "../database/db.js";

export async function deleteUrlValidation(req, res, next) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ','');
    const { id } = req.params; 

    try {

        if (!token || typeof(token) !== "string" || token === '') return res.sendStatus(401);
        
        const userExist = await db.query('SELECT * FROM sessions WHERE token = $1;', [token]);

        if (!userExist.rows[0]) return res.sendStatus(401);

        const idUser = userExist.rows[0].id;

        const urlFromUser = await db.query('SELECT * FROM urls WHERE id = $1;', [id]);
        if (!urlFromUser.rows[0]) return res.sendStatus(404);
    
        if (urlFromUser.rows[0].id_user !== idUser) return res.sendStatus(401);
        
        next(); 
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}