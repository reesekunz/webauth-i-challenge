const express = require("express");

// const projectsRouter = require("../projects/projectsRouter");
// const resourcesRouter = require("../resources/resourcesRouter");

const server = express();

server.use(express.json());

// server.use("/api/projects", projectsRouter);
// server.use("/api/resoureces", resourecesRouter);

module.exports = server;
