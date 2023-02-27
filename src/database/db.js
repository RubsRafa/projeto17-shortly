import pg from "pg";
import dotenv from "dotenv";
dotenv.config(); 

const { Pool } = pg;

// const configDatabase = {
//     connectionString: process.env.DATABASE_URL,
//     ...(process.env.NODE_ENV === "prod" && {
//         ssl: {
//             rejectUnauthorized: false,
//         },
//     }),
// };

// if (process.env.NODE_ENV === 'prod') configDatabase.ssl = true;

export const db = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});