import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Cart } from "../entity/Cart"
import { User } from "../entity/User"
import Jimp = require("jimp")
import tools from "../utils/tools"
import * as moment from "moment"

export class CartController {

    public cartRepository = AppDataSource.getRepository(Cart)

    async get(request: Request, response: Response, next: NextFunction) {
        let cartRepository = AppDataSource.getRepository(Cart)

        const id = parseInt(request.body.id)

        let carts: any = []
        if (id)
            carts = await cartRepository.findOne({
                where: { id }
            })
        else
            carts = await cartRepository.find()

        return response.send(carts)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        let cartRepository = AppDataSource.getRepository(Cart)
        const {
            product,
            user,
            price,
            orderDetails
        } = request.body;

        const cart = Object.assign(new Cart(), {
            date: moment().format('YYYY-MM-DD HH:mm'),
            product,
            user,
            price,
            orderDetails
        })
        await cartRepository.save(cart)
        return response.status(200).send({ msg: 'Zapisano pomyślnie' })
    }


    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let CartToRemove = await this.cartRepository.findOneBy({ id })

        if (!CartToRemove) {
            return "this Cart not exist"
        }

        await this.cartRepository.remove(CartToRemove)

        return "Cart has been removed"
    }

}