import UserModels from "../models/User.js"; // Importa el modelo de usuario desde el archivo User.js.

// Función para crear un nuevo usuario
export const CreateUser = async (req, res) => { // Exporta la función CreateUser que es asíncrona y toma 'req' y 'res' como parámetros.
    try {
        const { name, lastname, email, phone } = req.body; // Desestructura el cuerpo de la solicitud para obtener los datos del usuario.
        
        const NewUser = new UserModels({ // Crea una nueva instancia del modelo UserModels con los datos proporcionados.
            name, // Asigna el nombre.
            lastname, // Asigna el apellido.
            email, // Asigna el correo electrónico.
            phone // Asigna el número de teléfono.
        });
        
        await NewUser.save(); // Guarda el nuevo usuario en la base de datos.
        
        res.status(200).json({ success: true, Message: 'User Created Successfully', NewUser }); // Responde con un estado 200 y un mensaje de éxito.
    } catch (e) { // Captura errores.
        console.log(e); // Imprime el error en la consola para depuración.
        
        res.status(500).json({ success: false, Message: 'Internal server Error', NewUser }); // Responde con un estado 500 y un mensaje de error si ocurre un problema.
    }
};

// Función para obtener todos los usuarios
export const GetUser = async (req, res) => { // Exporta la función GetUser que obtiene todos los usuarios.
    try {
        const user = await UserModels.find(); // Busca todos los usuarios en la base de datos.
        
        if (!user) { // Verifica si no se encontró ningún usuario.
            return res.status(404).json({ success: false, message: 'User not found' }); // Responde con un estado 404 si no se encontraron usuarios.
        }
        
        res.status(200).json({ success: true, user }); // Responde con un estado 200 y la lista de usuarios.
    } catch (e) { // Captura errores.
        console.log(e); // Imprime el error en la consola para depuración.
        
        return res.status(500).json({ success: false, message: "Internal Server Error" }); // Responde con un estado 500 en caso de error.
    }
};

// Función para actualizar un usuario
export const UpdateUser = async (req, res) => { // Exporta la función UpdateUser que actualiza un usuario existente.
    try {
        const UserId = req.params.id; // Obtiene el ID del usuario a actualizar desde los parámetros de la solicitud.
        
        const UpdateUser = await UserModels.findByIdAndUpdate(UserId, req.body, { new: true }); // Busca el usuario por ID y lo actualiza con los datos proporcionados. 'new: true' asegura que se devuelva el documento actualizado.
        
        if (!UpdateUser) { // Verifica si el usuario no fue encontrado.
            return res.status(404).json({ success: false, message: 'User not found' }); // Responde con un estado 404 si no se encontró el usuario.
        }
        
        res.status(200).json({ success: true, message: "User updated successfully", UpdateUser }); // Responde con un estado 200 y el usuario actualizado.
    } catch (e) { // Captura errores.
        console.log(e); // Imprime el error en la consola para depuración.
    }
};

// Función para obtener un usuario por ID
export const GetUserById = async (req, res) => { // Exporta la función GetUserById que obtiene un usuario específico por ID.
    try {
        const user = await UserModels.findById(req.params.id); // Busca el usuario por ID usando el modelo.
        
        if (!user) { // Verifica si no se encontró el usuario.
            return res.status(404).json({ success: false, message: 'User not found' }); // Responde con un estado 404 si no se encontró el usuario.
        }
        
        res.status(200).json({ success: true, user }); // Responde con un estado 200 y el usuario encontrado.
    } catch (e) { // Captura errores.
        console.log(e); // Imprime el error en la consola para depuración.
        return res.status(500).json({ success: false, message: "Internal Server Error" }); // Responde con un estado 500 en caso de error.
    }
};

// Función para eliminar un usuario
export const DeleteUser = async (req, res) => { // Exporta la función DeleteUser que elimina un usuario específico.
    try {
        const UserId = req.params.id; // Obtiene el ID del usuario a eliminar desde los parámetros de la solicitud.
        
        const DeletedUser = await UserModels.findOneAndDelete(UserId); // Busca y elimina el usuario por ID.
        
        if (!DeletedUser) { // Verifica si el usuario no fue encontrado.
            return res.status(404).json({ success: false, message: "User not found" }); // Responde con un estado 404 si no se encontró el usuario.
        }
        
        res.status(200).json({ success: true, message: 'User deleted successfully' }); // Responde con un estado 200 y un mensaje de éxito.
    } catch (e) { // Captura errores.
        console.log(e); // Imprime el error en la consola para depuración.
        return res.status(500).json({ success: false, message: "Internal Server Error" }); // Responde con un estado 500 en caso de error.
    }
};
