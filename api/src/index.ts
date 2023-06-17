import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"
import { Product } from "./entity/Product"
import { config } from './config';
import * as cors from 'cors';
import * as session from 'express-session';
import * as path from 'path'
// import * as pgSession from 'connect-pg-simple';


import { Pool } from 'pg';
import * as pgSession from 'connect-pg-simple';
import * as cookieParser from 'cookie-parser';

const sessionPool = require('pg').Pool

import indexRouter from './routers/IndexRouter'
import userRouter from './routers/UserRouter'
import productRouter from './routers/ProductRouter'
import cartRouter from './routers/CartRouter'


const server = {
    init: async () => {
        await AppDataSource.initialize()
        process.env.dirname = __dirname
        // create express app
        const app = express()

        const pool = new Pool({
            user: config.db.username,
            password: config.db.password,
            host: config.db.host,
            port: 5432,
            database: config.db.database,
        });
        // Create a session store using connect-pg-simple
        const pgSessionStore = pgSession(session);
        app.use(cors({
            origin: config.viewUrl,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
            allowedHeaders: ['Content-Type', 'Authorization'],
            // credentials: true
        }));

        app.use(express.static(path.join(__dirname, 'uploads')));

        app.use(
            session({
                key: 'sid',
                store: new pgSessionStore({
                    pool,
                    tableName: 'session', // Name of the table to store sessions
                }),
                secret: 'your-secret', // Replace with your own secret
                resave: false,
                saveUninitialized: false,
                cookie: { domain: '', secure: false }, // Set "secure: true" for HTTPS
            })
        );
        app.use(cookieParser());

        app.use(bodyParser.json())



        // app.use(session({
        //     key: 'sid',
        //     secret: 'secret',
        //     resave: false,
        //     saveUninitialized: false,
        //     cookie: {
        //         secure: true,
        //         domain: 'localhost',
        //     },
        //     store: sessionStore
        // }));

        app.use((req: any, res: Response, next: Function) => {
            req.session.sid = 'UfOLvYjD6DhRfvpvKhZSPOxVLfgRz2Mz'
            return next()
        });

        app.use('/', indexRouter);
        app.use(['/user', '/users'], userRouter);
        app.use(['/product', '/products'], productRouter);
        app.use(['/cart', '/carts'], cartRouter);


        app.use((req: Request, res: Response, next: Function) => {
            return res.sendStatus(404)
        });

        // start express server
        app.listen(config.server.port, () => {
            console.log('Server is listening on port ' + config.server.port);
        });

        // insert new users for test
        // await AppDataSource.manager.save(
        //     AppDataSource.manager.create(Product, {
        //         name: 'test',
        //         description: 'opissss',
        //         price: 213,
        //         image: '/saf/sd'
        //     })
        // )

        // await AppDataSource.manager.save(
        //     AppDataSource.manager.create(User, {
        //         firstName: "Phantom",
        //         lastName: "Assassin",
        //         age: 24
        //     })
        // )



    }
}


server.init();

