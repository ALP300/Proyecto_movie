import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js';
import { Conectar } from './public/services/conexion.js';
import cors from 'cors'; // Importa el paquete CORS

const app = express();

// Configuración básica
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Configurar CORS (Permitir solicitudes desde cualquier origen)
app.use(cors());

// Usar enrutador y archivos estáticos
app.use(router);
app.use(express.static(join(__dirname, 'public')));

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

// Conexión a la base de datos
Conectar();
