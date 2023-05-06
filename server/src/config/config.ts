import dotenv from 'dotenv';

dotenv.config();

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'mo1175_staging'
const MONGO_PASSWORD = process.env.MONGO_PASSWORD  || '!Blueform13'
const MONGO_URL =  process.env.MONGO

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 3000


export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
}
