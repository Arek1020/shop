import { Router } from "express";
import type { Request, Response } from "express";
// import { productController } from "controllers/user.controller";
import { ProductController } from "./../controllers/product.controller";

const router = Router();
const productController = new ProductController();

router.get('/', productController.get);
router.post('/', productController.edit);
router.post('/:id', productController.edit);
// router.post('/users', productController.delete);

// router.post('/users', (req: Request, res: Response) => {
//   const newUser: User = req.body;
//   users.push(newUser);
//   res.json(newUser);
// });

// router.put('/users/:id', (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);

//   const aa: User = { name: 'df', email: 'df', id: 2 }
//   const updatedUser: User = req.body;
//   users = users.map((user) => (user.id === id ? updatedUser : user));
//   res.json(aa);
// });

// router.delete('/users/:id', (req: Request, res: Response) => {
//   const id = parseInt(req.params.id);
//   users = users.filter((user) => user.id !== id);
//   res.sendStatus(204);
// });


export default router;