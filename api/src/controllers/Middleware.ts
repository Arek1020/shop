import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import * as bcrypt from "bcrypt"
import { config } from '../config/config'

export class Middleware {

    async isAuthorize(request: any, response: Response, next: NextFunction) {
        console.log(request.session)
        if(request.session.userId)
            return next()
        return response.status(403).send({ msg: 'Brak uprawnień.' })
    }

}