// Importa la función DbConnection desde el módulo db.js que se encarga de establecer la conexión con la base de datos.
import DbConnection from './db/db.js'

// Importa dotenv para manejar las variables de entorno definidas en un archivo .env.
import dotenv from 'dotenv'

// Importa las rutas definidas en el módulo routes.js.
import routers from './routes/routes.js';

// Importa cors para habilitar el uso de CORS (Cross-Origin Resource Sharing).
import cors from 'cors'

// Importa express para crear y manejar la aplicación web.
import express from 'express'

// Carga las variables de entorno desde el archivo .env al entorno de ejecución.
dotenv.config()

// Crea una instancia de la aplicación Express.
const app = express()

// Establece la conexión a la base de datos mediante la función DbConnection.
DbConnection();

// Middleware para parsear el cuerpo de las solicitudes JSON.
app.use(express.json())

// Middleware para habilitar CORS, lo que permite que la aplicación acepte solicitudes desde otros dominios.
app.use(cors())

// Define la ruta base para las APIs. Todas las rutas definidas en routers estarán disponibles en el prefijo /api.
app.use('/api', routers)

// Inicia el servidor Express y comienza a escuchar en el puerto definido en las variables de entorno.
app.listen(process.env.PORT, () => {
    // Cuando el servidor comienza a escuchar, se imprime en la consola un mensaje que indica el puerto.
    console.log(`Puerto Siendo escuchado en el puerto ${process.env.PORT}`);
})
