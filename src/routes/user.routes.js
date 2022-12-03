const {Router} = require('express');

const router = Router();


router.post('/users', (req, res)=>{
    res.send('Esta es la ruta para crear ususrio')
})


module.exports= router;