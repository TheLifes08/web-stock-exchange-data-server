const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./routes");
const settings = require("./settings");

const server = express();

server.use(cookieParser());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors({
   credentials: true,
   origin: true,
   methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
   allowedHeaders: 'Authorization, X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept'
}));
server.use("/", routes);

server.listen(settings.port, settings.ip, () => {
   console.log(`Server started at http://${settings.ip}:${settings.port}`);
});