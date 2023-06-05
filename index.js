const express = require('express')
const app = express()

app.get('/products/all', (request, response) => {
    response.send(` 
        GET Products: ${request.get('Page')}, ${request.get('Sort')}, ${request.get('Order')}
    `)
})

app.get('/products/:id', (request, response) => {
    response.send(`
        GET Products: ${request.params.id}
    `)
})

app.get('/products/:id-:size-:color', (request, response) => {
    response.send(`
        GET Products: ${request.params.id}, ${request.params.size}, ${request.params.color}
    `)
})

app.listen(3000)