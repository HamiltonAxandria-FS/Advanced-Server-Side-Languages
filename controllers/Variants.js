const { Variant, Product }= require('../models')

const index = async (req, res) => {
    const variant = await Variant.findAll()
    res.render('views/variants/index', { variant })
   // res.json(variant)
}
const form = async (req, res) => {
    //res.send('Variant.form')
    const products = await Product.findAll()
    if (req.params.id) {
        const variant = await Variant.findByPk(req.params.id)
        res.render('views/variants/edit', { variant, products })
    } else {
       res.render('views/variants/create', {products})
    }
}
const show = async (req, res) => {
    const variant = await Variant.findByPk(req.params.id)
    const product = await variant.getProduct()
    res.render('views/variants/show', { variant, product })
    //res.json(variant)
}
const create = async (req, res) => {
    //const variant = Products.create(req.body)
    const variant = await Variant.create(req.body)
    res.redirect('/variants/' + variant.id)
    //res.json(variant)
}
const update = async (req, res) => {
    const variant = await Variant.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/variants/' + req.params.id)
   // res.json(variant)
}
const remove = async (req, res) => {
   const variant = await Variant.destroy({ where: {id: req.params.id}})
   res.json(variant)
}

module.exports = { index, form, show, create, update, remove }