const express = require("express");
const cors = require("cors")
const port = 8000

const app = express();
const jokes = "Jokes"

// This will fire our mongoose.connect statement to initialize our database connection


app.use(cors())


app.use(express.json(), express.urlencoded({ extended: true }));

require("./config/mongoose.config");

// This is where we import the users routes function from our user.routes.js file
const AllMyJokesRoutes = require("./routes/jokes.routes");
AllMyJokesRoutes(app);

app.listen(port, () => console.log(`The server is all fired up on port ${port}`));







