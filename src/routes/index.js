import { Router } from "express";
import { ConsultarPeliculas } from "../public/services/conexion.js";
const router= Router();

router.get('/', (req, res) => res.render('index' ,{title:'Inicio'}));
router.get('/about', (req, res) => res.render('SobreNosotros' ,{title:'Sobre Nosotros'}));
router.get('/contact', (req, res) => res.render('Contactanos' ,{title:'Contacto'}));
router.get('/catalogo', (req, res) => res.render('Catalogo' ,{title:'Catálogo'}));
router.get('/Titanic', (req, res) => res.render('infoTitanic' ,{title:'Titanic'}));

router.get('/api/get-peliculas', async (req, res) => {
   const peliculas= await ConsultarPeliculas(); 
   res.status(200).json(peliculas);
});
export default router;