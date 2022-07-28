const Router = require('express');
const router = new Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.create);
router.get('/', orderController.getAll);
router.get('/:id', orderController.getOne);
router.delete('/:id', orderController.delete);

module.exports = router;