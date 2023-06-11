const Products = require('../models/Products')

const index = (req, res) => {
    const products = Products.all()
    res.render('views/products/index', { products })
   // res.json(products)
}
const form = (req, res) => {
    //res.send('Product.form')
    if (req.params.id) {
        const product = Products.find(req.params.id)
        res.render('views/products/edit', { product })
    } else {
       res.render('views/products/create')
    }
}
const show = (req, res) => {
    const product = Products.find(req.params.id)
    res.render('views/products/show', { product })
    //res.json(product)
}
const create = (req, res) => {
    const product = Products.create(req.body)
    res.redirect('/products/' + product.id)
    //res.json(product)
}
const update = (req, res) => {
    const product = Products.update(req.params.id, req.body)
    res.redirect('/products/' + req.params.id)
   // res.json(product)
}
const remove = (req, res) => {
   const product = Products.remove(req.params.id)
   res.json(product)
}

module.exports = { index, form, show, create, update, remove }