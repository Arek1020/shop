import { Router } from "express";
import type { Request, Response } from "express";
// import { cartController } from "controllers/user.controller";
import { CartController } from "./../controllers/CartController";
import { Middleware } from "../controllers/Middleware";

const router = Router();
const cartController = new CartController();
const middleware = new Middleware();

router.post('/', middleware.isAuthorize, cartController.get);
router.post('/update', middleware.isAuthorize, cartController.update);
router.post('/product/update', middleware.isAuthorize, cartController.update);


export default router;











