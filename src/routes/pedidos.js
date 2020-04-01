const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/',(req,res) => {
    res.render('pedidos/agregar');

});

router.get('/eliminar',(req,res) => {
    res.render('pedidos/eliminar');
});

router.get('/modificar',(req,res) => {
    res.render('pedidos/modificar');
});

router.get('/consultar',(req,res) => {
    res.render('pedidos/consultar');
});

module.exports=router;