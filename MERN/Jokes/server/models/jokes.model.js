const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Why submit if you dont have a joke? Try again!"],
        minLength: [10, "The joke cant be that short, she is just not pleased by it..."]
    },
    punchline: {
        type: String,
        required: [true, "The joke has to have a punchline!"],
        minLength: [4, "The punchline is really under 4 characters? I dont think so!"]
    }
}, {timestamps: true});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;