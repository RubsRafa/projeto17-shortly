import { db } from "../database/db.js";

export async function getUrlByIdValidation(req, res, next) {
    const { id } = req.params; 

    try {

        if (!id) return res.sendStatus(404);
        
        const idExist = await db.query('SELECT * FROM urls WHERE id = $1;', [id]);
        
        if (!idExist.rows[0]) return res.sendStatus(404);

        next(); 
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}