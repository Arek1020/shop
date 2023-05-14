import type { Request, Response } from "express";
import { User } from "./../services/user.service";



export class UserController {
  public async get(req: Request, res: Response) {
    // const user = new User();
    console.log('ddd', req.body)
    let users = await User.get({ id: req.body.id })
    return res.send(users);
  }
  public async edit(req: Request, res: Response) { }
  public async delete(req: Request, res: Response) { }

  // public async createUser(req: Request, res: Response) {
  //   // const user = new User(req.body);
  //   // await user.save();
  //   // res.status(201).send(user);
  //   return res.send()
  // }

  // public async fetchUsers(req: Request, res: Response) {
  //   // const users = await User.find({});
  //   res.status(200).send();
  // }
}