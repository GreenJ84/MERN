const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then( allJokes => res.json({
            jokes: allJokes
        }))
        .catch(err => res.json({message: "Somthing has gone astray", error: err}))
};

module.exports.findOneJoke = (req, res) => {
    Joke.find({_id: req.params.id})
        .then(oneJoke => res.json({joke: oneJoke}))
        .catch(err => res.json({message: "Somthing has gone astray", error: err}))
};

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({message: "Somthing has gone astray", error: err}))
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedJoke => res.json({joke: updatedJoke}))
        .catch(err => res.json({message: "Somthing has gone astray", error: err}))
};

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(results => res.json({ result: results }))
        .catch(err => res.json({message: "Somthing has gone astray", error: err}))
};