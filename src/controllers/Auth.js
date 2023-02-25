import { db } from '../database/db.js';

export async function postSingUp(req, res){
    const { name, email, password } = req.body;

    try {
        
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}