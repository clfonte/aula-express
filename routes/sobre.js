const express = require('express');

const router = express.Router();

// endreço raiz sem parâmetro definido inicialmente
router.get('/', (req, res) =>{
    // ja busca o nome do arquivo que vai renderizar
        res.render('sobre', {conteudo: 'Sobre nozes'});
})

module.exports=router;