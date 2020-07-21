const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
    joke:{
        type: String,
        required: [true, "that isn't funny"]
    }
	
	
});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;