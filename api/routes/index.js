'use strict';

let express = require('express'),
	apiRouter = express.Router(),
	universitiesController = require('../controllers/universitiesController'),
	careersController = require('../controllers/careersController'),
	coursesController = require('../controllers/coursesController');

apiRouter.route('/universities')
	.post(universitiesController.create)
	.get(universitiesController.findAll);

apiRouter.route('/universities/:university_id')
	.get(universitiesController.getByCode)
	.put(universitiesController.updateByCode)
	.delete(universitiesController.deleteByCode);

apiRouter.route('/universities/:university_id/careers')
	.post(careersController.create)
	.get(careersController.findAll);

apiRouter.route('/universities/:university_id/careers/:career_id')
	.get(careersController.getById)
	.put(careersController.updateById)
	.delete(careersController.deleteById);

apiRouter.route('/universities/:university_id/careers/:career_id/courses')
	.post(coursesController.create)
	.get(coursesController.findAll);

apiRouter.route('/universities/:university_id/careers/:career_id/courses/:course_id')
	.get(coursesController.getById)
	.put(coursesController.updateById)
	.delete(coursesController.deleteById);

module.exports = apiRouter;