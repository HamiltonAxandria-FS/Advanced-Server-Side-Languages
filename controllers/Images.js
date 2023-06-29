const { Image, Variant }= require('../models')

const index = async (req, res) => {
    const images = await image.findAll()
    res.render('views/images/index', { images })
   // res.json(images)
}
const form = async (req, res) => {
    //res.send('Image.form')
    const variants = await Variant.findAll()
    if (req.params.id) {
        const image = await image.findByPk(req.params.id)
        res.render('views/images/edit', { image, variants })
    } else {
       res.render('views/images/create', {variants})
    }
}
const show = async (req, res) => {
    const image = await image.findByPk(req.params.id)
    const variant = await image.getVariant()
    res.render('views/images/show', { image })
    //res.json(image)
}
const create = async (req, res) => {
    //const image = Products.create(req.body)
    const image = await image.create(req.body)
    res.redirect('/images/' + image.id)
    //res.json(image)
}
const update = async (req, res) => {
    const image = await image.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/images/' + req.params.id)
   // res.json(image)
}
const remove = async (req, res) => {
   const image = await Image.destroy({ where: {id: req.params.id}})
   res.json(image)
}

module.exports = { index, form, show, create, update, remove }
