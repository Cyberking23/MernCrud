import mongoose from "mongoose"; // Importa Mongoose, una biblioteca para modelar datos en MongoDB.

const DbConnection = async () => { // Define una función asíncrona llamada DbConnection para establecer la conexión a la base de datos.
    try {
        mongoose.connect(process.env.DB_URL); // Intenta conectarse a la base de datos utilizando la URL de conexión almacenada en las variables de entorno (process.env.DB_URL).
        
        console.log('Mongo is connected'); // Si la conexión es exitosa, imprime un mensaje en la consola indicando que MongoDB está conectado.
    } catch (e) { // Captura cualquier error que ocurra durante la conexión.
        console.log(e); // Imprime el error en la consola para depuración.
    }
}

export default DbConnection; // Exporta la función DbConnection para que pueda ser utilizada en otros archivos.
