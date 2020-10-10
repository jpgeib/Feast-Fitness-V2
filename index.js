//Boilerplate

const express = require("express");

const app = express();
const server = require("http").createServer(app);

const PORT = process.env.PORT || 3001;

//Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));