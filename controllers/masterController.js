const { Master } = require('../models/models');
const ApiError = require('../error/ApiError');

class MasterController {
    async create(req, res, next) {
        try {
            const { name, rating, cityId } = req.body;            
            const master = await Master.create({ name, rating, cityId });
            return res.json(master);

        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }

    async getAll(req, res) {
        console.log('All masters!!')
        const masters = await Master.findAll();
        res.json(masters);
    }

    async getOne(req, res) {
        const id = req.params.id;
		const master = await Master.findOne({where: {id}});
        // const masters = await Master.findAll();
        // const master = masters.find(el => el.id === +id);
        res.json(master);
    }

    // async delete(req, res) {
        // const id = req.params.id;
        // console.log(id);
        // // const master = read();
        // const update = await Master.filter(el => el.id !== +id);
        // res.json(update);
    // }
}
module.exports = new MasterController()