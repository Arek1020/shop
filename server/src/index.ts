import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from './config/config';
import Logger from './library/Logger';

mongoose.connect(String(config.mongo.url))
  .then(() => Logger.info('succesfully connect to mongo'))
  .catch(() => Logger.error('error connect to mongo'))

interface User {
  id: number;
  name: string;
  email: string;
}

const app = express();
app.use(express.json());

let users: User[] = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];

app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

app.post('/users', (req: Request, res: Response) => {
  const newUser: User = req.body;
  users.push(newUser);
  res.json(newUser);
});

app.put('/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const aa: User = { name: 'df', email: 'df', id: 2 }
  const updatedUser: User = req.body;
  users = users.map((user) => (user.id === id ? updatedUser : user));
  res.json(aa);
});

app.delete('/users/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  users = users.filter((user) => user.id !== id);
  res.sendStatus(204);
});

app.listen(config.server.port, () => {
  Logger.success('Server is listening on port ' + config.server.port);
});
