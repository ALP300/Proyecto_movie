import { Router } from "express";

const router= Router();

router.get('/', (req, res) => res.render('index' ,{title:'Inicio'}));
router.get('/about', (req, res) => res.render('SobreNosotros' ,{title:'Sobre Nosotros'}));
router.get('/contact', (req, res) => res.render('Contactanos' ,{title:'Contacto'}));

export default router;