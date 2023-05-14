import Logger from "./../library/Logger";
import UserModel from "models/user.model";

export class User {
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

    public static  get = async (opts: any) => {
        console.log('ppp/', opts)
        if (opts.id)
            return { name: 'test' }
    }
}