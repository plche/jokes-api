const express = require('express');
// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");
const app = express();
const JokeRouter = require('./server/routes/joke.routes');

const port = 8000;

// Para poder acceder a los datos POST, necesitamos poder extraerlos del objeto "request" (solicitud).
// Asegurarse de que las siguientes líneas se encuentren por encima de cualquier bloque de código app.get o app.post
// Tanto express.urlencoded() y express.json() son funciones middleware en Express.
// Son responsables de proporcionar y analizar los datos de "request.body".
app.use(express.json(), express.urlencoded({ extended: true }));
app.use('/api/jokes', JokeRouter);

const server = app.listen(port, () =>
    console.log(`Server is loaded, locked and running on port ${server.address().port}!`)
);
