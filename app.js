const express = require('express');
const {v4:uuidv4} = require('uuid');

const app = express();

app.use(express.json());

const projects =[];

/*
GET: buscar informação do back-end
POST: criar informações do back-end
PUT/PATCH: alterar informações do back-end
DELETE: deletar informações do back-end
*/

/*
Query Params: Vamos usar principalmente para filtros e paginação
Route Params: Identificar recursos na hora de atualizar ou deletar
Request body: Resto do conteúdo na hora de criar ou editar
*/

//console.log(app);

app.get('/projects', (request, response) => {
    //const {title, owner} = request.query;

    //console.log(title);
    //console.log(owner);
    
    return response.json(projects);
})

app.post('/projects', (request, response) => {
    const {title, owner} = request.body;

    //console.log(title);
    //console.log(owner);

    const project = {id: uuidv4(), title, owner};

    projects.push(project);//esse pus vai jogar a criação do nosso projeto para o nosso array
    
    //console.log(project.id)

    return response.json(project);//sempre retornar o projeto recém criado e nunca exibir a lista completa
})

app.put('/projects/:id', (request, response) => {
    const params = request.params;

    console.log(params);
    
    return response.json([
        'Project50',
        'Projeto1',
        'Projeto2',
        'Projeto4'
    ])
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto2',
        'Projeto4'
    ])
})

app.listen(3000, () => {
    console.log('Servidor rodando...');
})