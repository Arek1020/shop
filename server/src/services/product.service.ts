import Logger from "./../library/Logger";
import ProductModel from "./../models/product.model";

export class Product {
    name: string;
    email: string;
    password: string;
    // public async createUser(req: Request, res: Response) {
    //   const user = new User(req.body);
    //   await user.save();
    //   res.status(201).send(user);
    // }

    // public async fetchUsers(req: Request, res: Response) {
    //   const users = await User.find({});
    //   res.status(200).send(users);
    // }

    constructor(name: string, email: string, password: string) {
        Logger.log(`User ${name} is created`);
        this.name = name;
        this.email = email;
        this.password = password;
    }

    public static async get(opts: any) {
        console.log('ppp/', opts)

        const products = await ProductModel.get(opts);
        return products;
        // if (opts.id)
        //     return { name: 'test' }
    }
}