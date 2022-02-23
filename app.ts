import express from 'express';

const app = express();
const port = 3000;

//POST - post create a resource on the server
//GET - get a resource from a server
//PUT - put update a resource on the server
//DELETE - delete a resource on the server

app.get("/", (request, response) => {
    response.send("BIG MAN")
})

app.listen(port, () => {
    console.log(`Im Listening on port: ${port}`)
})
