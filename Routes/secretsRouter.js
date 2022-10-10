const express = require("express");
const Secrets = require("../Routes/secretsRouter");
const secrets = express.Router();

secretsRouter.route("/");

module.exports = secretsRouter;
