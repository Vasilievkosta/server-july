const { Order } = require('../models/models');
const ApiError = require('../error/ApiError');

class OrderController {
    async create(req, res, next) {
        try {
            const { userId, masterId } = req.body;            
            const order = await Order.create({ userId, masterId });
            return res.json(order);

        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {        
        const orders = await Order.findAll();
        res.json(orders);
    }

    async getOne(req, res) {
        const id = req.params.id;
		const order = await Order.findOne({where: {id}});
        // const masters = await Master.findAll();
        // const master = masters.find(el => el.id === +id);
        res.json(order);
    }

    // async delete(req, res) {
        // const id = req.params.id;       
        // const update = await Order.filter(el => el.id !== +id);
        // res.json(update);
    // }
}
module.exports = new OrderController();