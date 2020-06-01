import express from 'express'

const app = express()

//Creating route to test

app.get('/users', (request, response) => {
  console.log('Listing users...')

  response.json([
    'Name 1',
    'Name 2',
    'Name 3'
  ])
})

app.listen(3333)