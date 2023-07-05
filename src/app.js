const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')['development'])

app.get('/', (request, response) => {
  response.send('Application is running successfully');
});

app.listen(port, () => {
  console.log('Express & Knex applications are running successfully')
})

app.get('/pets', (request, response) => {
  knex('pet')
    .select('*')
    .then(pets => {
      var petNames = pets.map( pet => pet.name)
      response.json(petNames)
    })
})