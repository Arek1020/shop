"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
var users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];
app.get('/users', function (req, res) {
    res.json(users);
});
app.post('/users', function (req, res) {
    var newUser = req.body;
    users.push(newUser);
    res.json(newUser);
});
app.put('/users/:id', function (req, res) {
    var id = parseInt(req.params.id);
    var aa = { name: 'df', email: 'df', id: 2 };
    var updatedUser = req.body;
    users = users.map(function (user) { return (user.id === id ? updatedUser : user); });
    res.json(aa);
});
app.delete('/users/:id', function (req, res) {
    var id = parseInt(req.params.id);
    users = users.filter(function (user) { return user.id !== id; });
    res.sendStatus(204);
});
app.listen(3000, function () {
    console.log('Server is listening on port 3000');
});
