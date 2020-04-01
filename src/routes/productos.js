const express = require('express');
const router = express.Router();
const pool = require('../database')

router.get('/', async(req,res) => {
    const user = await pool.query('select * from productos')
    res.render('productos/consultar',{user});
    const {nombre, edad}= req.body
    const registrar = {
        nombre,
        edad
    }
});

router.post('/agregar', async(req,res) => {

    const {nombre, valor, codigo} = req.body;
    const newProd = {nombre, valor, codigo}

    await pool.query('insert into productos set ?', [newProd]);

    res.redirect('productos/agregar');
}); 


router.get('/modificar',(req,res) => {
    res.render('productos/modificar');

}); 

router.get('/delete/:id_producto', async(req,res)=>{
    const {id_producto} = req.params;
    const user = await pool.query('delete from productos where id_producto=?',[id_producto]);
    res.redirect('productos/consultar');
}); 


module.exports=router;