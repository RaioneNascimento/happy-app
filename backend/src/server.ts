import express from 'express';

import './database/connection';

const app = express();

app.use(express.json());

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (Lista, Item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// QUERY Params: http://localhost:3333/users?search=raione
// ROUTE Params: http://localhost:3333/users/1 (Identificar um recurso)
// BODY: http://localhost:3333/users (Identificar um recurso)

app.get('/users', (request, response) => {
  return response.json({ message: 'Teste' });
});

app.listen(3333);
