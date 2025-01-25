import pg from 'pg';
const {Client}= pg;

const config = {
    user: 'db_proyectomovie_user',
    host: 'dpg-cuaen83qf0us73c8jit0-a.oregon-postgres.render.com',
    database: 'db_proyectomovie',
    password: 'yvbG9nQ9DYUDZNwT3ggGAwGDJQonh1fX',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
}
export async function Conectar(params){
    const cliente = new Client(config);
    try{
        await cliente.connect();
        console.log('Conexión exitosa');
    }catch(error){
        console.log(error);
    }
}