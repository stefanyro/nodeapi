const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/',(req,res) => {
    res.render('usuarios/consultar');

}); 

router.get('/agregar',(req,res) => {
    res.render('usuarios/agregar');

}); 

router.get('/modificar',(req,res) => {
    res.render('usuarios/modificar');

});

router.get('/eliminar',(req,res) => {
    res.render('usuarios/eliminar');

});



module.exports=router;