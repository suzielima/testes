//console.log('thats all folks')

//para usar o expresse, tirar o console.log e colocar o código abaixo


const express = require('express')
const app = express()

//----------------------------------

//para comunicar o o servidor com o browser, usar o método listen fornecido pelo express

app.listen(3000, function(){
    console.log('server running on port 3000')
})

//----------------------------------

//iniciando o CRUD
//READ(GET)
//Esta operação é executada sempre que vc visita uma pagina web. ao ser iniciado, os navegadores enviam uma solicitacao GET ao servidor para executar uma operacao LEITURA

// app.get('/', (req, res) =>{
//     res.send('Thats all folks!')
// } )

//----------------------------------

//configurar view engine no Express

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    res.render ('index.ejs')
})


