import type { Request, Response } from "express";
import { User } from "./../services/user.service";
import { Product } from "./../services/product.service";



export class ProductController {
  public async get(req: Request, res: Response) {
    // const user = new User();
    console.log('ddd', req.body)
    let products = await Product.get({ id: req.body.id })
    return res.send(products);
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