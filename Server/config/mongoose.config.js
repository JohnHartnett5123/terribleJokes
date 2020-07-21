const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Jokes", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})


	.then(() => console.log("holy shit it actually worked"))
	.catch(err => console.log("unsurpisingly it is completely broken", err));


