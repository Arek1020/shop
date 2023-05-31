
const MONGO_USERNAME = process.env.MONGO_USERNAME || ''
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || ''
const MONGO_URL = process.env.MONGO

const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 8000


export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    },
    // mysql: {
    //     DB_HOST: '127.0.0.1',
    //     DB_USER: 'root',
    //     DB_PASS: 'root',
    //     DB_NAME: 'shop',
    //     DB_CONNECTION_LIMIT: 10
    // },
    db: {
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "AeRk1029",
        database: "shop",
    },
    viewUrl: 'http://localhost:3000',
    secretkey: 'sadfy7847h287wf8sj'
}