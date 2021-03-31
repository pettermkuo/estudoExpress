const express = require('express');
const app = express();

/*
GET: buscar informação do back-end
POST: criar informações do back-end
PUT/PATCH: alterar informações do back-end
DELETE: deletar informações do back-end
*/
//console.log(app);

app.get('/', (request, response) => {
    return response.json([
        'projeto1',
        'projeto2',
    ]);
})

//app.post()

app.listen(3000, () => {
    console.log('Servidor rodando...');
})