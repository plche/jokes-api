const express = require('express');
const JokeRouter = express.Router();
const JokeController = require('../controllers/joke.controller');

JokeRouter.get('/', JokeController.findAllJokes);
JokeRouter.get('/random', JokeController.findOneRandomJoke);
JokeRouter.get('/:_id', JokeController.findOneSingleJoke);
JokeRouter.post('/new', JokeController.createNewJoke);
JokeRouter.put('/update/:_id', JokeController.updateExistingJoke);
JokeRouter.delete('/delete/:_id', JokeController.deleteAnExistingJoke);

module.exports = JokeRouter;