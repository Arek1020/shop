import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { User } from "../entity/User"
import * as bcrypt from "bcrypt"
import { config } from '../config'
import * as jwt from "jsonwebtoken"
export class UserController {

    private userRepository = AppDataSource.getRepository(User)

    async register(request: Request, response: Response, next: NextFunction) {
        let userRepository = AppDataSource.getRepository(User)

        if (request.body.password !== request.body.repeatPassword)
            return response.send({ err: true, msg: 'Podane hasła są różne.' })

        let dbUser = await userRepository.findOne({
            where: { email: request.body.email }
        })
        if (dbUser)
            return response.send({ err: true, msg: 'Istnieje już użytkownik z takim adresem email' })

        const user = Object.assign(new User(), {
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            userName: request.body.userName,
            email: request.body.email,
            password: bcrypt.hashSync(request.body.password, 10),
        })

        userRepository.save(user)

        return response.send({ msg: 'Pomyślnie utworzono użytkownika.' })
    }

    async login(request: any, response: Response, next: NextFunction) {
        let userRepository = AppDataSource.getRepository(User)
        let user = await userRepository.findOne({
            where: { email: request.body.email }
        })
        
        if (!user.id)
            return response.send({ msg: 'Brak użytkownika o takim adresie email.', err: true })

        // request.session.sid = 'asfafsd12321'
        request.session.save()
        delete user.password
        const token = jwt.sign({user}, config.secretkey);

        return response.send({ msg: 'Zalogowano pomyślnie.', token, user })
    }

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const user = await this.userRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

        const user = Object.assign(new User(), {
            firstName,
            lastName,
            age
        })

        return this.userRepository.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await this.userRepository.findOneBy({ id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.userRepository.remove(userToRemove)

        return "user has been removed"
    }

}