const { Author } = require('../models/author.model');
module.exports.index = (req, res) => {
    res => res.json({message: "Hello There"})
}

module.exports.createNew = (req, res) => {
    Author.create(req.body)
        .then((author) => res.json(author))
        .catch(err => res.status(400).json({ message: 'There has been a create controller error', err,
        error: err}))
}

module.exports.findAll = (req, res) => {
    Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.status(400).json({message: "There has been a findAll controller error",
    error: err}))
}

module.exports.findOne = (req, res) => {
    Author.findOne({_id: req.params.id})
    .then(author => res.json(author))
    .catch(err => res.status(400).json({message: 'There has been a findOne controller error',
    error: err}))
}

module.exports.update = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(author => res.json(author))
    .catch(err => res.status(400).json({message: 'There has been a findOneAndUpdate controller error',
    error: err}))
}

module.exports.delete = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then(results => res.json(results))
    .catch(err => res.json({message: 'There has been a deleteOne controller error',
    error: err}))
}