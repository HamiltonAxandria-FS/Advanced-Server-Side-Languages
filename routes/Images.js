const express = require('express')
const router = express.Router()
const ImageCtrl = require('../controllers/Images')

router.get('/', ImageCtrl.index)
router.get('/new', ImageCtrl.form)
router.get('/:id', ImageCtrl.show)
router.get('/:id/edit', ImageCtrl.form)
router.post('/', ImageCtrl.create)
router.post('/:id', ImageCtrl.update)
router.delete('/:id', ImageCtrl.remove)
router.post('/:id/delete', ImageCtrl.remove)

module.exports = router