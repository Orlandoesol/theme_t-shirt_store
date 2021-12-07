import express from 'express';
import { Mongoose } from 'mongoose';
// Guardar imagenes en carpeta del proyecto
const upload = require('../libs/storage')
const router = express.Router();
// importar el modelo camiseta
import User from '../models/user';

// Agregar una camiseta

router.post('/nuevo-usuario', upload.single('imgUrl'), async(req, res) => {
    const body = req.body;
    // const pathImg = req.file.path.replaceAll("\\", "/").replace("public/", "");
    // body.imgUrl = pathImg;
    try {
        console.log(req.file);
        console.log(body);
        const camisetaDB = await User.create(body);
        res.status(200).json(camisetaDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
    // if (req.file) {
    //     const {filename} = req.file
    //     camisetaSchema.setImgUrl(filename)
    // }
});

// Get con parámetros: buscar una camiseta

router.post('/usuario/getbyemail', upload.single('email'), async(req, res) => {
    const email = req.body.email;

    try {
        const usuario = await User.findOne({email});
        res.status(200).json(usuario);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        });
    }
});

// Get con todos los documentos

router.get('/users', async(req, res) => {
    try {
        
        const camisetaDB = await User.find();
        res.json(camisetaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Eliminar una nota

router.delete('/user/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const camisetaDB = await User.findByIdAndDelete({_id});
        if(!camisetaDB){
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
            })
        }
        res.json(camisetaDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

// Actualizar datos de una camiseta

router.put('/user/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const camisetaDB = await User.findByIdAndUpdate(
            _id, body, {new: true});
            res.json(camisetaDB);
        } catch (error) {
            return res.status(400).json({
                mensaje: 'Ocurrio un error', error })
            }
        });



// Exportamos la configuración de express app
module.exports = router;
