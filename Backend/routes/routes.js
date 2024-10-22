import express from 'express'; // Importa Express, un framework para Node.js que facilita la creación de aplicaciones web y APIs.
import { CreateUser, GetUser, UpdateUser, DeleteUser, GetUserById } from '../controllers/UserController.js'; // Importa las funciones del controlador que manejan la lógica de la API para los usuarios.

const routers = express.Router(); // Crea un nuevo enrutador de Express, que permite definir rutas y manejadores.

routers.post('/create', CreateUser); // Define una ruta POST en '/create' que ejecuta la función CreateUser para crear un nuevo usuario.
routers.get('/get', GetUser); // Define una ruta GET en '/get' que ejecuta la función GetUser para obtener todos los usuarios.
routers.get('/get/:id', GetUserById); // Define una ruta GET en '/get/:id' que ejecuta la función GetUserById para obtener un usuario específico por su ID.
routers.put('/update/:id', UpdateUser); // Define una ruta PUT en '/update/:id' que ejecuta la función UpdateUser para actualizar un usuario específico por su ID.
routers.delete('/delete/:id', DeleteUser); // Define una ruta DELETE en '/delete/:id' que ejecuta la función DeleteUser para eliminar un usuario específico por su ID.

export default routers; // Exporta el enrutador para que pueda ser utilizado en otros archivos de la aplicación.
