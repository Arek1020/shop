import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Product } from "./entity/Product"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "AeRk1029",
    database: "shop",
    synchronize: false,
    logging: false,
    entities: [User, Product],
    migrations: [],
    subscribers: [],
})
