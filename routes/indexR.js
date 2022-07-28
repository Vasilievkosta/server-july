const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
// const orderRouter = require('./orderRouter');
const masterRouter = require('./masterRouter');
const cityRouter = require('./cityRouter');

router.use('/user', userRouter);
// router.use('/order', orderRouter);
router.use('/master', masterRouter);
router.use('/city', cityRouter);

module.exports = router;