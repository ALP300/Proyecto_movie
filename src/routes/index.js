import { Router } from "express";
import bodyParser from "body-parser";
import { ConsultarPeliculas } from "../public/services/conexion.js";
import { RegistrarCliente } from '../public/services/conexion.js';
import {IniciarSesionCliente} from '../public/services/conexion.js';
const router= Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.get('/', (req, res) => res.render('index' ,{title:'Inicio'}));
router.get('/about', (req, res) => res.render('SobreNosotros' ,{title:'Sobre Nosotros'}));
router.get('/contact', (req, res) => res.render('Contactanos' ,{title:'Contacto'}));
router.get('/catalogo', (req, res) => res.render('Catalogo' ,{title:'Catálogo'}));
router.get('/registrarCliente', (req, res) => res.render('registrarCliente' ,{title:'Registrar Cliente'}));
router.get('/Titanic', (req, res) => res.render('infoTitanic' ,{title:'Titanic'}));
router.get('/iniciarSesion', (req, res) => res.render('iniciarSesion' ,{title:'IniciarSesion'}));

router.get('/api/get-peliculas', async (req, res) => {
   const peliculas= await ConsultarPeliculas(); 
   res.status(200).json(peliculas);
});

router.post('/api/register', async (req, res) => {
   const { username, password, email } = req.body;

   
   if (!username || !password || !email) {
       return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
   }

   
   const resultado = await RegistrarCliente(username, password, email);

   if (resultado.success) { 
       res.status(201).json(resultado);
   } else {
       res.status(400).json(resultado);
   }
});


router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/api/login', async (req, res) => {
   const { username, password } = req.body;

   if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
   }

   const resultado = await IniciarSesionCliente(username, password);

   if (resultado.success) {
      res.status(200).json(resultado);
   } else {
      res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
   }
});


export default router;