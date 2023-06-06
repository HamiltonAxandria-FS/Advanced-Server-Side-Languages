const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}))
const productRouter = require('./routes/Products')
app.set(`views`,__dirname + `/templates/views`)
app.set('view engine', 'twig')

app.get('/', (req,res) => {
    res.render("home")
})

app.use("/products", productRouter)



app.listen(3000)