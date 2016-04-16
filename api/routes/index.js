'use strict';

let express = require('express'),
	apiRouter = express.Router(),
	universitiesController = require('../controllers/universitiesController');

apiRouter.route('/universities')
	.post(universitiesController.create)
	.get(universitiesController.findAll);

apiRouter.route('/universities/:university_id')
	.get(universitiesController.getByCode)
	.put(universitiesController.updateByCode)
	.delete(universitiesController.deleteByCode);

module.exports = apiRouter;