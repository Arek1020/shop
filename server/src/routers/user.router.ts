import { Router } from "express";
import type { Request, Response } from "express";
// import { UsersController } from "controllers/user.controller";
import { UserController } from "./../controllers/user.controller";

const router = Router();
const usersController = new UserController();

router.get('/', usersController.get);
router.post('/', usersController.edit);
router.post('/:id', usersController.edit);
// router.post('/users', usersController.delete);

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