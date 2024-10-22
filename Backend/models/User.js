import mongoose from "mongoose"; // Importa Mongoose, que se utiliza para modelar los datos en MongoDB.

// Define un esquema de usuario utilizando mongoose.Schema. 
const userSchema = new mongoose.Schema({
    name: { // Define el campo 'name' en el esquema.
        type: String // Especifica que el tipo de datos es una cadena (String).
    },
    lastname: { // Define el campo 'lastname' en el esquema.
        type: String // Especifica que el tipo de datos es una cadena (String).
    },
    email: { // Define el campo 'email' en el esquema.
        type: String // Especifica que el tipo de datos es una cadena (String).
    },
    phone: { // Define el campo 'phone' en el esquema.
        type: String // Especifica que el tipo de datos es una cadena (String).
    }
}, { timestamps: true }); // La opción 'timestamps: true' añade automáticamente dos campos: 'createdAt' y 'updatedAt' a cada documento.

const UserModels = mongoose.model('user', userSchema); // Crea un modelo de Mongoose llamado 'UserModels' utilizando el esquema 'userSchema'. El primer argumento es el nombre del modelo en singular, y Mongoose lo pluraliza automáticamente al crear la colección en la base de datos.

export default UserModels; // Exporta el modelo UserModels para que pueda ser utilizado en otros archivos.
