import express from 'express';
import { CreateUser, GetUser, UpdateUser, DeleteUser, GetUserById } from '../controllers/UserController.js';
const routers = express.Router()

routers.post('/create', CreateUser);
routers.get('/get', GetUser);
routers.get('/get/:id', GetUserById); // Cambia esto a GET para obtener un usuario por ID
routers.put('/update/:id', UpdateUser); // Esta ruta está bien
routers.delete('/delete/:id', DeleteUser);

export default routers;
