import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Product } from "../entity/Product"
import { User } from "../entity/User"

export class ProductController {

    public productRepository = AppDataSource.getRepository(Product)

    async get(request: Request, response: Response, next: NextFunction) {
        let productRepository = AppDataSource.getRepository(Product)

        const id = parseInt(request.body.id)

        let products: any = []
        if (id)
            products = await productRepository.findOne({
                where: { id }
            })
        else
            products = await productRepository.find()

        return response.send(products)
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return this.productRepository.find()
    }


    async save(request: Request, response: Response, next: NextFunction) {
        const {
            name,
            description,
            price,
            image
        } = request.body;

        const product = Object.assign(new Product(), {
            name,
            description,
            price,
            image
        })

        return this.productRepository.save(product)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let productToRemove = await this.productRepository.findOneBy({ id })

        if (!productToRemove) {
            return "this product not exist"
        }

        await this.productRepository.remove(productToRemove)

        return "product has been removed"
    }

}