const express = require('express');
const router = express.Router();
const movieController = require('../app/api/controllers/movies');

router.get('/', movieController.getAll);
router.post('/', movieController.create);
router.get('/:movieId', movieController.getById);
router.get('genre/:genre', movieController.getByGenre);
//router.get('/:date1/date:2', movieController.getAllBetweenDate);
router.put('/:movieId', movieController.updateById);
router.delete('/:movieId', movieController.deleteById);

module.exports = router;