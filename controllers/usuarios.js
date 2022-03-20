const { response } = require('express');

const usuariosGet = (req,res = response) => {

    const { q="",nombre="no name",page=1,limit=10,apikey="" } = req.query;

    res.json({
        ok:true,
        msg:'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req,res = response) => {

    const { id } = req.params;

    res.json({
        ok:true,
        msg:'Put API - controlador',
        id
    });
}

const usuariosPost = (req,res = response) => {

    const {nombre,edad} = req.body;

    res.json({
        ok:true,
        msg:'POST API - controlador f',
        nombre,
        edad
    });
}

const usuariosDelete = (req,res = response) => {

    res.json({
        ok:true,
        msg:'Delete API - controlador'
    });
}

const usuariosPatch = (req,res = response) => {

    res.json({
        ok:true,
        msg:'Patch API - controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}