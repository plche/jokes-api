const Joke = require('../models/joke.model');

const findAllJokes = (request, response) => {
    Joke.find()
        .then(allDaJokes => response.status(200).json(allDaJokes))
        .catch(err => {
            response.statusMessage = `Hubo un error al ejecutar la búsqueda: ${err}`;
            return response.status(400).end();
        });
}

const findOneSingleJoke = (request, response) => {
    Joke.findOne({_id: request.params._id})
        .then(oneSingleJoke => response.status(200).json(oneSingleJoke))
        .catch(err => {
            response.statusMessage = `Hubo un error al ejecutar la búsqueda: ${err}`;
            return response.status(400).end();
        });
}

const findOneRandomJoke = (request, response) => {
    Joke.aggregate([{$sample: {size: 1}}])
        .then(oneRandomJoke => response.status(200).json(oneRandomJoke[0]))
        .catch(err => {
            response.statusMessage = `Hubo un error al ejecutar la búsqueda: ${err}`;
            return response.status(400).end();
        });
}

const createNewJoke = (request, response) => {
    Joke.create(request.body)
        .then(newlyCreatedJoke => response.status(201).json(newlyCreatedJoke))
        .catch(err => {
            console.log(err);
            response.statusMessage = `Hubo un error al ejecutar el insert: ${err}`;
            return response.status(400).json(err);
        });
}

const updateExistingJoke = (request, response) => {
    Joke.findOneAndUpdate({_id: request.params._id}, {$set: request.body}, {new: true})
        .then(updateJoke => response.status(202).json(updateJoke))
        .catch(err => {
            response.statusMessage = `Hubo un error al ejecutar la actualización: ${err}`;
            return response.status(400).end();
        });
}

const deleteAnExistingJoke = (request, response) => {
    Joke.deleteOne({_id: request.params._id})
        .then(result => response.status(204).json(result))
        .catch(err => {
            response.statusMessage = `Hubo un error al ejecutar la eliminación: ${err}`;
            return response.status(400).end();
        });
}

const JokeController = {
    findAllJokes,
    findOneSingleJoke,
    findOneRandomJoke,
    createNewJoke,
    updateExistingJoke,
    deleteAnExistingJoke
}

module.exports = JokeController;
